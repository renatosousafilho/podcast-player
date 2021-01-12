# 📱 Podcast Player

Plataforma para consumo de e-books

## 🛠 Tecnologias

- React native
- Redux
- React native track player

## 🚀 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta rodando `cd podcast-player`;
3. Rode `yarn` para instalar as dependências;
4. Rode `react-native run-ios` para iniciar a aplicação.

## ⚠️ Erro na dependência react-native-track-player

Existe um prolema na hora de rodar a instalação da biblioteca para iOs.

A solucão está neste link: [[iOS] The Swift pod `react-native-track-player` depends upon `React`, which do not define modules.
#503](https://github.com/react-native-kit/react-native-track-player/issues/503#issuecomment-578087334)

```
# node_modules/react-native-track-player/react-native-track-player.podspec
s.exclude_files = ["ios/RNTrackPlayer/Vendor/AudioPlayer/Example"]
```

## 📪 Contato

- Email: [renatosousafilho@gmail.com](renatosousafilho@gmail.com)
- GitHub: [renatosousafilho](https://github.com/renatosousafilho)
- LinkedIn: [renatosousafilho](https://www.linkedin.com/in/renatosousafilho/)
