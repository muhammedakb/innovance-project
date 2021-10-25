import { useEffect } from "react";
import { getProfileAsync } from "../../stores/profile";
import { useSelector, useDispatch } from "react-redux";
import Error from "../error/Error";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.profile.items);
  const error = useSelector((state: any) => state.profile.error);

  const handleChange = (e: any) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    dispatch(getProfileAsync());
  }, [dispatch]);

  if (error) {
    return <Error message={error} />;
  }
  return (
    <div className="profile-form">
      {data.map((user: any, index: number) => (
        <form key={index}>
          <input
            type="text"
            placeholder="Name"
            defaultValue={user.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Surname"
            defaultValue={user.surname}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            defaultValue={user.email}
            onChange={handleChange}
          />
          <div className="row">
            <input
              type="date"
              defaultValue={user.birthday}
              onChange={handleChange}
            />
            <select
              name=""
              id=""
              defaultValue={user.city}
              onChange={handleChange}
            >
              <option value="">Konum seçiniz</option>
              <option value="Adana">01 Adana</option>
              <option value="Adıyaman">02 Adıyaman</option>
              <option value="Afyonkarahisar">03Afyonkarahisar</option>
              <option value="Ağrı">04 Ağrı</option>
              <option value="Amasya">05 Amasya</option>
              <option value="Ankara">06 Ankara</option>
              <option value="Antalya">07Antalya</option>
              <option value="Artvin">08 Artvin</option>
              <option value="Aydın">09 Aydın</option>
              <option value="Balıkesir">10 Balıkesir</option>
              <option value="Bilecik">11 Bilecik</option>
              <option value="Bingöl">12 Bingöl</option>
              <option value="Bitlis">13 Bitlis</option>
              <option value="Bolu">14 Bolu</option>
              <option value="Burdur">15 Burdur</option>
              <option value="Bursa">16 Bursa</option>
              <option value="Çanakkale">17 Çanakkale</option>
              <option value="Çankırı">18 Çankırı</option>
              <option value="Çorum">19 Çorum</option>
              <option value="Denizli">20 Denizli</option>
              <option value="Diyarbakır">21 Diyarbakır</option>
              <option value="Edirne">22 Edirne</option>
              <option value="Elazığ">23 Elazığ</option>
              <option value="Erzincan">24 Erzincan</option>
              <option value="Erzurum">25 Erzurum</option>
              <option value="Eskişehir">26 Eskişehir</option>
              <option value="Gaziantep">27 Gaziantep</option>
              <option value="Giresun">28 Giresun</option>
              <option value="Gümüşhane">29 Gümüşhane</option>
              <option value="Hakkâri">30 Hakkâri</option>
              <option value="Hatay">31 Hatay</option>
              <option value="Isparta">32 Isparta</option>
              <option value="Mersin">33 Mersin</option>
              <option value="İstanbul">34 İstanbul</option>
              <option value="İzmir">35 İzmir</option>
              <option value="Kars">36 Kars</option>
              <option value="Kastamonu">37 Kastamonu</option>
              <option value="Kayseri">38 Kayseri</option>
              <option value="Kırklareli">39 Kırklareli</option>
              <option value="Kırşehir">40 Kırşehir</option>
              <option value="Kocaeli">41 Kocaeli</option>
              <option value="Konya">42 Konya</option>
              <option value="Kütahya">43 Kütahya</option>
              <option value="Malatya">44 Malatya</option>
              <option value="Manisa">45 Manisa</option>
              <option value="Kahramanmaraş">46 Kahramanmaraş</option>
              <option value="Mardin">47 Mardin</option>
              <option value="Muğla">48 Muğla</option>
              <option value="Muş">49 Muş</option>
              <option value="Nevşehir">50 Nevşehir</option>
              <option value="Niğde">51 Niğde</option>
              <option value="Ordu">52 Ordu</option>
              <option value="Rize">53 Rize</option>
              <option value="Sakarya">54 Sakarya</option>
              <option value="Samsun">55 Samsun</option>
              <option value="Siirt">56 Siirt</option>
              <option value="Sinop">57 Sinop</option>
              <option value="Sivas">58 Sivas</option>
              <option value="Tekirdağ">59 Tekirdağ</option>
              <option value="Tokat">60 Tokat</option>
              <option value="Trabzon">61 Trabzon</option>
              <option value="Tunceli">62 Tunceli</option>
              <option value="Şanlıurfa">63 Şanlıurfa</option>
              <option value="Uşak">64 Uşak</option>
              <option value="Van">65 Van</option>
              <option value="Yozgat">66 Yozgat</option>
              <option value="Zonguldak">67 Zonguldak</option>
              <option value="Aksaray">68 Aksaray</option>
              <option value="Bayburt">69 Bayburt</option>
              <option value="Karaman">70 Karaman</option>
              <option value="Kırıkkale">71 Kırıkkale</option>
              <option value="Batman">72 Batman</option>
              <option value="Şırnak">73 Şırnak</option>
              <option value="Bartın">74 Bartın</option>
              <option value="Ardahan">75 Ardahan</option>
              <option value="Iğdır">76 Iğdır</option>
              <option value="Yalova">77 Yalova</option>
              <option value="Karabük">78 Karabük</option>
              <option value="Kilis">79 Kilis</option>
              <option value="Osmaniye">80 Osmaniye</option>
              <option value="Düzce">81 Düzce</option>
            </select>
          </div>
          <label>
            <input
              type="text"
              placeholder="Profile img"
              defaultValue={user.img}
              onChange={handleChange}
            />
            Only link
          </label>
          <label>
            <input
              type="text"
              placeholder="Cover img"
              defaultValue={user.coverPhoto}
              onChange={handleChange}
            />
            Only link
          </label>
          <button type="submit">Save</button>
        </form>
      ))}
    </div>
  );
};

export default ProfileForm;
