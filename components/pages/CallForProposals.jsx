import React from "react";
import Header from "../Header";
import PageTitleWrap from "../PageTitleWrap";

import Parser from 'html-react-parser';
import Button from "../Button";
import {Link} from "react-router-dom";


const content = '<div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1439"><h3 style="box-sizing: border-box; margin: 0px; font-weight: 700; line-height: 1.42857; font-size: 1.75rem; font-family: Ubuntu, Arial, sans-serif; font-style: normal;">CALL FOR PAPERS</h3></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1421"><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px; color: rgb(104, 104, 104); font-family: Roboto, Arial, sans-serif; font-weight: normal; font-size: 15px; line-height: 26px; letter-spacing: 0.3px; font-style: normal;"><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1437"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1438">The</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1435"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1436">&nbsp;2021 International Conference on Advancements in Computing (ICAC 2021) will be held in Sri Lanka from 9th to 11th December 2021. The ICAC 2021 is t</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1433"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1434">hemed &ldquo;Empowering the society through innovation and invention</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1431"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1432">.</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1429"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1430">&rdquo;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1427"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1428">&nbsp;The conference organizers invite contributions from diverse&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1425"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1426">computing areas including Computer Engineering, Computer Science, Information Systems, Information Technology and Software Engineering, but not limited to. ICAC 2021 will include attractive workshops and industry programs aimed at&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1423"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1424">practitioners, with keynotes and panels from both local and international researchers.</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1422">&nbsp;</span></p></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1419"><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px; color: rgb(104, 104, 104); font-family: Roboto, Arial, sans-serif; font-weight: normal; font-size: 15px; line-height: 26px; letter-spacing: 0.3px; font-style: normal;"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1420">&nbsp;</span></p></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1415"><h4 style="box-sizing: border-box; margin: 0px; font-weight: 700; line-height: 1.42857; font-size: 1.5rem; font-family: Ubuntu, Arial, sans-serif; font-style: normal;"><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1417"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1418">Conference topics:</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1416">&nbsp;</span></h4></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1407"><ul style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px;" wfd-id="1408"><li style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1409"><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1413"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1414"><strong style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Data science and data driven approaches:</strong>&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1411"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1412">Data Mining, Data driven approaches and technologies, Data analytics and visualizations, Data science applications, Big data, Business intelligence.</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1410">&nbsp;</span></li></ul></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1399"><ul style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px;" wfd-id="1400"><li style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1401"><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1405"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1406"><strong style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Artificial Intelligence and Machine Learning:</strong>&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1403"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1404">General ML, Deep learning, Natural Language Processing, Audio and speech processing, Optimization, Mathematical / statistical model development.</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1402">&nbsp;</span></li></ul></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1391"><ul style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px;" wfd-id="1392"><li style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1393"><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1397"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1398"><strong style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Computer Vision:</strong>&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1395"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1396">Biometrics, face, gesture, body pose, Neural generative models, auto encoders, GANs, Recognition (object detection, categorization), Video analysis and understanding, Scene analysis and understanding, AR / VR, 3D computer vision.</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1394">&nbsp;</span></li></ul></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1383"><ul style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px;" wfd-id="1384"><li style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1385"><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1389"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1390"><strong style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Communication:</strong>&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1387"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1388">Cellular networks including 4G, 5G, Wireless and mobile networks, Network simulations and modelling, Routing, switching and protocols, Cooperative communications and networking</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1386">&nbsp;</span></li></ul></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1375"><ul style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px;" wfd-id="1376"><li style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1377"><strong style="box-sizing: border-box; font-weight: bolder;"><span lang="EN-US" style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1381"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1382">Network services and management:&nbsp;</span></span></strong><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1379"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1380">Cloud computing, Virtualization, SDN (Software Defined Networking), CDN (Content Delivery Networking), QOS and Resource management</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1378">&nbsp;</span></li></ul></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1363"><ul style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px;" wfd-id="1364"><li style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1365"><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1373"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1374"><strong style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Security and technologies:</strong>&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1371"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1372">Information security</span></span><span lang="EN-GB" style="box-sizing: border-box;" wfd-id="1369"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1370">, Cryptography,&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1367"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1368">Application security, Digital forensics, Cryptocurrencies, Blockchain</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1366">&nbsp;</span></li></ul></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1355"><ul style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px;" wfd-id="1356"><li style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1357"><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1361"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1362"><strong style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Human Computer Interaction:</strong>&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1359"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1360">Haptics and multisensory applications, Computer graphics and Image processing, User interface engineering.</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1358">&nbsp;</span></li></ul></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1347"><ul style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px;" wfd-id="1348"><li style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1349"><strong style="box-sizing: border-box; font-weight: bolder;"><span lang="EN-US" style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1353"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1354">Technology enhanced learning:&nbsp;</span></span></strong><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1351"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1352">E-learning approaches and applications, Adaptive learning, Learning analytics and dashboards, MOOCs and other online education approaches.</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1350">&nbsp;</span></li></ul></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1340"><ul style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px;" wfd-id="1341"><li style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1342"><strong style="box-sizing: border-box; font-weight: bolder;"><span lang="EN-US" style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1345"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1346">Distributed computing:&nbsp;</span></span></strong><span lang="EN-US" style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1343"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1344">Algorithms and applications, High performance computing</span></span></li></ul></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1332"><ul style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px;" wfd-id="1333"><li style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1334"><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1338"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1339"><strong style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Autonomous intelligent machines and systems:</strong>&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1336"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1337">Robotics, Cyber physical systems, Embedded systems, IoT applications</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1335">&nbsp;</span></li></ul></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1324"><ul style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px;" wfd-id="1325"><li style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1326"><strong style="box-sizing: border-box; font-weight: bolder;"><span lang="EN-US" style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1330"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1331">Information systems:&nbsp;</span></span></strong><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1328"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1329">IS in Practice, Technology Infrastructures and Organizational Processes, Design and Development Methodologies and Frameworks, Risk Management, Innovation and Knowledge Management</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1327">&nbsp;</span></li></ul></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1316"><ul style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px;" wfd-id="1317"><li style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1318"><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1322"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1323"><strong style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">General track:</strong>&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1320"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1321">any contribution that might not directly relate to above topics yet could be of interest in computing field.</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1319">&nbsp;</span></li></ul></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1314"><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px; color: rgb(104, 104, 104); font-family: Roboto, Arial, sans-serif; font-weight: normal; font-size: 15px; line-height: 26px; letter-spacing: 0.3px; font-style: normal;"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1315">&nbsp;</span></p></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1306"><h4 style="box-sizing: border-box; margin: 0px; font-weight: 700; line-height: 1.42857; font-size: 1.5rem; font-family: Ubuntu, Arial, sans-serif; font-style: normal;"><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1312"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1313">S</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1310"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1311">ubmission</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1308"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1309">s:&nbsp;</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1307">&nbsp;</span></h4></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1252"><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 15px; color: rgb(104, 104, 104); font-family: Roboto, Arial, sans-serif; font-weight: normal; font-size: 15px; line-height: 26px; letter-spacing: 0.3px; font-style: normal;"><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1304"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1305">To be published in the ICAC2021 Conference Proceedings and to be eligible for publication in IEEE Xplore&reg;, an author of an accepted paper&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1302"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1303">is required to</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1300"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1301">&nbsp;register for the conference</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1298"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1299">&nbsp;and the paper must be presented by an author of that paper at the conference</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1296"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1297">.</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1294"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1295">&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1292"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1293">During the&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1290"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1291">initial</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1288"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1289">&nbsp;paper submission process via&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1286"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1287">Microsoft</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1284"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1285">&nbsp;Conference Management tool</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1282"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1283">.</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1280"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1281">&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1278"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1279">Only PDF files will be accepted for the review process, and all submissions must be done through&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1276"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1277">Microsoft CMT</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1274"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1275">.</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1272"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1273">&nbsp;Author List and their affiliations should be removed from the&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1270"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1271">initial</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1268"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1269">&nbsp;PDF File.&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1266"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1267">Please note that&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1264"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1265">IEEE&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1262"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1263">Plagiarism</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1260"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1261">&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1258"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1259">P</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1256"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1257">olicies will be applied</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1254"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1255">&nbsp;upon the submission.&nbsp;</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1253">&nbsp;</span></p><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px; color: rgb(104, 104, 104); font-family: Roboto, Arial, sans-serif; font-weight: normal; font-size: 15px; line-height: 26px; letter-spacing: 0.3px; font-style: normal;">&nbsp;</p></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1248"><h4 style="box-sizing: border-box; margin: 0px; font-weight: 700; line-height: 1.42857; font-size: 1.5rem; font-family: Ubuntu, Arial, sans-serif; font-style: normal;"><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1250"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1251">IMPORTANT:</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1249">&nbsp;</span></h4></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1242"><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px; color: rgb(104, 104, 104); font-family: Roboto, Arial, sans-serif; font-weight: normal; font-size: 15px; line-height: 26px; letter-spacing: 0.3px; font-style: normal;"><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1246"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1247">The page length limit for all initial submissions for review is SIX (6) printed pages (10-point font) and must be written in English. Initial submissions longer than SIX (6) pages will be rejected without review.</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1244"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1245">&nbsp;</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1243">&nbsp;</span></p></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1230"><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px; color: rgb(104, 104, 104); font-family: Roboto, Arial, sans-serif; font-weight: normal; font-size: 15px; line-height: 26px; letter-spacing: 0.3px; font-style: normal;"><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1240"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1241">Paper&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1238"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1239">selection</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1236"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1237">&nbsp;is subjected to the contribution, originality, relevance, technical strength, and the overall quality. Upon&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1234"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1235">selection</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1232"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1233">&nbsp;of the paper, at least one author is expected to register for the conference before the deadline and present the paper.&nbsp;</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1231">&nbsp;</span></p></div><div style="box-sizing: border-box; color: rgb(34, 34, 34); font-family: Ubuntu, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" wfd-id="1222"><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px; color: rgb(104, 104, 104); font-family: Roboto, Arial, sans-serif; font-weight: normal; font-size: 15px; line-height: 26px; letter-spacing: 0.3px; font-style: normal;"><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1228"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1229">Only papers that have been presented by the respective authors during the conference will be published in the IEEE Proceedings which will be available in IEEE Xplore digital library,&nbsp;</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1226"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1227">provided that</span></span><span lang="EN-US" style="box-sizing: border-box;" wfd-id="1224"><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1225">&nbsp;they meet the IEEE quality review standards.</span></span><span style="box-sizing: border-box; margin-bottom: 0px;" wfd-id="1223">&nbsp;</span></p></div>';

const style={
    width:1200,
    margin:"50px auto",
    lineHeight:2
}
const btnContainer={
    paddingTop:40,
    textAlign:"center"
}

export default function CallForProposals(){
    return(
        <div>

            <PageTitleWrap title={"Call For Proposals"}/>
            <div className={"call-for-proposal-body"} style={style}>
                <div className={"call-for-proposal-content"}>
                    {Parser(content)}
                </div>
                <div style={btnContainer}>
                    <Link to = "/workshops/register"><Button name="Register Now" btnStyle={"btn-register-call"}/></Link>
                </div>
            </div>
        </div>
    )
}