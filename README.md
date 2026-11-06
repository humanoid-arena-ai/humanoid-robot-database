# Humanoid Robot Database

**Specs, prices and availability of every humanoid robot, with a source for each value.**

[![License: CC BY 4.0](https://img.shields.io/badge/license-CC%20BY%204.0-lightgrey.svg)](LICENSE) ![Robots](https://img.shields.io/badge/robots-68-blue) ![Companies](https://img.shields.io/badge/companies-45-blue) ![Updated](https://img.shields.io/badge/updated-2026--11--06-green)

An open dataset of 68 humanoid robots from 45 companies (Tesla Optimus, Figure, Unitree, 1X NEO, Boston Dynamics Atlas, Agility Digit, UBTECH Walker, AgiBot and more): height, weight, payload, battery runtime, degrees of freedom, speed, price, status, deployments and the public evidence behind each claim.
It powers [Humanoid Arena](https://humanoidarena.ai), where the same data is browsable, comparable and ranked.

Every number links back to a source. If something is wrong, outdated or missing, open a pull request or an issue: corrections are reviewed and appear on the site after merge.

## Browse the data

- [All humanoid robots](https://humanoidarena.ai/robots) and [humanoid robot companies](https://humanoidarena.ai/companies)
- [Humanoid robot prices](https://humanoidarena.ai/humanoid-robot-price) and [humanoid robots for sale](https://humanoidarena.ai/best/humanoid-robots-for-sale)
- [Compare humanoid robots side by side](https://humanoidarena.ai/compare) and the [size comparison](https://humanoidarena.ai/humanoid-robot-size-comparison)
- [Humanoid robot ranking](https://humanoidarena.ai/arena/leaderboard), rated with a [published methodology](https://humanoidarena.ai/methodology)
- Lists: [best](https://humanoidarena.ai/best/best-humanoid-robots), [cheapest](https://humanoidarena.ai/best/cheapest-humanoid-robots), [for home](https://humanoidarena.ai/best/humanoid-robots-for-home), [industrial](https://humanoidarena.ai/best/industrial-humanoid-robots), [for research](https://humanoidarena.ai/best/humanoid-robots-for-research), [Chinese](https://humanoidarena.ai/best/chinese-humanoid-robots), [American](https://humanoidarena.ai/best/american-humanoid-robots)
- [Humanoid robot news](https://humanoidarena.ai/news), every claim linked to its source

## Quick start

```python
import pandas as pd
robots = pd.read_csv("https://raw.githubusercontent.com/humanoid-arena-ai/humanoid-robot-database/main/data/robots.csv")
print(robots.sort_values("price").head())
```

```bash
curl -s https://raw.githubusercontent.com/humanoid-arena-ai/humanoid-robot-database/main/data/robots.json | jq '.[] | select(.status=="purchasable") | .name'
```

## Humanoid robot leaderboard

Top 10 of the [Humanoid Arena leaderboard](https://humanoidarena.ai/arena/leaderboard). Full table with confidence intervals and evidence grades: [`leaderboard/ratings.csv`](leaderboard/ratings.csv); head-to-head results: [`leaderboard/pairwise.csv`](leaderboard/pairwise.csv). How robots are rated: [methodology](https://humanoidarena.ai/methodology).

| # | Robot | Company | Rating | Evidence |
|---|---|---|---|---|
| 1 | [Figure 03](https://humanoidarena.ai/robots/figure-03) | Figure AI | 1366 ±16 | B- |
| 2 | [Figure 02](https://humanoidarena.ai/robots/figure-02) | Figure AI | 1364 ±22 | A- |
| 3 | [AgiBot G2](https://humanoidarena.ai/robots/agibot-g2) | AgiBot | 1348 ±17 | B- |
| 4 | [HMND 01](https://humanoidarena.ai/robots/humanoid-hmnd-01) | Humanoid | 1299 ±19 | B- |
| 5 | [Galbot G1](https://humanoidarena.ai/robots/galbot-g1) | Galbot | 1285 ±13 | B- |
| 6 | [Unitree G1](https://humanoidarena.ai/robots/unitree-g1) | Unitree Robotics | 1268 ±27 | B+ |
| 7 | [1X NEO](https://humanoidarena.ai/robots/1x-neo) | 1X Technologies | 1243 ±20 | C |
| 8 | [Boston Dynamics Electric Atlas](https://humanoidarena.ai/robots/boston-dynamics-atlas-electric) | Boston Dynamics | 1220 ±19 | B- |
| 9 | [Leju Kuavo](https://humanoidarena.ai/robots/leju-kuavo) | Leju Robotics | 1204 ±36 | B+ |
| 10 | [Spirit AI Moz1](https://humanoidarena.ai/robots/spirit-ai-moz1) | Spirit AI | 1204 ±19 | B- |

## Humanoid robot prices

Public USD prices, cheapest first. Price type in brackets when it is not a list price.

| Robot | Company | Price | Status |
|---|---|---|---|
| [Unitree R1](https://humanoidarena.ai/robots/unitree-r1) | Unitree Robotics | $4,900 | purchasable |
| [Unitree G1](https://humanoidarena.ai/robots/unitree-g1) | Unitree Robotics | $13,500 | purchasable |
| [1X NEO](https://humanoidarena.ai/robots/1x-neo) | 1X Technologies | $20,000 (preorder) | purchasable |
| [MenteeBot V3](https://humanoidarena.ai/robots/menteebot-v3) | Mentee Robotics | $20,000 (reported) | pilot |
| [Tesla Optimus Gen 2 / v2.5](https://humanoidarena.ai/robots/tesla-optimus-gen-2-v2-5) | Tesla | $20,000 (target) | prototype |
| [DOBOT ATOM](https://humanoidarena.ai/robots/dobot-atom) | DOBOT | $27,500 (reported) | commercial |
| [Unitree H2](https://humanoidarena.ai/robots/unitree-h2) | Unitree Robotics | $29,900 | purchasable |
| [AgiBot A2](https://humanoidarena.ai/robots/agibot-a2) | AgiBot | $44,560 | commercial |
| [Apptronik Apollo](https://humanoidarena.ai/robots/apptronik-apollo) | Apptronik | $50,000 (target) | pilot |
| [UBTECH Walker S2](https://humanoidarena.ai/robots/ubtech-walker-s2) | UBTECH Robotics | $246,600 | commercial |

## All robots

| Robot | Company | Country | Status | Height | Weight | Payload | Runtime | Price | Data |
|---|---|---|---|---|---|---|---|---|---|
| [1X EVE](https://humanoidarena.ai/robots/1x-eve) | 1X Technologies | Norway / United States | commercial | 188 cm | 87.1 kg | 15 kg | 6 h | – | [json](evidence/robots/1x-eve.json) |
| [1X NEO](https://humanoidarena.ai/robots/1x-neo) | 1X Technologies | Norway / United States | purchasable | 167.6 cm | 29.9 kg | 18 kg | 4 h | $20,000 (preorder) | [json](evidence/robots/1x-neo.json) |
| [AgiBot A2](https://humanoidarena.ai/robots/agibot-a2) | AgiBot | China | commercial | 169 cm | 69 kg | – | 2 h | $44,560 | [json](evidence/robots/agibot-a2.json) |
| [AgiBot G2](https://humanoidarena.ai/robots/agibot-g2) | AgiBot | China | commercial | – | – | – | – | – | [json](evidence/robots/agibot-g2.json) |
| [AgiBot X2](https://humanoidarena.ai/robots/agibot-x2) | AgiBot | China | purchasable | 131 cm | 35 kg | 3 kg | 2 h | – | [json](evidence/robots/agibot-x2.json) |
| [Expedition A3](https://humanoidarena.ai/robots/agibot-expedition-a3) | AgiBot | China | commercial | 173 cm | 55 kg | – | 10 h | – | [json](robots/agibot-expedition-a3.json) |
| [G2 Max](https://humanoidarena.ai/robots/agibot-g2-max) | AgiBot | China | pilot | – | – | 40 kg | – | – | [json](robots/agibot-g2-max.json) |
| [Digit](https://humanoidarena.ai/robots/agility-digit) | Agility Robotics | United States | commercial | 175 cm | 65 kg | 15.9 kg | 4 h | – | [json](evidence/robots/agility-digit.json) |
| [NAO](https://humanoidarena.ai/robots/aldebaran-nao) | Aldebaran | France | purchasable | 58 cm | 5.5 kg | – | 1 h | – | [json](evidence/robots/aldebaran-nao.json) |
| [Pepper](https://humanoidarena.ai/robots/aldebaran-pepper) | Aldebaran | France | purchasable | 120 cm | 28 kg | – | 12 h | – | [json](evidence/robots/aldebaran-pepper.json) |
| [Apptronik Apollo](https://humanoidarena.ai/robots/apptronik-apollo) | Apptronik | United States | pilot | 172.8 cm | 72.6 kg | 24.9 kg | 4 h | $50,000 (target) | [json](evidence/robots/apptronik-apollo.json) |
| [Astribot S1](https://humanoidarena.ai/robots/astribot-s1) | Astribot (Stardust Intelligence) | China | commercial | 170 cm | 80 kg | 5 kg | 4 h | – | [json](evidence/robots/astribot-s1.json) |
| [Tiangong](https://humanoidarena.ai/robots/tiangong) | Beijing Humanoid Robot Innovation Center (X-Humanoid) | China | superseded | 163 cm | 43 kg | – | – | – | [json](evidence/robots/tiangong.json) |
| [Tiangong Ultra](https://humanoidarena.ai/robots/tiangong-ultra) | Beijing Humanoid Robot Innovation Center (X-Humanoid) | China | prototype | 180 cm | 55 kg | – | – | – | [json](evidence/robots/tiangong-ultra.json) |
| [Booster K1](https://humanoidarena.ai/robots/booster-k1) | Booster Robotics | China | purchasable | 95 cm | 19.5 kg | – | 1.2 h | – | [json](evidence/robots/booster-k1.json) |
| [Booster T1](https://humanoidarena.ai/robots/booster-t1) | Booster Robotics | China | superseded | 118 cm | 30 kg | 0.5 kg | 2 h | – | [json](evidence/robots/booster-t1.json) |
| [Booster T2](https://humanoidarena.ai/robots/booster-t2) | Booster Robotics | China | purchasable | 140 cm | 42 kg | 10 kg | 2 h | – | [json](evidence/robots/booster-t2.json) |
| [Boston Dynamics Electric Atlas](https://humanoidarena.ai/robots/boston-dynamics-atlas-electric) | Boston Dynamics | United States | pilot | 190 cm | 90 kg | 50 kg | 4 h | – | [json](evidence/robots/boston-dynamics-atlas-electric.json) |
| [Clone Alpha](https://humanoidarena.ai/robots/clone-alpha) | Clone Robotics | Poland / United States | prototype | – | – | – | 1.5 h | – | [json](evidence/robots/clone-alpha.json) |
| [Dexmate Vega](https://humanoidarena.ai/robots/dexmate-vega) | Dexmate | United States | purchasable | 220 cm | 135 kg | 5 kg | 20 h | – | [json](evidence/robots/dexmate-vega.json) |
| [DOBOT ATOM](https://humanoidarena.ai/robots/dobot-atom) | DOBOT | China | commercial | 165 cm | 62 kg | 3.5 kg | 2 h | $27,500 (reported) | [json](evidence/robots/dobot-atom.json) |
| [EngineAI PM01](https://humanoidarena.ai/robots/engineai-pm01) | EngineAI | China | purchasable | 138 cm | 40 kg | – | 2 h | – | [json](evidence/robots/engineai-pm01.json) |
| [EngineAI SE01](https://humanoidarena.ai/robots/engineai-se01) | EngineAI | China | prototype | 170 cm | 55 kg | – | 2 h | – | [json](evidence/robots/engineai-se01.json) |
| [EngineAI T800](https://humanoidarena.ai/robots/engineai-t800) | EngineAI | China | purchasable | 173 cm | 75 kg | 5 kg | 4 h | – | [json](evidence/robots/engineai-t800.json) |
| [Ameca](https://humanoidarena.ai/robots/engineered-arts-ameca) | Engineered Arts | United Kingdom | commercial | 187 cm | 62 kg | 2 kg | 4 h | – | [json](evidence/robots/engineered-arts-ameca.json) |
| [Figure 01](https://humanoidarena.ai/robots/figure-01) | Figure AI | United States | superseded | 167.6 cm | 60 kg | 20 kg | 5 h | – | [json](evidence/robots/figure-01.json) |
| [Figure 02](https://humanoidarena.ai/robots/figure-02) | Figure AI | United States | superseded | 170 cm | 70 kg | 20 kg | 5 h | – | [json](evidence/robots/figure-02.json) |
| [Figure 03](https://humanoidarena.ai/robots/figure-03) | Figure AI | United States | pilot | 173 cm | 61 kg | 20 kg | 5 h | – | [json](evidence/robots/figure-03.json) |
| [Foundation Phantom MK-1](https://humanoidarena.ai/robots/foundation-phantom-mk1) | Foundation Future Industries | United States | pilot | 175 cm | 80 kg | 20 kg | 4 h | – | [json](evidence/robots/foundation-phantom-mk1.json) |
| [Fourier GR-2](https://humanoidarena.ai/robots/fourier-gr-2) | Fourier | China | purchasable | 175 cm | 63 kg | 3 kg | 2 h | – | [json](evidence/robots/fourier-gr-2.json) |
| [Fourier GR-3](https://humanoidarena.ai/robots/fourier-gr-3) | Fourier | China | pilot | 165 cm | 71 kg | 3 kg | 3 h | – | [json](evidence/robots/fourier-gr-3.json) |
| [Galbot G1](https://humanoidarena.ai/robots/galbot-g1) | Galbot | China | commercial | 173 cm | 92.5 kg | 10 kg | 8 h | – | [json](evidence/robots/galbot-g1.json) |
| [Sophia](https://humanoidarena.ai/robots/hanson-sophia) | Hanson Robotics | Hong Kong | commercial | 167 cm | 20 kg | 0.6 kg | – | – | [json](evidence/robots/hanson-sophia.json) |
| [Honda ASIMO](https://humanoidarena.ai/robots/honda-asimo) | Honda | Japan | superseded | 130 cm | 54 kg | 1 kg | 1 h | – | [json](evidence/robots/honda-asimo.json) |
| [HMND 01](https://humanoidarena.ai/robots/humanoid-hmnd-01) | Humanoid | United Kingdom | pilot | 220 cm | 300 kg | 15 kg | 4 h | – | [json](evidence/robots/humanoid-hmnd-01.json) |
| [ergoCub](https://humanoidarena.ai/robots/iit-ergocub) | Italian Institute of Technology (IIT) | Italy | prototype | 150 cm | 55.7 kg | 10 kg | – | – | [json](evidence/robots/iit-ergocub.json) |
| [K-Scale K-Bot](https://humanoidarena.ai/robots/k-scale-k-bot) | K-Scale Labs | United States | superseded | 140 cm | 34 kg | 10 kg | 4 h | – | [json](evidence/robots/k-scale-k-bot.json) |
| [Kawasaki Kaleido 9](https://humanoidarena.ai/robots/kawasaki-kaleido-9) | Kawasaki Heavy Industries | Japan | prototype | 190 cm | 99 kg | 30 kg | 3 h | – | [json](evidence/robots/kawasaki-kaleido-9.json) |
| [Kepler K2 Bumblebee](https://humanoidarena.ai/robots/kepler-k2) | Kepler Robotics | China | purchasable | 175 cm | 75 kg | 30 kg | 8 h | – | [json](evidence/robots/kepler-k2.json) |
| [Kinisi KR1](https://humanoidarena.ai/robots/kinisi-kr1) | Kinisi Robotics | United Kingdom | prototype | 162 cm | 100 kg | 10 kg | 8 h | – | [json](evidence/robots/kinisi-kr1.json) |
| [Leju Kuavo](https://humanoidarena.ai/robots/leju-kuavo) | Leju Robotics | China | commercial | 140 cm | 45 kg | 5 kg | 2 h | – | [json](evidence/robots/leju-kuavo.json) |
| [LimX Oli](https://humanoidarena.ai/robots/limx-oli) | LimX Dynamics | China | purchasable | 165 cm | 55 kg | 3 kg | 1.5 h | – | [json](evidence/robots/limx-oli.json) |
| [MagicLab MagicBot Gen1](https://humanoidarena.ai/robots/magiclab-magicbot-gen1) | MagicLab | China | pilot | 174 cm | 70 kg | 15 kg | 3 h | – | [json](evidence/robots/magiclab-magicbot-gen1.json) |
| [MenteeBot V3](https://humanoidarena.ai/robots/menteebot-v3) | Mentee Robotics | Israel | pilot | 175 cm | 70 kg | 25 kg | 4 h | $20,000 (reported) | [json](evidence/robots/menteebot-v3.json) |
| [NEURA 4NE1](https://humanoidarena.ai/robots/neura-4ne1) | NEURA Robotics | Germany | purchasable | 180 cm | 80 kg | 20 kg | 6 h | – | [json](evidence/robots/neura-4ne1.json) |
| [Noetix Bumi](https://humanoidarena.ai/robots/noetix-bumi) | Noetix Robotics | China | purchasable | 94 cm | 12 kg | – | 1 h | – | [json](evidence/robots/noetix-bumi.json) |
| [Noetix N2](https://humanoidarena.ai/robots/noetix-n2) | Noetix Robotics | China | purchasable | 118 cm | 30 kg | 5 kg | – | – | [json](evidence/robots/noetix-n2.json) |
| [PAL Robotics TALOS](https://humanoidarena.ai/robots/pal-talos) | PAL Robotics | Spain | commercial | 175 cm | 95 kg | 6 kg | 1.5 h | – | [json](evidence/robots/pal-talos.json) |
| [Persona AI Humanoid](https://humanoidarena.ai/robots/persona-ai-humanoid) | Persona AI | United States | prototype | – | – | – | – | – | [json](evidence/robots/persona-ai-humanoid.json) |
| [Reachy 2](https://humanoidarena.ai/robots/pollen-reachy-2) | Pollen Robotics | France | purchasable | 166 cm | 50 kg | 3 kg | – | – | [json](evidence/robots/pollen-reachy-2.json) |
| [Reachy Mini](https://humanoidarena.ai/robots/hugging-face-reachy-mini) | Pollen Robotics | France | purchasable | 28 cm | 1.5 kg | – | – | – | [json](evidence/robots/hugging-face-reachy-mini.json) |
| [PUDU D9](https://humanoidarena.ai/robots/pudu-d9) | PUDU Robotics | China | pilot | 170 cm | 65 kg | 20 kg | – | – | [json](evidence/robots/pudu-d9.json) |
| [Rainbow Robotics RB-Y1](https://humanoidarena.ai/robots/rainbow-rb-y1) | Rainbow Robotics | South Korea | purchasable | 140 cm | 131 kg | 3 kg | – | – | [json](evidence/robots/rainbow-rb-y1.json) |
| [RobotEra L7](https://humanoidarena.ai/robots/robotera-l7) | RobotEra | China | prototype | 171 cm | 65 kg | 20 kg | – | – | [json](evidence/robots/robotera-l7.json) |
| [RobotEra STAR1](https://humanoidarena.ai/robots/robotera-star1) | RobotEra | China | superseded | 171 cm | 65 kg | 160 kg | 0.6 h | – | [json](evidence/robots/robotera-star1.json) |
| [Sanctuary Phoenix](https://humanoidarena.ai/robots/sanctuary-phoenix) | Sanctuary AI | Canada | pilot | 170.1 cm | 70.3 kg | 24.9 kg | – | – | [json](evidence/robots/sanctuary-phoenix.json) |
| [Spirit AI Moz1](https://humanoidarena.ai/robots/spirit-ai-moz1) | Spirit AI | China | pilot | 160 cm | 70 kg | 26 kg | 3 h | – | [json](evidence/robots/spirit-ai-moz1.json) |
| [Tesla Optimus Gen 1](https://humanoidarena.ai/robots/tesla-optimus-gen-1) | Tesla | United States | prototype | – | 73 kg | – | – | – | [json](evidence/robots/tesla-optimus-gen-1.json) |
| [Tesla Optimus Gen 2 / v2.5](https://humanoidarena.ai/robots/tesla-optimus-gen-2-v2-5) | Tesla | United States | prototype | 173 cm | 57 kg | 20 kg | – | $20,000 (target) | [json](evidence/robots/tesla-optimus-gen-2-v2-5.json) |
| [UBTECH Walker S1](https://humanoidarena.ai/robots/ubtech-walker-s1) | UBTECH Robotics | China | superseded | 172 cm | 76 kg | 3 kg | 2 h | – | [json](evidence/robots/ubtech-walker-s1.json) |
| [UBTECH Walker S2](https://humanoidarena.ai/robots/ubtech-walker-s2) | UBTECH Robotics | China | commercial | 176 cm | 70 kg | 15 kg | 2.5 h | $246,600 | [json](evidence/robots/ubtech-walker-s2.json) |
| [Unitree G1](https://humanoidarena.ai/robots/unitree-g1) | Unitree Robotics | China | purchasable | 132 cm | 35 kg | 2 kg | 2 h | $13,500 | [json](evidence/robots/unitree-g1.json) |
| [Unitree H1](https://humanoidarena.ai/robots/unitree-h1) | Unitree Robotics | China | purchasable | 180 cm | 47 kg | 30 kg | 1 h | – | [json](evidence/robots/unitree-h1.json) |
| [Unitree H2](https://humanoidarena.ai/robots/unitree-h2) | Unitree Robotics | China | purchasable | 182 cm | 70 kg | 7 kg | 3 h | $29,900 | [json](evidence/robots/unitree-h2.json) |
| [Unitree R1](https://humanoidarena.ai/robots/unitree-r1) | Unitree Robotics | China | purchasable | 123 cm | 29 kg | 2 kg | 1 h | $4,900 | [json](evidence/robots/unitree-r1.json) |
| [Xiaomi CyberOne](https://humanoidarena.ai/robots/xiaomi-cyberone) | Xiaomi | China | superseded | 177 cm | 52 kg | 2.7 kg | – | – | [json](evidence/robots/xiaomi-cyberone.json) |
| [Xiaomi CyberOne V2](https://humanoidarena.ai/robots/xiaomi-cyberone-v2) | Xiaomi | China | pilot | 170 cm | – | – | – | – | [json](evidence/robots/xiaomi-cyberone-v2.json) |
| [XPeng IRON](https://humanoidarena.ai/robots/xpeng-iron) | XPeng | China | prototype | 178 cm | 70 kg | – | – | – | [json](evidence/robots/xpeng-iron.json) |

Machine-readable: [`data/robots.csv`](data/robots.csv), [`data/robots.json`](data/robots.json).

## Layout

| Folder | What it holds |
|---|---|
| `robots/` | One file per tracked robot: specs with the source of each value, status, price, highlights, caveats |
| `evidence/robots/` | Full evidence packs for robots rated in the arena: specs, demos, deployments, teleoperation notes, limitations |
| `companies/`, `evidence/companies/` | Company profiles and evidence |
| `prices/` | Configurations, list prices, sellers, rental options and price history |
| `schemas/` | JSON schemas the files follow |
| `data/` | Generated summary tables (do not edit, rebuilt on every sync) |
| `leaderboard/` | Published Humanoid Arena ratings and pairwise results (generated, do not edit) |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). The short version: edit the JSON file, add a source URL for every value you change, open a pull request. You can also [report a correction](../../issues/new?template=data-correction.yml) without touching JSON.

## Cite

Use GitHub's "Cite this repository" button, or:

```bibtex
@misc{humanoid_robot_database,
  title  = {Humanoid Robot Database},
  author = {{Humanoid Arena}},
  year   = {2026},
  url    = {https://github.com/humanoid-arena-ai/humanoid-robot-database},
  note   = {Open dataset of humanoid robot specifications and prices, CC BY 4.0}
}
```

## License

Data: [CC BY 4.0](LICENSE). Free to use, including commercially. Attribution: "Humanoid Robot Database, Humanoid Arena (https://humanoidarena.ai)" with a link.
