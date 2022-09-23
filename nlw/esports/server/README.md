# BackEnd

## Entities

### Game

id
title
bannerUrl

### Ads

id
gameId
name
yearsPlaying
discord
weekDays
hourStart
hourEnd
useVoiceChannel
createdAt

1:30 -> 90 min
R$ 179,89 -> (*100 <-> /100) 17989

Datas (fuso horario / formatos diferentes i18n)

## Use Cases
- Listagem de games com contagens de anúncios
- Criação de novo anúncio
- Listagem de anúncios por game
- Buscar discord pelo ID do anúncio


# Problemas com importação do prisma
"npx prisma db push"
