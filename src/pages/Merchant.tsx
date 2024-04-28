import RequestLoader from "@/components/ui/request-loader";
import { useApplyMerchantStatus } from "@/data/services/merchant.services";
import { getCurrentUser } from "@/redux/slices/authSlice";
import { AppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function MerchantPage() {  
  const [isChecked, setIsChecked] = useState(false);
  const { becomeMerchant, isLoading, isSuccess, error } =
    useApplyMerchantStatus();

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch(getCurrentUser(localStorage.getItem("accessToken") as string));
      toast.success("Status changed");
      navigate("/profile");
    }

    if (error) toast.error("Something went wrong. Retry.");
  }, [isSuccess, error]);

  return (
    <div>
      {/* <h1>Merchant</h1> */}
      <div className="border h-[60vh] overflow-scroll p-5">
        <p className="text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Dolor voluptate ea corporis autem quisquam corrupti, veniam
          eligendi quaerat quos necessitatibus exercitationem recusandae
          voluptatibus adipisci molestiae. Voluptatem ad facere nam neque
          officia nostrum pariatur dolore ipsam in, laudantium ipsum omnis sunt
          quia obcaecati nisi sed voluptates similique quae eum. Hic accusamus
          autem officiis facere porro, quis quia qui dignissimos tempora rem,
          magnam, maxime distinctio id consequatur eaque laborum! Odio
          consequuntur quos blanditiis minus id aliquid numquam repudiandae
          voluptatum dignissimos sed temporibus fugit incidunt facilis similique
          itaque, nemo eos cumque sint necessitatibus nulla eum! Reprehenderit
          eius ipsum, blanditiis dolorem itaque dolore iure unde totam tempora,
          accusantium, quam voluptatem deserunt officia illum? Doloremque omnis
          voluptate quas nisi hic dignissimos explicabo ducimus inventore,
          repellendus deleniti maiores sint vero nesciunt similique accusamus
          reiciendis ab quod recusandae laborum numquam modi impedit quae
          deserunt sapiente. Voluptate quod fugiat tempore ut incidunt quibusdam
          est quia, unde, facere saepe facilis laborum enim debitis voluptatibus
          eaque dolorum asperiores qui porro rem nemo dolor distinctio veritatis
          autem! Culpa ducimus omnis praesentium doloremque quas facere,
          officiis sed quaerat blanditiis. Dolorum dolor qui nihil perferendis
          eveniet ipsa accusantium reiciendis ducimus explicabo ipsam asperiores
          totam velit consequuntur possimus, impedit molestias eligendi nobis
          itaque? Molestias maiores quia, cupiditate aperiam consectetur, ullam
          placeat voluptates, praesentium illo fuga minima. Numquam, explicabo!
          Sapiente id non sed illum cumque quidem quas incidunt praesentium
          obcaecati delectus natus eum tenetur, voluptate voluptates ex quos
          dolor enim cupiditate illo voluptatem provident iste suscipit
          officiis. Eum sequi sit soluta perspiciatis dignissimos?
        </p>
        <p className="text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Dolor voluptate ea corporis autem quisquam corrupti, veniam
          eligendi quaerat quos necessitatibus exercitationem recusandae
          voluptatibus adipisci molestiae. Voluptatem ad facere nam neque
          officia nostrum pariatur dolore ipsam in, laudantium ipsum omnis sunt
          quia obcaecati nisi sed voluptates similique quae eum. Hic accusamus
          autem officiis facere porro, quis quia qui dignissimos tempora rem,
          magnam, maxime distinctio id consequatur eaque laborum! Odio
          consequuntur quos blanditiis minus id aliquid numquam repudiandae
          voluptatum dignissimos sed temporibus fugit incidunt facilis similique
          itaque, nemo eos cumque sint necessitatibus nulla eum! Reprehenderit
          eius ipsum, blanditiis dolorem itaque dolore iure unde totam tempora,
          accusantium, quam voluptatem deserunt officia illum? Doloremque omnis
          voluptate quas nisi hic dignissimos explicabo ducimus inventore,
          repellendus deleniti maiores sint vero nesciunt similique accusamus
          reiciendis ab quod recusandae laborum numquam modi impedit quae
          deserunt sapiente. Voluptate quod fugiat tempore ut incidunt quibusdam
          est quia, unde, facere saepe facilis laborum enim debitis voluptatibus
          eaque dolorum asperiores qui porro rem nemo dolor distinctio veritatis
          autem! Culpa ducimus omnis praesentium doloremque quas facere,
          officiis sed quaerat blanditiis. Dolorum dolor qui nihil perferendis
          eveniet ipsa accusantium reiciendis ducimus explicabo ipsam asperiores
          totam velit consequuntur possimus, impedit molestias eligendi nobis
          itaque? Molestias maiores quia, cupiditate aperiam consectetur, ullam
          placeat voluptates, praesentium illo fuga minima. Numquam, explicabo!
          Sapiente id non sed illum cumque quidem quas incidunt praesentium
          obcaecati delectus natus eum tenetur, voluptate voluptates ex quos
          dolor enim cupiditate illo voluptatem provident iste suscipit
          officiis. Eum sequi sit soluta perspiciatis dignissimos?
        </p>
        <p className="text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Dolor voluptate ea corporis autem quisquam corrupti, veniam
          eligendi quaerat quos necessitatibus exercitationem recusandae
          voluptatibus adipisci molestiae. Voluptatem ad facere nam neque
          officia nostrum pariatur dolore ipsam in, laudantium ipsum omnis sunt
          quia obcaecati nisi sed voluptates similique quae eum. Hic accusamus
          autem officiis facere porro, quis quia qui dignissimos tempora rem,
          magnam, maxime distinctio id consequatur eaque laborum! Odio
          consequuntur quos blanditiis minus id aliquid numquam repudiandae
          voluptatum dignissimos sed temporibus fugit incidunt facilis similique
          itaque, nemo eos cumque sint necessitatibus nulla eum! Reprehenderit
          eius ipsum, blanditiis dolorem itaque dolore iure unde totam tempora,
          accusantium, quam voluptatem deserunt officia illum? Doloremque omnis
          voluptate quas nisi hic dignissimos explicabo ducimus inventore,
          repellendus deleniti maiores sint vero nesciunt similique accusamus
          reiciendis ab quod recusandae laborum numquam modi impedit quae
          deserunt sapiente. Voluptate quod fugiat tempore ut incidunt quibusdam
          est quia, unde, facere saepe facilis laborum enim debitis voluptatibus
          eaque dolorum asperiores qui porro rem nemo dolor distinctio veritatis
          autem! Culpa ducimus omnis praesentium doloremque quas facere,
          officiis sed quaerat blanditiis. Dolorum dolor qui nihil perferendis
          eveniet ipsa accusantium reiciendis ducimus explicabo ipsam asperiores
          totam velit consequuntur possimus, impedit molestias eligendi nobis
          itaque? Molestias maiores quia, cupiditate aperiam consectetur, ullam
          placeat voluptates, praesentium illo fuga minima. Numquam, explicabo!
          Sapiente id non sed illum cumque quidem quas incidunt praesentium
          obcaecati delectus natus eum tenetur, voluptate voluptates ex quos
          dolor enim cupiditate illo voluptatem provident iste suscipit
          officiis. Eum sequi sit soluta perspiciatis dignissimos?
        </p>
        <p className="text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Dolor voluptate ea corporis autem quisquam corrupti, veniam
          eligendi quaerat quos necessitatibus exercitationem recusandae
          voluptatibus adipisci molestiae. Voluptatem ad facere nam neque
          officia nostrum pariatur dolore ipsam in, laudantium ipsum omnis sunt
          quia obcaecati nisi sed voluptates similique quae eum. Hic accusamus
          autem officiis facere porro, quis quia qui dignissimos tempora rem,
          magnam, maxime distinctio id consequatur eaque laborum! Odio
          consequuntur quos blanditiis minus id aliquid numquam repudiandae
          voluptatum dignissimos sed temporibus fugit incidunt facilis similique
          itaque, nemo eos cumque sint necessitatibus nulla eum! Reprehenderit
          eius ipsum, blanditiis dolorem itaque dolore iure unde totam tempora,
          accusantium, quam voluptatem deserunt officia illum? Doloremque omnis
          voluptate quas nisi hic dignissimos explicabo ducimus inventore,
          repellendus deleniti maiores sint vero nesciunt similique accusamus
          reiciendis ab quod recusandae laborum numquam modi impedit quae
          deserunt sapiente. Voluptate quod fugiat tempore ut incidunt quibusdam
          est quia, unde, facere saepe facilis laborum enim debitis voluptatibus
          eaque dolorum asperiores qui porro rem nemo dolor distinctio veritatis
          autem! Culpa ducimus omnis praesentium doloremque quas facere,
          officiis sed quaerat blanditiis. Dolorum dolor qui nihil perferendis
          eveniet ipsa accusantium reiciendis ducimus explicabo ipsam asperiores
          totam velit consequuntur possimus, impedit molestias eligendi nobis
          itaque? Molestias maiores quia, cupiditate aperiam consectetur, ullam
          placeat voluptates, praesentium illo fuga minima. Numquam, explicabo!
          Sapiente id non sed illum cumque quidem quas incidunt praesentium
          obcaecati delectus natus eum tenetur, voluptate voluptates ex quos
          dolor enim cupiditate illo voluptatem provident iste suscipit
          officiis. Eum sequi sit soluta perspiciatis dignissimos?
        </p>
        <p className="text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Dolor voluptate ea corporis autem quisquam corrupti, veniam
          eligendi quaerat quos necessitatibus exercitationem recusandae
          voluptatibus adipisci molestiae. Voluptatem ad facere nam neque
          officia nostrum pariatur dolore ipsam in, laudantium ipsum omnis sunt
          quia obcaecati nisi sed voluptates similique quae eum. Hic accusamus
          autem officiis facere porro, quis quia qui dignissimos tempora rem,
          magnam, maxime distinctio id consequatur eaque laborum! Odio
          consequuntur quos blanditiis minus id aliquid numquam repudiandae
          voluptatum dignissimos sed temporibus fugit incidunt facilis similique
          itaque, nemo eos cumque sint necessitatibus nulla eum! Reprehenderit
          eius ipsum, blanditiis dolorem itaque dolore iure unde totam tempora,
          accusantium, quam voluptatem deserunt officia illum? Doloremque omnis
          voluptate quas nisi hic dignissimos explicabo ducimus inventore,
          repellendus deleniti maiores sint vero nesciunt similique accusamus
          reiciendis ab quod recusandae laborum numquam modi impedit quae
          deserunt sapiente. Voluptate quod fugiat tempore ut incidunt quibusdam
          est quia, unde, facere saepe facilis laborum enim debitis voluptatibus
          eaque dolorum asperiores qui porro rem nemo dolor distinctio veritatis
          autem! Culpa ducimus omnis praesentium doloremque quas facere,
          officiis sed quaerat blanditiis. Dolorum dolor qui nihil perferendis
          eveniet ipsa accusantium reiciendis ducimus explicabo ipsam asperiores
          totam velit consequuntur possimus, impedit molestias eligendi nobis
          itaque? Molestias maiores quia, cupiditate aperiam consectetur, ullam
          placeat voluptates, praesentium illo fuga minima. Numquam, explicabo!
          Sapiente id non sed illum cumque quidem quas incidunt praesentium
          obcaecati delectus natus eum tenetur, voluptate voluptates ex quos
          dolor enim cupiditate illo voluptatem provident iste suscipit
          officiis. Eum sequi sit soluta perspiciatis dignissimos?
        </p>
        <p className="text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Dolor voluptate ea corporis autem quisquam corrupti, veniam
          eligendi quaerat quos necessitatibus exercitationem recusandae
          voluptatibus adipisci molestiae. Voluptatem ad facere nam neque
          officia nostrum pariatur dolore ipsam in, laudantium ipsum omnis sunt
          quia obcaecati nisi sed voluptates similique quae eum. Hic accusamus
          autem officiis facere porro, quis quia qui dignissimos tempora rem,
          magnam, maxime distinctio id consequatur eaque laborum! Odio
          consequuntur quos blanditiis minus id aliquid numquam repudiandae
          voluptatum dignissimos sed temporibus fugit incidunt facilis similique
          itaque, nemo eos cumque sint necessitatibus nulla eum! Reprehenderit
          eius ipsum, blanditiis dolorem itaque dolore iure unde totam tempora,
          accusantium, quam voluptatem deserunt officia illum? Doloremque omnis
          voluptate quas nisi hic dignissimos explicabo ducimus inventore,
          repellendus deleniti maiores sint vero nesciunt similique accusamus
          reiciendis ab quod recusandae laborum numquam modi impedit quae
          deserunt sapiente. Voluptate quod fugiat tempore ut incidunt quibusdam
          est quia, unde, facere saepe facilis laborum enim debitis voluptatibus
          eaque dolorum asperiores qui porro rem nemo dolor distinctio veritatis
          autem! Culpa ducimus omnis praesentium doloremque quas facere,
          officiis sed quaerat blanditiis. Dolorum dolor qui nihil perferendis
          eveniet ipsa accusantium reiciendis ducimus explicabo ipsam asperiores
          totam velit consequuntur possimus, impedit molestias eligendi nobis
          itaque? Molestias maiores quia, cupiditate aperiam consectetur, ullam
          placeat voluptates, praesentium illo fuga minima. Numquam, explicabo!
          Sapiente id non sed illum cumque quidem quas incidunt praesentium
          obcaecati delectus natus eum tenetur, voluptate voluptates ex quos
          dolor enim cupiditate illo voluptatem provident iste suscipit
          officiis. Eum sequi sit soluta perspiciatis dignissimos?
        </p>
        <p className="text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Dolor voluptate ea corporis autem quisquam corrupti, veniam
          eligendi quaerat quos necessitatibus exercitationem recusandae
          voluptatibus adipisci molestiae. Voluptatem ad facere nam neque
          officia nostrum pariatur dolore ipsam in, laudantium ipsum omnis sunt
          quia obcaecati nisi sed voluptates similique quae eum. Hic accusamus
          autem officiis facere porro, quis quia qui dignissimos tempora rem,
          magnam, maxime distinctio id consequatur eaque laborum! Odio
          consequuntur quos blanditiis minus id aliquid numquam repudiandae
          voluptatum dignissimos sed temporibus fugit incidunt facilis similique
          itaque, nemo eos cumque sint necessitatibus nulla eum! Reprehenderit
          eius ipsum, blanditiis dolorem itaque dolore iure unde totam tempora,
          accusantium, quam voluptatem deserunt officia illum? Doloremque omnis
          voluptate quas nisi hic dignissimos explicabo ducimus inventore,
          repellendus deleniti maiores sint vero nesciunt similique accusamus
          reiciendis ab quod recusandae laborum numquam modi impedit quae
          deserunt sapiente. Voluptate quod fugiat tempore ut incidunt quibusdam
          est quia, unde, facere saepe facilis laborum enim debitis voluptatibus
          eaque dolorum asperiores qui porro rem nemo dolor distinctio veritatis
          autem! Culpa ducimus omnis praesentium doloremque quas facere,
          officiis sed quaerat blanditiis. Dolorum dolor qui nihil perferendis
          eveniet ipsa accusantium reiciendis ducimus explicabo ipsam asperiores
          totam velit consequuntur possimus, impedit molestias eligendi nobis
          itaque? Molestias maiores quia, cupiditate aperiam consectetur, ullam
          placeat voluptates, praesentium illo fuga minima. Numquam, explicabo!
          Sapiente id non sed illum cumque quidem quas incidunt praesentium
          obcaecati delectus natus eum tenetur, voluptate voluptates ex quos
          dolor enim cupiditate illo voluptatem provident iste suscipit
          officiis. Eum sequi sit soluta perspiciatis dignissimos?
        </p>
        <p className="text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Dolor voluptate ea corporis autem quisquam corrupti, veniam
          eligendi quaerat quos necessitatibus exercitationem recusandae
          voluptatibus adipisci molestiae. Voluptatem ad facere nam neque
          officia nostrum pariatur dolore ipsam in, laudantium ipsum omnis sunt
          quia obcaecati nisi sed voluptates similique quae eum. Hic accusamus
          autem officiis facere porro, quis quia qui dignissimos tempora rem,
          magnam, maxime distinctio id consequatur eaque laborum! Odio
          consequuntur quos blanditiis minus id aliquid numquam repudiandae
          voluptatum dignissimos sed temporibus fugit incidunt facilis similique
          itaque, nemo eos cumque sint necessitatibus nulla eum! Reprehenderit
          eius ipsum, blanditiis dolorem itaque dolore iure unde totam tempora,
          accusantium, quam voluptatem deserunt officia illum? Doloremque omnis
          voluptate quas nisi hic dignissimos explicabo ducimus inventore,
          repellendus deleniti maiores sint vero nesciunt similique accusamus
          reiciendis ab quod recusandae laborum numquam modi impedit quae
          deserunt sapiente. Voluptate quod fugiat tempore ut incidunt quibusdam
          est quia, unde, facere saepe facilis laborum enim debitis voluptatibus
          eaque dolorum asperiores qui porro rem nemo dolor distinctio veritatis
          autem! Culpa ducimus omnis praesentium doloremque quas facere,
          officiis sed quaerat blanditiis. Dolorum dolor qui nihil perferendis
          eveniet ipsa accusantium reiciendis ducimus explicabo ipsam asperiores
          totam velit consequuntur possimus, impedit molestias eligendi nobis
          itaque? Molestias maiores quia, cupiditate aperiam consectetur, ullam
          placeat voluptates, praesentium illo fuga minima. Numquam, explicabo!
          Sapiente id non sed illum cumque quidem quas incidunt praesentium
          obcaecati delectus natus eum tenetur, voluptate voluptates ex quos
          dolor enim cupiditate illo voluptatem provident iste suscipit
          officiis. Eum sequi sit soluta perspiciatis dignissimos?
        </p>
        <p className="text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Dolor voluptate ea corporis autem quisquam corrupti, veniam
          eligendi quaerat quos necessitatibus exercitationem recusandae
          voluptatibus adipisci molestiae. Voluptatem ad facere nam neque
          officia nostrum pariatur dolore ipsam in, laudantium ipsum omnis sunt
          quia obcaecati nisi sed voluptates similique quae eum. Hic accusamus
          autem officiis facere porro, quis quia qui dignissimos tempora rem,
          magnam, maxime distinctio id consequatur eaque laborum! Odio
          consequuntur quos blanditiis minus id aliquid numquam repudiandae
          voluptatum dignissimos sed temporibus fugit incidunt facilis similique
          itaque, nemo eos cumque sint necessitatibus nulla eum! Reprehenderit
          eius ipsum, blanditiis dolorem itaque dolore iure unde totam tempora,
          accusantium, quam voluptatem deserunt officia illum? Doloremque omnis
          voluptate quas nisi hic dignissimos explicabo ducimus inventore,
          repellendus deleniti maiores sint vero nesciunt similique accusamus
          reiciendis ab quod recusandae laborum numquam modi impedit quae
          deserunt sapiente. Voluptate quod fugiat tempore ut incidunt quibusdam
          est quia, unde, facere saepe facilis laborum enim debitis voluptatibus
          eaque dolorum asperiores qui porro rem nemo dolor distinctio veritatis
          autem! Culpa ducimus omnis praesentium doloremque quas facere,
          officiis sed quaerat blanditiis. Dolorum dolor qui nihil perferendis
          eveniet ipsa accusantium reiciendis ducimus explicabo ipsam asperiores
          totam velit consequuntur possimus, impedit molestias eligendi nobis
          itaque? Molestias maiores quia, cupiditate aperiam consectetur, ullam
          placeat voluptates, praesentium illo fuga minima. Numquam, explicabo!
          Sapiente id non sed illum cumque quidem quas incidunt praesentium
          obcaecati delectus natus eum tenetur, voluptate voluptates ex quos
          dolor enim cupiditate illo voluptatem provident iste suscipit
          officiis. Eum sequi sit soluta perspiciatis dignissimos?
        </p>
        <p className="text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Dolor voluptate ea corporis autem quisquam corrupti, veniam
          eligendi quaerat quos necessitatibus exercitationem recusandae
          voluptatibus adipisci molestiae. Voluptatem ad facere nam neque
          officia nostrum pariatur dolore ipsam in, laudantium ipsum omnis sunt
          quia obcaecati nisi sed voluptates similique quae eum. Hic accusamus
          autem officiis facere porro, quis quia qui dignissimos tempora rem,
          magnam, maxime distinctio id consequatur eaque laborum! Odio
          consequuntur quos blanditiis minus id aliquid numquam repudiandae
          voluptatum dignissimos sed temporibus fugit incidunt facilis similique
          itaque, nemo eos cumque sint necessitatibus nulla eum! Reprehenderit
          eius ipsum, blanditiis dolorem itaque dolore iure unde totam tempora,
          accusantium, quam voluptatem deserunt officia illum? Doloremque omnis
          voluptate quas nisi hic dignissimos explicabo ducimus inventore,
          repellendus deleniti maiores sint vero nesciunt similique accusamus
          reiciendis ab quod recusandae laborum numquam modi impedit quae
          deserunt sapiente. Voluptate quod fugiat tempore ut incidunt quibusdam
          est quia, unde, facere saepe facilis laborum enim debitis voluptatibus
          eaque dolorum asperiores qui porro rem nemo dolor distinctio veritatis
          autem! Culpa ducimus omnis praesentium doloremque quas facere,
          officiis sed quaerat blanditiis. Dolorum dolor qui nihil perferendis
          eveniet ipsa accusantium reiciendis ducimus explicabo ipsam asperiores
          totam velit consequuntur possimus, impedit molestias eligendi nobis
          itaque? Molestias maiores quia, cupiditate aperiam consectetur, ullam
          placeat voluptates, praesentium illo fuga minima. Numquam, explicabo!
          Sapiente id non sed illum cumque quidem quas incidunt praesentium
          obcaecati delectus natus eum tenetur, voluptate voluptates ex quos
          dolor enim cupiditate illo voluptatem provident iste suscipit
          officiis. Eum sequi sit soluta perspiciatis dignissimos?
        </p>
        <p className="text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Dolor voluptate ea corporis autem quisquam corrupti, veniam
          eligendi quaerat quos necessitatibus exercitationem recusandae
          voluptatibus adipisci molestiae. Voluptatem ad facere nam neque
          officia nostrum pariatur dolore ipsam in, laudantium ipsum omnis sunt
          quia obcaecati nisi sed voluptates similique quae eum. Hic accusamus
          autem officiis facere porro, quis quia qui dignissimos tempora rem,
          magnam, maxime distinctio id consequatur eaque laborum! Odio
          consequuntur quos blanditiis minus id aliquid numquam repudiandae
          voluptatum dignissimos sed temporibus fugit incidunt facilis similique
          itaque, nemo eos cumque sint necessitatibus nulla eum! Reprehenderit
          eius ipsum, blanditiis dolorem itaque dolore iure unde totam tempora,
          accusantium, quam voluptatem deserunt officia illum? Doloremque omnis
          voluptate quas nisi hic dignissimos explicabo ducimus inventore,
          repellendus deleniti maiores sint vero nesciunt similique accusamus
          reiciendis ab quod recusandae laborum numquam modi impedit quae
          deserunt sapiente. Voluptate quod fugiat tempore ut incidunt quibusdam
          est quia, unde, facere saepe facilis laborum enim debitis voluptatibus
          eaque dolorum asperiores qui porro rem nemo dolor distinctio veritatis
          autem! Culpa ducimus omnis praesentium doloremque quas facere,
          officiis sed quaerat blanditiis. Dolorum dolor qui nihil perferendis
          eveniet ipsa accusantium reiciendis ducimus explicabo ipsam asperiores
          totam velit consequuntur possimus, impedit molestias eligendi nobis
          itaque? Molestias maiores quia, cupiditate aperiam consectetur, ullam
          placeat voluptates, praesentium illo fuga minima. Numquam, explicabo!
          Sapiente id non sed illum cumque quidem quas incidunt praesentium
          obcaecati delectus natus eum tenetur, voluptate voluptates ex quos
          dolor enim cupiditate illo voluptatem provident iste suscipit
          officiis. Eum sequi sit soluta perspiciatis dignissimos?
        </p>
        <p className="text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Dolor voluptate ea corporis autem quisquam corrupti, veniam
          eligendi quaerat quos necessitatibus exercitationem recusandae
          voluptatibus adipisci molestiae. Voluptatem ad facere nam neque
          officia nostrum pariatur dolore ipsam in, laudantium ipsum omnis sunt
          quia obcaecati nisi sed voluptates similique quae eum. Hic accusamus
          autem officiis facere porro, quis quia qui dignissimos tempora rem,
          magnam, maxime distinctio id consequatur eaque laborum! Odio
          consequuntur quos blanditiis minus id aliquid numquam repudiandae
          voluptatum dignissimos sed temporibus fugit incidunt facilis similique
          itaque, nemo eos cumque sint necessitatibus nulla eum! Reprehenderit
          eius ipsum, blanditiis dolorem itaque dolore iure unde totam tempora,
          accusantium, quam voluptatem deserunt officia illum? Doloremque omnis
          voluptate quas nisi hic dignissimos explicabo ducimus inventore,
          repellendus deleniti maiores sint vero nesciunt similique accusamus
          reiciendis ab quod recusandae laborum numquam modi impedit quae
          deserunt sapiente. Voluptate quod fugiat tempore ut incidunt quibusdam
          est quia, unde, facere saepe facilis laborum enim debitis voluptatibus
          eaque dolorum asperiores qui porro rem nemo dolor distinctio veritatis
          autem! Culpa ducimus omnis praesentium doloremque quas facere,
          officiis sed quaerat blanditiis. Dolorum dolor qui nihil perferendis
          eveniet ipsa accusantium reiciendis ducimus explicabo ipsam asperiores
          totam velit consequuntur possimus, impedit molestias eligendi nobis
          itaque? Molestias maiores quia, cupiditate aperiam consectetur, ullam
          placeat voluptates, praesentium illo fuga minima. Numquam, explicabo!
          Sapiente id non sed illum cumque quidem quas incidunt praesentium
          obcaecati delectus natus eum tenetur, voluptate voluptates ex quos
          dolor enim cupiditate illo voluptatem provident iste suscipit
          officiis. Eum sequi sit soluta perspiciatis dignissimos?
        </p>
        <p className="text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Dolor voluptate ea corporis autem quisquam corrupti, veniam
          eligendi quaerat quos necessitatibus exercitationem recusandae
          voluptatibus adipisci molestiae. Voluptatem ad facere nam neque
          officia nostrum pariatur dolore ipsam in, laudantium ipsum omnis sunt
          quia obcaecati nisi sed voluptates similique quae eum. Hic accusamus
          autem officiis facere porro, quis quia qui dignissimos tempora rem,
          magnam, maxime distinctio id consequatur eaque laborum! Odio
          consequuntur quos blanditiis minus id aliquid numquam repudiandae
          voluptatum dignissimos sed temporibus fugit incidunt facilis similique
          itaque, nemo eos cumque sint necessitatibus nulla eum! Reprehenderit
          eius ipsum, blanditiis dolorem itaque dolore iure unde totam tempora,
          accusantium, quam voluptatem deserunt officia illum? Doloremque omnis
          voluptate quas nisi hic dignissimos explicabo ducimus inventore,
          repellendus deleniti maiores sint vero nesciunt similique accusamus
          reiciendis ab quod recusandae laborum numquam modi impedit quae
          deserunt sapiente. Voluptate quod fugiat tempore ut incidunt quibusdam
          est quia, unde, facere saepe facilis laborum enim debitis voluptatibus
          eaque dolorum asperiores qui porro rem nemo dolor distinctio veritatis
          autem! Culpa ducimus omnis praesentium doloremque quas facere,
          officiis sed quaerat blanditiis. Dolorum dolor qui nihil perferendis
          eveniet ipsa accusantium reiciendis ducimus explicabo ipsam asperiores
          totam velit consequuntur possimus, impedit molestias eligendi nobis
          itaque? Molestias maiores quia, cupiditate aperiam consectetur, ullam
          placeat voluptates, praesentium illo fuga minima. Numquam, explicabo!
          Sapiente id non sed illum cumque quidem quas incidunt praesentium
          obcaecati delectus natus eum tenetur, voluptate voluptates ex quos
          dolor enim cupiditate illo voluptatem provident iste suscipit
          officiis. Eum sequi sit soluta perspiciatis dignissimos?
        </p>
        <p className="text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Dolor voluptate ea corporis autem quisquam corrupti, veniam
          eligendi quaerat quos necessitatibus exercitationem recusandae
          voluptatibus adipisci molestiae. Voluptatem ad facere nam neque
          officia nostrum pariatur dolore ipsam in, laudantium ipsum omnis sunt
          quia obcaecati nisi sed voluptates similique quae eum. Hic accusamus
          autem officiis facere porro, quis quia qui dignissimos tempora rem,
          magnam, maxime distinctio id consequatur eaque laborum! Odio
          consequuntur quos blanditiis minus id aliquid numquam repudiandae
          voluptatum dignissimos sed temporibus fugit incidunt facilis similique
          itaque, nemo eos cumque sint necessitatibus nulla eum! Reprehenderit
          eius ipsum, blanditiis dolorem itaque dolore iure unde totam tempora,
          accusantium, quam voluptatem deserunt officia illum? Doloremque omnis
          voluptate quas nisi hic dignissimos explicabo ducimus inventore,
          repellendus deleniti maiores sint vero nesciunt similique accusamus
          reiciendis ab quod recusandae laborum numquam modi impedit quae
          deserunt sapiente. Voluptate quod fugiat tempore ut incidunt quibusdam
          est quia, unde, facere saepe facilis laborum enim debitis voluptatibus
          eaque dolorum asperiores qui porro rem nemo dolor distinctio veritatis
          autem! Culpa ducimus omnis praesentium doloremque quas facere,
          officiis sed quaerat blanditiis. Dolorum dolor qui nihil perferendis
          eveniet ipsa accusantium reiciendis ducimus explicabo ipsam asperiores
          totam velit consequuntur possimus, impedit molestias eligendi nobis
          itaque? Molestias maiores quia, cupiditate aperiam consectetur, ullam
          placeat voluptates, praesentium illo fuga minima. Numquam, explicabo!
          Sapiente id non sed illum cumque quidem quas incidunt praesentium
          obcaecati delectus natus eum tenetur, voluptate voluptates ex quos
          dolor enim cupiditate illo voluptatem provident iste suscipit
          officiis. Eum sequi sit soluta perspiciatis dignissimos?
        </p>
        <p className="text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Dolor voluptate ea corporis autem quisquam corrupti, veniam
          eligendi quaerat quos necessitatibus exercitationem recusandae
          voluptatibus adipisci molestiae. Voluptatem ad facere nam neque
          officia nostrum pariatur dolore ipsam in, laudantium ipsum omnis sunt
          quia obcaecati nisi sed voluptates similique quae eum. Hic accusamus
          autem officiis facere porro, quis quia qui dignissimos tempora rem,
          magnam, maxime distinctio id consequatur eaque laborum! Odio
          consequuntur quos blanditiis minus id aliquid numquam repudiandae
          voluptatum dignissimos sed temporibus fugit incidunt facilis similique
          itaque, nemo eos cumque sint necessitatibus nulla eum! Reprehenderit
          eius ipsum, blanditiis dolorem itaque dolore iure unde totam tempora,
          accusantium, quam voluptatem deserunt officia illum? Doloremque omnis
          voluptate quas nisi hic dignissimos explicabo ducimus inventore,
          repellendus deleniti maiores sint vero nesciunt similique accusamus
          reiciendis ab quod recusandae laborum numquam modi impedit quae
          deserunt sapiente. Voluptate quod fugiat tempore ut incidunt quibusdam
          est quia, unde, facere saepe facilis laborum enim debitis voluptatibus
          eaque dolorum asperiores qui porro rem nemo dolor distinctio veritatis
          autem! Culpa ducimus omnis praesentium doloremque quas facere,
          officiis sed quaerat blanditiis. Dolorum dolor qui nihil perferendis
          eveniet ipsa accusantium reiciendis ducimus explicabo ipsam asperiores
          totam velit consequuntur possimus, impedit molestias eligendi nobis
          itaque? Molestias maiores quia, cupiditate aperiam consectetur, ullam
          placeat voluptates, praesentium illo fuga minima. Numquam, explicabo!
          Sapiente id non sed illum cumque quidem quas incidunt praesentium
          obcaecati delectus natus eum tenetur, voluptate voluptates ex quos
          dolor enim cupiditate illo voluptatem provident iste suscipit
          officiis. Eum sequi sit soluta perspiciatis dignissimos?
        </p>
        <p className="text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Dolor voluptate ea corporis autem quisquam corrupti, veniam
          eligendi quaerat quos necessitatibus exercitationem recusandae
          voluptatibus adipisci molestiae. Voluptatem ad facere nam neque
          officia nostrum pariatur dolore ipsam in, laudantium ipsum omnis sunt
          quia obcaecati nisi sed voluptates similique quae eum. Hic accusamus
          autem officiis facere porro, quis quia qui dignissimos tempora rem,
          magnam, maxime distinctio id consequatur eaque laborum! Odio
          consequuntur quos blanditiis minus id aliquid numquam repudiandae
          voluptatum dignissimos sed temporibus fugit incidunt facilis similique
          itaque, nemo eos cumque sint necessitatibus nulla eum! Reprehenderit
          eius ipsum, blanditiis dolorem itaque dolore iure unde totam tempora,
          accusantium, quam voluptatem deserunt officia illum? Doloremque omnis
          voluptate quas nisi hic dignissimos explicabo ducimus inventore,
          repellendus deleniti maiores sint vero nesciunt similique accusamus
          reiciendis ab quod recusandae laborum numquam modi impedit quae
          deserunt sapiente. Voluptate quod fugiat tempore ut incidunt quibusdam
          est quia, unde, facere saepe facilis laborum enim debitis voluptatibus
          eaque dolorum asperiores qui porro rem nemo dolor distinctio veritatis
          autem! Culpa ducimus omnis praesentium doloremque quas facere,
          officiis sed quaerat blanditiis. Dolorum dolor qui nihil perferendis
          eveniet ipsa accusantium reiciendis ducimus explicabo ipsam asperiores
          totam velit consequuntur possimus, impedit molestias eligendi nobis
          itaque? Molestias maiores quia, cupiditate aperiam consectetur, ullam
          placeat voluptates, praesentium illo fuga minima. Numquam, explicabo!
          Sapiente id non sed illum cumque quidem quas incidunt praesentium
          obcaecati delectus natus eum tenetur, voluptate voluptates ex quos
          dolor enim cupiditate illo voluptatem provident iste suscipit
          officiis. Eum sequi sit soluta perspiciatis dignissimos?
        </p>
        <p className="text-justify mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          numquam! Dolor voluptate ea corporis autem quisquam corrupti, veniam
          eligendi quaerat quos necessitatibus exercitationem recusandae
          voluptatibus adipisci molestiae. Voluptatem ad facere nam neque
          officia nostrum pariatur dolore ipsam in, laudantium ipsum omnis sunt
          quia obcaecati nisi sed voluptates similique quae eum. Hic accusamus
          autem officiis facere porro, quis quia qui dignissimos tempora rem,
          magnam, maxime distinctio id consequatur eaque laborum! Odio
          consequuntur quos blanditiis minus id aliquid numquam repudiandae
          voluptatum dignissimos sed temporibus fugit incidunt facilis similique
          itaque, nemo eos cumque sint necessitatibus nulla eum! Reprehenderit
          eius ipsum, blanditiis dolorem itaque dolore iure unde totam tempora,
          accusantium, quam voluptatem deserunt officia illum? Doloremque omnis
          voluptate quas nisi hic dignissimos explicabo ducimus inventore,
          repellendus deleniti maiores sint vero nesciunt similique accusamus
          reiciendis ab quod recusandae laborum numquam modi impedit quae
          deserunt sapiente. Voluptate quod fugiat tempore ut incidunt quibusdam
          est quia, unde, facere saepe facilis laborum enim debitis voluptatibus
          eaque dolorum asperiores qui porro rem nemo dolor distinctio veritatis
          autem! Culpa ducimus omnis praesentium doloremque quas facere,
          officiis sed quaerat blanditiis. Dolorum dolor qui nihil perferendis
          eveniet ipsa accusantium reiciendis ducimus explicabo ipsam asperiores
          totam velit consequuntur possimus, impedit molestias eligendi nobis
          itaque? Molestias maiores quia, cupiditate aperiam consectetur, ullam
          placeat voluptates, praesentium illo fuga minima. Numquam, explicabo!
          Sapiente id non sed illum cumque quidem quas incidunt praesentium
          obcaecati delectus natus eum tenetur, voluptate voluptates ex quos
          dolor enim cupiditate illo voluptatem provident iste suscipit
          officiis. Eum sequi sit soluta perspiciatis dignissimos?
        </p>
      </div>
      <div className="mt-5 flex justify-between items-center">
        <div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            id="check"
          />
          <label className="ml-3" htmlFor="check">
            I have read the policies and I agree with it.
          </label>
        </div>
        {isChecked ? (
          isLoading ? (
            <RequestLoader className="bg-orange-500 px-5 py-2 flex justify-center disabled w-[25%] rounded cursor-not-allowed mb-4 opacity-60" />
          ) : (
            <button
              type="button"
              className="bg-orange-500 px-5 py-2 rounded cursor-pointer mb-4 text-white w-[25%]"
              onClick={async () => await becomeMerchant()}
            >
              Apply
            </button>
          )
        ) : (
          <button
            type="button"
            className="bg-orange-500 px-5 py-2 opacity-60 rounded cursor-not-allowed mb-4 text-white w-[25%]"
          >
            Apply
          </button>
        )}
      </div>
    </div>
  );
}
