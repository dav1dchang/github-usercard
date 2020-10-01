import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/* axios.get('https://api.github.com/users/dav1dchang')
.then(res=> {
  console.log(res)
  console.log(res.data)
})
.catch(drama=>{
  console.log(drama)
  debugger
})*/

/*conflicting with step 4 so i commented out step 1 axios.get*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

axios.get('https://api.github.com/users/dav1dchang')
.then(res=> {
  console.log(res)
  return gitHubCardMaker(res.data)
})
.catch(drama=>{
  console.log(drama)
})

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const entryPoint = document.querySelector('.container')

function gitHubCardMaker(object) {
  //declaring vars
  const gitCard = document.createElement('div')
  const gitImage = document.createElement('img')
  const cardInfo = document.createElement('div')
  const gitName = document.createElement('h3')
  const gitUserName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const profileA = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  //attaching classes
  gitCard.classList.add('card')
  cardInfo.classList.add('card-info')
  gitName.classList.add('name')
  gitUserName.classList.add('username')

  //sourcing
  gitImage.src = object.avatar_url
  gitName.textContent = object.name
  gitUserName.textContent = object.login
  location.textContent = `Location: ${object.location}`
  profileA.href = object.html_url
  profileA.textContent = `${profileA}`
  profile.textContent = `Profile: `
  followers.textContent = `Followers: ${object.followers}`
  following.textContent = `Following: ${object.following}`
  bio.textContent = `Bio: ${object.bio}`

  //appending children to parent
  entryPoint.append(gitCard)
  gitCard.appendChild(gitImage)
  gitCard.appendChild(cardInfo)
  cardInfo.appendChild(gitName)
  cardInfo.appendChild(gitUserName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(profileA)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  console.log(profileA)

  return gitCard
}//gitHubCardMaker
  
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
