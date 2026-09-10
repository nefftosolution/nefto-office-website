import React from 'react';
import SEO from '../components/SEO';

const Disclaimer = () => {
  return (
    <>
      <SEO 
        title="Disclaimer | Neffto Solution Software House Pakistan" 
        description="Read the disclaimer covering information, services and third party content published on the Neffto Solution website. Contact us with any questions." 
        canonical="https://nefftosolution.com/disclaimer"
        ogTitle="Disclaimer | Neffto Solution Software House Pakistan"
        ogDescription="Read the disclaimer covering information, services and third party content published on the Neffto Solution website. Contact us with any questions."
        ogUrl="https://nefftosolution.com/disclaimer"
        keywords="disclaimer, NEFFTO disclaimer, legal, liability"
      
        schema={JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Disclaimer - Software & Tech Solutions | Neffto Solution","url":"https://nefftosolution.com/disclaimer"})}
      />
      <div className="bg-main-bg text-white sm:pt-40 pt-30 sm:pb-20 pb-10">
        <div className="max-w-7xl mx-auto sm:px-6 px-4 space-y-6 bg-surface/30 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
          <h1 className="text-4xl font-bold text-off-white mb-6">Disclaimer for Neffto Solution</h1>

          <p className="text-zinc-300 leading-relaxed">
            If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at <strong>burraqdispatchllc@gmail.com</strong>.
          </p>
          
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Disclaimers for Neffto Solution</h2>
          
          <p className="text-zinc-300 leading-relaxed mb-4">
            All the information on this website - <strong>nefftosolution@gmail.com</strong> - is published in good faith and for general information purpose only. <strong>Neffto Solution</strong> does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (<strong>Neffto Solution</strong>), is strictly at your own risk. <strong>Neffto Solution</strong> will not be liable for any losses and/or damages in connection with the use of our website.
          </p>
          
          <p className="text-zinc-300 leading-relaxed mb-4">
            From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
          </p>
          
          <p className="text-zinc-300 leading-relaxed mb-4">
            Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.
          </p>
          
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Consent</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
          
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Update</h2>
          <p className="text-zinc-300 leading-relaxed mb-4">Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
