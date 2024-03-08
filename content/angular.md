# Angular <Tag variant="total" value='5.5 h' />

## 2024-03-01 Signal <Tag value="1 h" />

Components:

- [Accepting data with input properties](https://angular.dev/guide/components/inputs)
- [Custom events with outputs](https://angular.dev/guide/components/outputs)
- [Content projection with ng-content](https://angular.dev/guide/components/content-projection)
  - "You cannot add directives, styles, or arbitrary attributes to `<ng-content>`."
  - "You should not conditionally include `<ng-content>` with `ngIf`, `ngFor`, or `ngSwitch`. For conditional rendering of component content, see Template fragments."
- [Host elements](https://angular.dev/guide/components/host-elements)
- [Lifecycle](https://angular.dev/guide/components/lifecycle)
  - During initialization: `constructor` -change detection-> `ngOnChanges` -> `ngOnInt` -> `ngDoCheck` -> `ngAfterXxxInit` -> `ngAfterXxxChecked` -rendering-> `afterRender`
  - Subsequent updates: change detection `ngOnChanges` -> `ngDoCheck` -> `ngAfterXxxChecked` -rendering-> `afterRender`

Feature preview:

- [Signal](https://angular.io/guide/signals)
  - Writable and computed signals
  - Effects
- [Signal inputs](https://angular.io/guide/signal-inputs)
  - Optional/required Inputs
  - Alias
- [Model inputs](https://angular.io/guide/model-inputs)

## 2024-02-28 Components <Tag value="0.5 h" />

- [Anatomy of components](https://angular.dev/guide/components)
- [Importing and using components](https://angular.dev/guide/components/importing)
  - "The Angular team recommends using standalone components for all new development."
- [Selectors](https://angular.dev/guide/components/selectors)
  - Selector prefixes - "The Angular team recommends using a short, consistent prefix for all the custom components defined inside your project."
  - When to use an attribute selector - "You should consider an attribute selector when you want to create a component on a standard native element."
- [Styling](https://angular.dev/guide/components/styling)
  - `ViewEncapsulation.Emulated`: scoped, but other global styles can affect
  - `ViewEncapsulation.ShadowDom`: scoped, and global styles cannot affect
  - `ViewEncapsulation.None`: global

## 2024-02-27 v17 Tutorial <Tag value="1.5 h" />

[Beta Docs for v17](https://angular.dev/tutorials/learn-angular)

- Composing Components
  - `imports` and `selector`
- Control Flow in Components (Template syntax)
  - `@if`, `@else`
  - `@for`, `track`
- Deferrable Views
  - `@defer` with `on viewport`
  - `@placeholder` with `minimum`
  - `@loading` with `minimum` and `after`
- Optimizing images
  - `NgOptimizedImage` and `ngSrc`
  - layout shift
  - `priority` for LCP element
  - image loader
- Two-way binding
  - `[()]`, aka "banana in a box"
  - `[(ngModel)]` in `FormsModule`
- Reactive forms
  - `<form [formGroup]=...`
  - `<form (ngSubmit)=...`
  - `Validators` and `form.valid`
- DI (Dependency injection)
  - Creating an injectable service by `@injectable`
  - Inject
    - `inject()`
    - constructor-based DI
- Pipes
  - Built-in pipes: `DatePipe`, `DecimalPipe`, `CurrencyPipe`, ...
  - Custom pipes with`@Pipe`

## 2024-02-26 Homes Tutorial <Tag value="2.5 h" />

[First App Tutorial - Angular Homes](https://angular.io/tutorial/first-app)

- Component
  - Metadata
  - `@Input` decorator - component props
  - Prop binding - `[attribute]="value"`
  - Event binding - `(event)="handler"`
  - Template reference variable - `#var`
  - Interpolation - `{{ expression }}`
  - `*ngFor` (CommonModule)
- Interface
- Angular services (@angular/core)
  - Dependency injection
- Angular router (@angular/router)
  - ActivetedRoute (`route.snapshot.params['id']`)
  - `<router-outlet>`
- ReactiveFormsModule
- HTTP communication
