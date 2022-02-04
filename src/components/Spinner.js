import { classNames } from '../utils/classNames'

export function Spinner({ centered, className }) {
  return (
    <div
      className={classNames(
        className,
        'mt-5 text-center',
        !centered && 'inline-block',
        centered && 'flex items-center justify-center'
      )}
    >
<div class="spinner-border mt-5 mb-5" role="status">
  <span class="visually-hidden mt-5">Loading...</span>
</div>
    </div>
  )
}
