### 각 프레임별 버전
* node : 8.9.3   
* MongoDB : 3.6.1    
* WebView : HTML/EJS
* npm : 5.5.1
* express : 4.15.5

### App File Tree 구조
Root    
* public    
  * StyleSheets   
  * JavaScript    
  * img   
* server    
  * helper    
    * helper : 각 거래소별 Api의 raw데이터    
  * config    
    * passport : passport를 이용한 사용자 인증    
    * mongo : DB에 관한 정보    
  * controller    
    * home(index) : before_action으로 로그인 세션 여부 체크    
    * user(Login, SignUp) : 인증 및 회원가입 절차    
    * UserCoin(main) : user가 등록한 코인의 수익률    
    * MyPage : html5 기반의 웹브라우저 알람    
    * render : partial_render로 원하는 정보만 팝업    
  * Model   
    * user : 가입한 유저 정보    
    * coin : 코인 종류    
  * View    
    * index   
    * login   
    * SignUp    
    * error   
    * header    
    * profile   
* router.js   
* app.js    
* Package.json    

## **변경사항 생기면 그때 그때 push 및 commit!!**
