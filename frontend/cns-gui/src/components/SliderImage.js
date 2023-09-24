import SimpleImageSlider from "react-simple-image-slider";
// import src1 from '1.avif'
// import src2 from './img/1.jpg'

const images = [
//   { url: {src1} },
  { url: "https://www.egnyte.com/sites/default/files/inline-images/oIQBRn9eNXijhrZXZDOx7s4pDGiLYbi2fN7rIfDatStBN7bUaa.png" },
  { url : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Public_key_encryption_keys.svg/1200px-Public_key_encryption_keys.svg.png" },
  { url : "https://info.varonis.com/hubfs/Imported_Blog_Media/pgp-encryption-hero.png" },
  { url : "https://images.idgesg.net/images/article/2020/07/protected_padlock_with_checkmark_amid_encrypted_data_cybersecurity_data_security_encryption_by_matejmo_gettyimages-872829036_cso_nw_2400x1600-100853298-large.jpg?auto=webp&quality=85,70" },

];

const SliderImage = () => {
  return (
    <div className="flex justify-center mt-4">
      <SimpleImageSlider
        width={1200}
        height={507}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default SliderImage