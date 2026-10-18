import type {Config} from 'tailwindcss';
/** Design tokens: monochrome palette and type. Edit here, not in components. */
const config:Config={
  content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme:{extend:{
    colors:{ink:'#0a0a0a',ink2:'#141414',paper:'#f5f5f2',g1:'#a3a3a3',g2:'#656565',line:'rgba(255,255,255,.14)'},
    fontFamily:{serif:['Fraunces','Georgia','serif'],sans:['Manrope','system-ui','sans-serif'],mono:['JetBrains Mono','ui-monospace','monospace']},
  }},
  plugins:[],
};
export default config;
