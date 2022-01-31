import ContactForm from "../components/ContactForm";
import React from "react";

export default function ContactUs() {
    return (
      <div>  
          <h1 className="text-center text-5xl text-[#9ac9fb] my-10">Contactenos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 sm:px-64">
            <ContactForm />
            <p className="p-4 bg-[#9ac9fb] text-white text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum 
            ut non fugiat eos nihil exercitationem a? Nihil iste nostr
            um beatae culpa, excepturi impedit minus reprehenderit sun
            t provident sequi incidunt ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic praesentium asperiores nemo consequatur. Voluptatibus rem animi tenetur, ducimus officia eius vero blanditiis, obcaecati laboriosam laborum at esse. Quos, iure. Cumque mollitia quasi dolores voluptate voluptatibus maxime quae esse consequuntur officiis perspiciatis eius dicta rerum quas, omnis consectetur voluptatum? Est, dolore veritatis? Veniam quo enim dolores eligendi eius qui cupiditate iste, tenetur inventore consectetur quae, quia consequatur rem, hic nemo. Aspernatur placeat ducimus minus recusandae, porro hic. Eaque, quos minima? Enim ea ducimus sit, sunt quam co
            nsequatur perspiciatis facere, placeat atque consectetur
            nulla! Ullam laudantium, soluta facere vitae numquam ipsam?
            </p>
          </div>
      </div>
    );
  }