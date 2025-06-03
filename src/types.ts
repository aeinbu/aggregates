
export type NoValue = null | undefined

export type ComparableType = number | string

export type SummableType = number

export type SelectorFn<TIn, TOut> = (obj: TIn) => TOut;
