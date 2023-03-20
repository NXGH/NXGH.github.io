import { useState, useEffect } from 'react'
import type { Theme } from 'shiki'

import darkPlus from 'shiki/themes/dark-plus.json'
import draculaSoft from 'shiki/themes/dracula-soft.json'
import dracula from 'shiki/themes/dracula.json'
import githubDarkDimmed from 'shiki/themes/github-dark-dimmed.json'
import githubDark from 'shiki/themes/github-dark.json'
import githubLight from 'shiki/themes/github-light.json'
import hc_light from 'shiki/themes/hc_light.json'
import lightPlus from 'shiki/themes/light-plus.json'
import materialThemeDarker from 'shiki/themes/material-theme-darker.json'
import materialThemeLighter from 'shiki/themes/material-theme-lighter.json'
import materialThemeOcean from 'shiki/themes/material-theme-ocean.json'
import materialThemePalenight from 'shiki/themes/material-theme-palenight.json'
import materialTheme from 'shiki/themes/material-theme.json'
import minDark from 'shiki/themes/min-dark.json'
import minLight from 'shiki/themes/min-light.json'
import monokai from 'shiki/themes/monokai.json'
import nord from 'shiki/themes/nord.json'
import oneDarkPro from 'shiki/themes/one-dark-pro.json'
import poimandres from 'shiki/themes/poimandres.json'
import rosePineDawn from 'shiki/themes/rose-pine-dawn.json'
import rosePineMoon from 'shiki/themes/rose-pine-moon.json'
import rosePine from 'shiki/themes/rose-pine.json'
import slackDark from 'shiki/themes/slack-dark.json'
import slackOchin from 'shiki/themes/slack-ochin.json'
import solarizedDark from 'shiki/themes/solarized-dark.json'
import solarizedLight from 'shiki/themes/solarized-light.json'
import vitesseDark from 'shiki/themes/vitesse-dark.json'
import vitesseLight from 'shiki/themes/vitesse-light.json'

export default {
  nord: nord,
  'dark-plus': darkPlus,
  'dracula-soft': draculaSoft,
  dracula: dracula,
  'github-dark-dimmed': githubDarkDimmed,
  'github-dark': githubDark,
  'github-light': githubLight,
  hc_light: hc_light,
  'light-plus': lightPlus,
  'material-theme-darker': materialThemeDarker,
  'material-theme-lighter': materialThemeLighter,
  'material-theme-ocean': materialThemeOcean,
  'material-theme-palenight': materialThemePalenight,
  'material-theme': materialTheme,
  'min-dark': minDark,
  'min-light': minLight,
  monokai: monokai,
  'one-dark-pro': oneDarkPro,
  poimandres: poimandres,
  'rose-pine-dawn': rosePineDawn,
  'rose-pine-moon': rosePineMoon,
  'rose-pine': rosePine,
  'slack-dark': slackDark,
  'slack-ochin': slackOchin,
  'solarized-dark': solarizedDark,
  'solarized-light': solarizedLight,
  'vitesse-dark': vitesseDark,
  'vitesse-light': vitesseLight,
}
