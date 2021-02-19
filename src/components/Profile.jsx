import p from"./Profile.module.css";

const Profile = () => {
    return(
      <div className = {p.content}>
      <img src ="https://miro.medium.com/max/700/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" width ="100%" height ="80px"></img>
      
      <div className ={p.item} >
      ava+ description
      </div>
      <div className ={p.item} > 
      My Post
      <div>
        new post
      </div>
      <div>
        <div>
          post1
        </div>
        <div>
          post2
        </div>
      </div>
      </div>
      </div>
    )
}
export default Profile;
