import { AnyFunction } from "@chakra-ui/utils"
import { useCallback, useRef } from "react"

export function useGetLatest<T>(obj: T) {
  const ref = useRef<T>()
  ref.current = obj

  return useCallback(() => ref.current, [])
}

type DebounceRef = {
  timeout?: NodeJS.Timeout
  promise?: Promise<any>
  reject?: AnyFunction
  resolve?: AnyFunction
}

export function useAsyncDebounce<F extends AnyFunction>(defaultFn: F, defaultWait = 0) {
  const debounceRef = useRef<DebounceRef>({})

  const getDefaultFn = useGetLatest(defaultFn)
  const getDefaultWait = useGetLatest(defaultWait)

  return useCallback(
    async (...args) => {
      if (!debounceRef.current.promise) {
        debounceRef.current.promise = new Promise((resolve, reject) => {
          debounceRef.current.resolve = resolve
          debounceRef.current.reject = reject
        })
      }

      if (debounceRef.current.timeout) {
        clearTimeout(debounceRef.current.timeout)
      }

      debounceRef.current.timeout = setTimeout(async () => {
        delete debounceRef.current.timeout
        try {
          const defaultFunction = getDefaultFn()
          if (!defaultFunction) {
            debounceRef.current?.reject?.(new Error("No default function found"))
            return
          }
          debounceRef.current?.resolve?.(await defaultFunction(...args))
        } catch (err) {
          debounceRef.current?.reject?.(err)
        } finally {
          delete debounceRef.current.promise
        }
      }, getDefaultWait())

      return debounceRef.current.promise
    },
    [getDefaultFn, getDefaultWait],
  )
}
