"use client";
import { useState } from "react";
import RegistrationConfirmModal from "@/components/common/Modal/RegistrationConfirmModal";
import InsufficientBal from "@/components/common/Modal/InsufficientBal";
import BuyPlays from "@/components/common/Modal/BuyPlays";
import PaymentMethod from "@/components/common/Modal/PaymentMethod";
import PaymentConfirm from "@/components/common/Modal/PaymentConfirm";
import { useSession } from "next-auth/react";

const ModalDemo = () => {
  const [visible, setVisible] = useState(1);

  const { data: session, status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return <></>;
  }
  return (
    <div>
      <h1>Home</h1>
      {visible === 1 ? (
        <RegistrationConfirmModal setVisible={setVisible} />
      ) : null}
      {visible === 2 ? <InsufficientBal setVisible={setVisible} /> : null}
      {visible === 3 ? <BuyPlays setVisible={setVisible} /> : null}
      {visible === 4 ? <PaymentMethod setVisible={setVisible} /> : null}
      {visible === 5 ? <PaymentConfirm setVisible={setVisible} /> : null}
    </div>
  );
};

export default ModalDemo;
