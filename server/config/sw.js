/*
*
*  Push Notifications codelab
*  Copyright 2015 Google Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      https://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License
*
*/

/* eslint-env browser, serviceworker, es6 */
//코드를 추가해서 서비스워커에 이벤트 리스너를 등록한다 그래서 푸시이벤트를 수신하도록한다.
//self로 서비스 워커 자체를 참조하도록 한다.

self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
  
    const title = 'Push Codelab';
    const options = {
      body: '와 푸시메시지 개어려워.',
      icon: 'images/icon.png',
      badge: 'images/badge.png'
    };
                    //푸시메시지가 수신되면. -> 서비스워커가 등록되면.showNotification() 타이틀과 옵션으로 노티를 뿌려줍니다.
    event.waitUntil(self.registration.showNotification(title, options));            
          //인자로 넘어오는 이벤트를 받아.waitUntil() 기다립니다 -> promise를 취하며, 브라우저는 전달된 promise가 확인될 때까지 서비스워커를 활성화하여 유지합니다.
  });
  
  'use strict';
  
  