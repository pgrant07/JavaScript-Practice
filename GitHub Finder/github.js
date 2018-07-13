class GitHub {
  constructor(){
    this.client_id='43568953a25461f0fe8c';
    this.client_secret='4bb4e2a39347ba29ae93e19676a853ea682a2bc9';
    this.repos_count=5;
    this.repos_sort='create: asc';
  }

  async getUser(user){
    const profileResponse=await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse=await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile=await profileResponse.json();

    const repos=await repoResponse.json();
    return {
      profile,
      repos
    }
  };
}
