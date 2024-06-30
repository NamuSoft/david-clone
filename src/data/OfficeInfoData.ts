import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { type OfficeInfo } from "~/components/Components/OfficeInfo/OfficeInfo";

export const OfficeInfoData: React.ComponentProps<typeof OfficeInfo> = {
  title: "Malmo office",
  data: [
    {
      icon: PhoneOutlined,
      text: "+ 1 (246) 333-0088",
    },
    {
      icon: HomeOutlined,
      text: "alma.law@example.com",
    },
    {
      icon: MailOutlined,
      text: "4140 Parker Rd. Allentown, New Mexico 31134",
    },
    {
      icon: PhoneOutlined,
      text: "+ 1 (246) 333-0088",
    },
    {
      icon: HomeOutlined,
      text: "alma.law@example.com",
    },
    {
      icon: MailOutlined,
      text: "4140 Parker Rd. Allentown, New Mexico 31134",
    },
  ],
};
