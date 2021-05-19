import yu from "./ProfileInfo.module.css";


let imgSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Silvretta_Panorama_wiki_mg-k.jpg/1050px-Silvretta_Panorama_wiki_mg-k.jpg"
const ProfileInfos = () => {
    return <div>
            <img className={yu.imgBorder} src={imgSrc}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur delectus quo reprehenderit
            tenetur. Autem consectetur explicabo, harum laboriosam minima nostrum quaerat reprehenderit saepe
            voluptatem. Ad excepturi hic magni minima.</p>
        </div>


};
export default ProfileInfos;
