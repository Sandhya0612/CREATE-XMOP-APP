import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'ap-southeast-2',  
    userPoolId: 'ap-southeast-2_0sf5dJKMV',
    userPoolWebClientId: '28lv049ut8ro3bs4iv0hienmci',
    authenticationFlowType: 'USER_SRP_AUTH', 
  },
});

