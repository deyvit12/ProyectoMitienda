import { classNames } from "../utils/classNames";

export function TextField({title, inputProps ={}, className, ...props}) {
    return(
        <div className={classNames(className, 'flex flex-col')} {...props}>
        <label className="mb-2 font-bold text-lg uppercase">{title}</label>
        <input
          {...inputProps}
          type="text"
          className={classNames(
            inputProps.className,
            'border'
          )}
        />
      </div>
    
    )
}