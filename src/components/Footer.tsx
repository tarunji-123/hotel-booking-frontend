
const Footer = () => {
  return (
    <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] py-10">
      <div className=" container mx-auto flex justify-between items-center">
        <span className=" text-3xl text-white font-bold tracking-tight">
            MernHolidays.com
        </span>
        <span className=" text-white font-bold tracking-tight flex gap-4">
            <p className=" cursor-pointer">Privacy Policy</p>
            <p className=" cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
}

export default Footer;
