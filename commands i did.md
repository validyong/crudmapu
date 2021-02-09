# powershell

まzshでも同じだろうが

create this app

```powershell
yarn create react-app crudmapu --template typescript
```
see this site: [Create React App](https://create-react-app.dev/docs/adding-typescript/)

read this and do: [React+TS and TDD](https://react-typescript-tdd.firebaseapp.com/styling/index.html)

install Enzyme
```powershell
yarn add enzyme enzyme-adapter-react-16 --dev
```
you install `enzyme` and `enzyme-adapter-react-16`

i don't sure that React version is 16 though...

VSCODEだと一度package-lock.jsonの中身を確認しないとEnzymeがエラー表示になって焦ったわ

再起動しないと治らないimport errorあるゾ~

プラグイン入れても駄目ですね...

WebStromに乗り換えて、どうぞ

installing ESLint

```powershell
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
```

`mount` does not work because of the version `enzyme-adapter-react-16` compared to my `react` version at 17, sadly...

Unofficial adapter for React 17 for Enzyme.
```powershell
yarn add --dev @wojtekmaj/enzyme-adapter-react-17
```

github no contribution