export type Config = {
}

export type PreparedContext = {
  test: () => any
}

export type Context = PreparedContext & { config: Config }

export type RouteFn = (context: Context) => any