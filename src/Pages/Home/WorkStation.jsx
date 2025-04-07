
import { useEffect, useState, useRef } from "react";

const WorkStation = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const useCountUp = (target) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!startCount) return; 

      let start = 0;
      const speed = 10;
      const increment = target / 100;
      const counterInterval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(counterInterval);
        } else {
          setCount(Math.ceil(start));
        }
      }, speed);

      return () => clearInterval(counterInterval);
    }, [startCount, target]);

    return count;
  };

  const dentalSurgeons = useCountUp(100);
  const happyClients = useCountUp(1500);
  const yearsOfExperience = useCountUp(14);
  const typesOfServices = useCountUp(20);

  return (
    <div ref={sectionRef} className="flex flex-col md:flex-row gap-10 items-center justify-center py-24 bg-blue-50 my-10 md:my-24">
      <div className="text-center space-y-4">
        <img
          className="w-[255px] h-[255px] object-cover"
          src="https://i.ibb.co.com/PSzZhhm/Screenshot-2025-03-31-143655-removebg-preview.png"
          alt=""
        />
        <h5 className="text-4xl font-bold">{dentalSurgeons}+</h5>
        <p className="text-xl font-medium">Dental Surgeons</p>
      </div>

      <div className="text-center space-y-4">
        <img
          className="w-[255px] h-[255px] object-cover"
          src="https://i.ibb.co.com/JRHqfrg2/dentist-doctor-cartoon-with-sad-rotten-tooth-prevention-diagnosis-and-treatment-of-tooth-and-gum-dis.png"
          alt=""
        />
        <h5 className="text-4xl font-bold">{happyClients}+</h5>
        <p className="text-xl font-medium">Happy Clients</p>
      </div>

      <div className="text-center space-y-4">
        <img
          className="w-[255px] h-[255px] object-cover"
          src="https://i.ibb.co.com/Lhc0sPtN/images-2-removebg-preview.png"
          alt=""
        />
        <h5 className="text-4xl font-bold">{yearsOfExperience}+</h5>
        <p className="text-xl font-medium">Years of Experience</p>
      </div>

      <div className="text-center space-y-4">
        <img
          className="w-[255px] h-[255px] object-cover"
          src="https://i.ibb.co.com/gMRhTCsb/Screenshot-2025-03-31-142747-removebg-preview.png"
          alt=""
        />
        <h5 className="text-4xl font-bold">{typesOfServices}+</h5>
        <p className="text-xl font-medium">Types of Services</p>
      </div>
    </div>
  );
};

export default WorkStation;
