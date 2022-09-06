# How to use hashlips

1. 이미지 설정하기

   `layers` 디렉토리에 합쳐질 이미지를 폴더로 나누어서 넣는다.

   각 폴더별로 이름 뒤에 `#(확률)` 을 기입해 주면 확률을 설정할 수 있다.

   ![img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/28931a83-6e57-4b8a-b49e-d8877e333f07/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220906T140230Z&X-Amz-Expires=86400&X-Amz-Signature=fbe19eace36e606d3ada8c20bde8e121b4c9a3fe93de0a42e5e714ffa359664c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

   이 상태에서 `npm run build`를 실행하면 `build` 디렉토리 안에 이미지와 메타데이터 json 파일이 생성된다.

2. IPFS에 업로드하기

   IPFS 로컬에 이미지를 업로드한다.

   ![img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1c54b5c5-1ce7-4f54-b0ef-4d9ebf774ab0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220906T140253Z&X-Amz-Expires=86400&X-Amz-Signature=5e277c470126a418b74442dad2cecb099c54816a4819d76d8280bd4cb4ebfcf7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

   Import 버튼을 통해 만들어진 `build/images` 폴더를 업로드한다.

   ![img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c64d9ee5-6588-4349-ba94-f424ede2b319/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220906T140305Z&X-Amz-Expires=86400&X-Amz-Signature=12d549726a15f9f3395f26ed6c5c86fbc5b045bd6e94e1e45ca8fe664e25cb4e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

   업로드한 폴더의 CID를 복사한다.

3. IPFS와 만들어진 이미지 연결하기

   다시 hashlips로 돌아가서,

   `src/config.js` 의 General metadata for Ethereum 설정을 변경한다.

   ![img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4c9f119d-25f5-4a78-8611-dd417093fbb7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220906T140431Z&X-Amz-Expires=86400&X-Amz-Signature=960df3921b1fb0e5813a978760146296ba83c2276d0e43be8a7260e704d779c3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

   10번째 줄 `baseUri` 의 `ipfs://` 뒤에 2번 단계에서 복사한 CID를 붙여넣는다.

   이외의 다른 값도 설정하면 만들어진 json의 metadata값을 변경할 수 있다.

   변경한 상태에서 `npm run update_info` 를 실행하면 `build/json` 파일 안의 metadata가 변경된 것을 확인할 수 있다.

4. 확인하기

   `build/json` 안에 들어있는 파일 중 하나의 `"image"` 값을 주소창에 넣으면 업로드된 이미지를 확인할 수 있다.