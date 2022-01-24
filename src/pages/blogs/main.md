# Main

Esto es un articlo de prueba.

🔥 Simpler testing with dependency injection
Jest makes it easy to mock or stub out functions, but you can also use dependency injection to make things easy to stub:

``` js
export default {
  props: {
    fetchData: {
      type: Function,
      required: true,
    },
  },
  methods: {
    setText() {
      this.text = this.fetchData();
    },
  },
};
```

``` js
it('should work', () => {
  const { getByText } = render(MyComponent, {
    props: {
      async fetchData() {
        return 'Test text';
      },
    },
  });
  getByText(/Test text/);
});
```

(Example is simplified to illustrate the concept)

This is great for mocking API calls, or anything else that's tricky when testing.

If it's coming from outside of the component, it's pretty straightforward to stub it out or mock it however you need, in order to get the test to do what you want.

You can do this in a variety of ways, depending on your use case:

- props
- provide/inject
- Vuex
- custom plugin
_(There are probably many more)_

🔥 Special CSS pseudo-selectors in Vue
If you want some styles to apply specifically to slot content, you can do that with the :slotted pseudo-selector:

``` js
<style scoped>
  /* Add margin to <p> tags within the slot */
  :slotted(p) {
    margin: 15px 5px;
  }
</style>
```

You can also use :global to have styles apply to global scope, even within the `<style scoped>` block:

``` js
<style scoped>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
</style>
```

Of course, if you have lots of global styles you want to add, it's probably easier to just add a second `<style>` block:

``` js
<style scoped>
  /* Add margin to <p> tags within the slot */
  :slotted(p) {
    margin: 15px 5px;
  }
</style>
```

``` html
<style>
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
</style>
```

This allows you to be more specific than using

[https://v3.vuejs.org/api/sfc-style.html#slotted-selectors](https://v3.vuejs.org/api/sfc-style.html#slotted-selectors)

📜 Composable Vue - VueDay 2021
Anthony Fu of VueUse, NuxtLabs, and the core team, gives us a bunch of fantastic tips on using the composition API.

You can also watch a video of the talk he gave (the article is a transcript of the talk).

Read it here: Composable Vue - VueDay 2021

💬 The absence of bugs
"Testing can only prove the presence of bugs, not their absence." — Edsger W. Dijkstra

🧠 Spaced-repetition: Reactive CSS
The best way to commit something to long-term memory is to periodically review it, gradually increasing the time between reviews 👨‍🔬

Actually remembering these tips is much more useful than just a quick distraction, so here's a tip from a couple weeks ago to jog your memory.

In Vue 3 we can use reactive values in our `<style>` block just like we can in the `<template>` block:

``` js
<style scoped>
  .button {
    color: v-bind(buttonColor);
  }
</style>
```

Behind the scenes Vue uses CSS computed properties (aka CSS variables) that are scoped to each component.

This way the CSS remains static, but we can dynamically update the CSS variables whenever the reactive value changes.

More info can be found in the docs.
