interface auth2 {
  signIn: Promise
};

interface Window { 
    auth2: auth2;
}
