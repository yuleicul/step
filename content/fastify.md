# Fastify <Tag variant='total' value="5.5 h" />

::: details To learn

- Review [JWT](https://jwt.io)
- Continue watching [1, 2, 3... Fastify! - Matteo Collina - YouTube](https://www.youtube.com/watch?v=-X84Cq-nsLw)
- _read [here](https://fastify.dev/docs/latest/Reference/Plugins/#handle-the-scope) to understand how to handle the scope of a plugin_
- [the hitchhiker's guide to plugins](https://fastify.dev/docs/latest/Guides/Plugins-Guide/)
- [JSON Schema](https://json-schema.org/)
- Read [Validation and Serialization](https://fastify.dev/docs/latest/Reference/Validation-and-Serialization/) to learn more
- Read [Content-Type Parser](https://fastify.dev/docs/latest/Reference/ContentTypeParser/) to learn more about Fastify's default parsing functionality and how to support other content types
- Read the [testing](https://fastify.dev/docs/latest/Guides/Testing/) documentation to learn more!

:::

::: details Ideas

- Rebuild blurcasts' backend with fastify

:::

## 2024-03-07 Encapsulation and breaking it <Tag value="2 h" />

[Should you contribute to Open Source? - YouTube](https://www.youtube.com/watch?v=Qo8FQapF-nU)

- "Open source is the way I could find the mentor."

[Building a modular monolith with Fastify - Matteo Collina, Node Congress 2023 - YouTube](https://www.youtube.com/watch?v=e1jkA-ee_aY&t=1s)

- [Encapsulation](https://mcollina.github.io/take-your-http-server-to-ludicrous-speed/#47)
- [Breaking encapsulation](https://mcollina.github.io/take-your-http-server-to-ludicrous-speed/#49)

[1, 2, 3... Fastify! - Matteo Collina - YouTube](https://www.youtube.com/watch?v=-X84Cq-nsLw)

- Plugin `autoload`
- Test with `tape`

## 2024-03-05 Getting started <Tag value='3.5 h' />

Fastify is a **web framework**. Other than React, Vue, and Svelte those frontend web framework, there are backend web framework, such as Express and Fastify.

[Getting-Started | Fastify](https://fastify.dev/docs/latest/Guides/Getting-Started/)

::: details
Your first plugin:

- With Fastify everything is a plugin.
- This is one of the best features of Fastify, it will load your plugins in the same order you declare them, and it will load the next plugin only once the current one has been loaded. In this way, we can register the database connector in the first plugin and use it in the second
- Plugin loading starts when you call `fastify.listen()`, `fastify.inject()` or `fastify.ready()`
- The MongoDB plugin uses the `decorate` API to add custom objects to the Fastify instance, making them available for use everywhere.

Loading order of your plugins:

```
└── plugins (from the Fastify ecosystem)
└── your plugins (your custom plugins)
└── decorators
└── hooks
└── your services
	│
	└── service A
	│   └── plugins (from the Fastify ecosystem)
	│   └── your plugins (your custom plugins)
	│   └── decorators
	│   └── hooks
	│   └── your services
	│
	└── service B
		└── plugins (from the Fastify ecosystem)
		└── your plugins (your custom plugins)
		└── decorators
		└── hooks
		└── your services
```

:::

[Take your http server to ludicrous speed - YouTube](https://www.youtube.com/watch?v=5z46jJZNe8k)

[A "fast" Introduction to Fastify - Matteo Collina, NearForm - YouTube](https://www.youtube.com/watch?v=MOvLdfUhqrU)

[A Fastify Tale of Shapes - Matteo Collina, NearForm - YouTube](https://www.youtube.com/watch?v=g-6Ig8k6Nzc)
