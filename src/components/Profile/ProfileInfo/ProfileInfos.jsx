import yu from "./ProfileInfo.module.css";


let imgSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Silvretta_Panorama_wiki_mg-k.jpg/1050px-Silvretta_Panorama_wiki_mg-k.jpg"
const ProfileInfos = () => {
    return <div>
            <img className={yu.imgBorder} src={imgSrc}/>
            <p>Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.
            </p>
        </div>


};
export default ProfileInfos;
