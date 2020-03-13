# Use

- [Next.js](https://nextjs.org/) ([React](https://ja.reactjs.org/))
- [TypeScript](https://www.typescriptlang.org/)
- [PWA](https://developer.mozilla.org/ja/docs/Web/Progressive_web_apps) ([next-offline](https://github.com/hanford/next-offline))
- [styled-components](https://styled-components.com/) + [styled-media-query](https://github.com/morajabi/styled-media-query)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [EditorConfig](https://editorconfig.org/) + [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/ja/) + [React Testing Library](https://testing-library.com/)
- [Stroybook](https://storybook.js.org/)
  - addons
    - [knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs)
    - [actions](https://github.com/storybookjs/storybook/tree/master/addons/actions)
    - [storysource](https://github.com/storybookjs/storybook/tree/master/addons/storysource)
    - [viewport](https://github.com/storybookjs/storybook/tree/master/addons/viewport)
    - [storyshots](https://github.com/storybookjs/storybook/tree/master/addons/storyshots)
    - [backgrounds](https://github.com/storybookjs/storybook/tree/master/addons/backgrounds)
    - [console](https://github.com/storybookjs/storybook-addon-console)
    - [links](https://github.com/storybookjs/storybook/tree/master/addons/links)
- [Husky](https://github.com/typicode/husky)

# Command

```sh
# dev
npm run dev

# build
npm run build

# start
npm run start
```

## Storybook
```sh
npm run storybook

# build
npu run build-storybook
```

## Lint
```sh
npm run lint

# auto fix
npm run lint -- --fix
```

## Test
```sh
npm test

# watch
npm test -- --watch

# update snapshot
npm test -- -u -t="[TargetName]"

# update snapshot all
npm test -- -u

# coverage
npm test -- --coverage
```

## Image Snapshot
```sh
# image snapshot (run while storybook running)
npm run puppeteer-storyshots

# update image snapshot (run while storybook running)
npm run puppeteer-storyshots -- -u -t="[TargetName]"

# update image snapshot all (run while storybook running)
npm run puppeteer-storyshots -- -u
```
