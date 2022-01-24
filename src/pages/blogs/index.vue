<script setup lang='ts'>
import * as content from './main.md'
console.log(content.default)

</script>

<template>
  <main class="prose prose-stone mx-auto prose-headings:text-rose-600 dark:prose-headings:text-indigo-400 prose-pre:bg-stone-800 dark:prose-invert">
    <h1>Main</h1>
    <p>Esto es un articlo de prueba.</p>
    <p>🔥 Simpler testing with dependency injection Jest makes it easy to mock or stub out functions, but you can also use dependency injection to make things easy to stub:</p>
    <pre>
        <code>
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
        </code>
    </pre>
    <pre class="language-js">
    <code class="language-js">
    <span class="token function">it</span>
<span class="token punctuation">(</span>
<span class="token string">'should work'</span>
<span class="token punctuation">,</span> <span class="token punctuation">(</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> getByText <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">render</span>
  <span class="token punctuation">(</span>MyComponent<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    props<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">async</span> <span class="token function">fetchData</span>
      <span class="token punctuation">(</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">'Test text'</span>
        <span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
  <span class="token punctuation">;</span>
  <span class="token function">getByText</span>
  <span class="token punctuation">(</span>
  <span class="token regex">
      <span class="token regex-delimiter">/</span>
  <span class="token regex-source language-regex">Test text</span>
  <span class="token regex-delimiter">/</span>
  </span>
  <span class="token punctuation">)</span>
  <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token punctuation">;</span>
</code>
</pre>
    <p>(Example is simplified to illustrate the concept)</p>
    <p>This is great for mocking API calls, or anything else that’s tricky when testing.</p>
    <p>If it’s coming from outside of the component, it’s pretty straightforward to stub it out or mock it however you need, in order to get the test to do what you want.</p>
    <p>You can do this in a variety of ways, depending on your use case:</p>
    <ul>
      <li>props</li>
      <li>provide/inject</li>
      <li>Vuex</li>
      <li>
        custom plugin <em>(There are probably many more)</em>
      </li>
    </ul>
    <p>🔥 Special CSS pseudo-selectors in Vue If you want some styles to apply specifically to slot content, you can do that with the :slotted pseudo-selector:</p>
    <pre class="language-js">
    <code class="language-js">
    <span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
  <span class="token comment">/* Add margin to &lt;p&gt; tags within the slot */</span>
  <span class="token operator">:</span>
  <span class="token function">slotted</span>
  <span class="token punctuation">(</span>
  <span class="token parameter">p</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    margin<span class="token operator">:</span> <span class="token number">15</span>px <span class="token number">5</span>px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span>
<span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code>
</pre>
    <p>You can also use :global to have styles apply to global scope, even within the <code>&lt;style scoped&gt;</code> block:</p>
    <pre class="language-js">
    <code class="language-js">
    <span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
  <span class="token operator">:</span>
  <span class="token function">global</span>
  <span class="token punctuation">(</span>
  <span class="token parameter">body</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    margin<span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">;</span>
    padding<span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">;</span>
    font<span class="token operator">-</span>family<span class="token operator">:</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span>
<span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code>
</pre>
    <p>Of course, if you have lots of global styles you want to add, it’s probably easier to just add a second <code>&lt;style&gt;</code> block:</p>
    <pre class="language-js">
    <code class="language-js">
    <span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
  <span class="token comment">/* Add margin to &lt;p&gt; tags within the slot */</span>
  <span class="token operator">:</span>
  <span class="token function">slotted</span>
  <span class="token punctuation">(</span>
  <span class="token parameter">p</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    margin<span class="token operator">:</span> <span class="token number">15</span>px <span class="token number">5</span>px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span>
<span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code>
</pre>
    <pre class="language-html">
    <code class="language-html">
    <span class="token tag">
    <span class="token tag">
    <span class="token punctuation">&lt;</span>style</span>
<span class="token punctuation">&gt;</span>
</span>
<span class="token style">
    <span class="token language-css">
  <span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span>
    <span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span>
    <span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">font-family</span>
    <span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span>
</span>
<span class="token tag">
    <span class="token tag">
    <span class="token punctuation">&lt;/</span>style</span>
<span class="token punctuation">&gt;</span>
</span>
</code>
</pre>
    <p>This allows you to be more specific than using</p>
    <p>
      <em>[<a href="https://v3.vuejs.org/api/sfc-style.html#slotted-selectors" target="_blank" rel="noopener">https://v3.vuejs.org/api/sfc-style.html#slotted-selectors</a>]</em>
    </p>
    <p>📜 Composable Vue - VueDay 2021 Anthony Fu of VueUse, NuxtLabs, and the core team, gives us a bunch of fantastic tips on using the composition API.</p>
    <p>You can also watch a video of the talk he gave (the article is a transcript of the talk).</p>
    <p>Read it here: Composable Vue - VueDay 2021</p>
    <p>💬 The absence of bugs “Testing can only prove the presence of bugs, not their absence.” — Edsger W. Dijkstra</p>
    <p>🧠 Spaced-repetition: Reactive CSS The best way to commit something to long-term memory is to periodically review it, gradually increasing the time between reviews 👨&zwj;🔬</p>
    <p>Actually remembering these tips is much more useful than just a quick distraction, so here’s a tip from a couple weeks ago to jog your memory.</p>
    <p>In Vue 3 we can use reactive values in our <code>&lt;style&gt;</code> block just like we can in the <code>&lt;template&gt;</code> block:</p>
    <pre class="language-js">
    <code class="language-js">
    <span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
  <span class="token punctuation">.</span>button <span class="token punctuation">{</span>
    color<span class="token operator">:</span> v<span class="token operator">-</span>
    <span class="token function">bind</span>
    <span class="token punctuation">(</span>buttonColor<span class="token punctuation">)</span>
    <span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span>
<span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code>
</pre>
    <p>Behind the scenes Vue uses CSS computed properties (aka CSS variables) that are scoped to each component.</p>
    <p>This way the CSS remains static, but we can dynamically update the CSS variables whenever the reactive value changes.</p>
    <p>More info can be found in the docs.</p>
  </main>
</template>

<style scoped>

</style>
