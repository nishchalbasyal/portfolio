export const redirectToNewTab = (url) => {
     window.open(url, '_blank');
  };
  export const openEmailClient = () => {
    const recipient = 'basyalnishchal@example.com'; 
    const subject = 'Hello';  
    const body = 'This is the body of the email.'; 
  
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };