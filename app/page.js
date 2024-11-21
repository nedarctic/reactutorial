import LikeButton from "./like-button";

function Header({ title }) {
  return (<h1>{title}</h1>);
}

export default function HomePage() {
  const flagshipPhones = ["Samsung S24", "Google Pixel 9 Pro", "Oppo Find X8 Pro", "Vivo X200 Pro", "iPhone 16 Pro", "VivoX200 Mini", "Realme GT7 Pro", "Xiaomi 14 Ultra", "Huawei Mate 70 Pro", "Motorolla Edge 50 Ultra"];
  return (
    <div>
      <Header title="2024 Flagship Phones" />
      <ul>
        {flagshipPhones.map((phone, index) => (
          <li key={index}>{phone}</li>
        ))}
      </ul>
      <LikeButton/>
    </div>
  );
}