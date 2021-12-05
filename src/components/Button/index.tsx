import React, { FunctionComponent } from 'react'
import classnames from 'classnames'

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  loading?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  theme?:
    | 'light'
    | 'dark'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'primary'
    | 'ghost'
}

const Button: FunctionComponent<Props> = ({
  loading,
  size = 'md',
  theme = 'dark',
  children,
  disabled,
  className,
  ...props
}) => {
  return (
    <button
      className={classnames(
        'border leading-6 font-medium transition ease-in-out duration-150 hover:opacity-70 active:opacity-90',
        {
          'cursor-not-allowed': loading || disabled,
          'inline-flex items-center justify-center': loading,
          'text-xs py-px px-2 rounded': size === 'xs',
          'text-sm py-1 px-3': size === 'sm',
          'text-base py-2 px-4': size === 'md',
          'text-lg py-3 px-5': size === 'lg',
          'text-xl py-4 px-6': size === 'xl',
          'bg-black text-white': theme === 'dark',
          'bg-gray-300 text-gray-600': theme === 'secondary',
          'bg-green-500 text-white': theme === 'success',
          'bg-red-600 text-white': theme === 'danger',
          'bg-blue-500 text-white': theme === 'primary',
          'bg-white text-black': theme === 'light',
          'bg-transparent border-gray-900': theme === 'ghost',
          'rounded-md': size !== 'xs'
        }
      )}
    >
      {loading && (
        <svg
          className={classnames('animate-spin -ml-1  text-white', {
            'h-5 w-5 mr-3': size === 'xl',
            'h-4 w-4 mr-3': size === 'lg',
            'h-3 w-3 mr-2': size === 'md' || size === 'sm',
            'h-2.5 w-2.5 mr-1': size === 'xs'
          })}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  )
}

export default Button
