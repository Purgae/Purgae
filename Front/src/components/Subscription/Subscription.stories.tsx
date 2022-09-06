import React from 'react'
import { Primary } from '../../common/Button/Buttton.stories'
import { Large } from '../../common/Input/Input.stories'

// 버튼을 커먼에 정의해둔 후 component만들때는 이렇게 사용하면 될 것 같습니다.
export default {
  title: 'Form/Subscription',
}

export const PrimarySubscription = () => (
  <>
    <Large />
    <Primary />
  </>
)