
const MobileNav = () => {
    
    
  return (
    <div className='mobile-nav-container'>
        
        <div className="nav-svg">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg1" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>
</div>

      
   

        <div className='menu'>
        <div className="primary-menu">
           <div className='nav-menu-container'>
                    <div class="menu-item">
                        <a href="#"><span className='menu-link'>Home</span></a>
                       
                    </div>

                    <div class="menu-item">
                        <a href="#"><span className='menu-link'>Design</span></a>
                       
                    </div>

                    <div class="menu-item">
                        <a href="#"><span className='menu-link'>Technology</span></a>
                       
                    </div>

                    <div class="menu-item">
                        <a href="#"><span className='menu-link' >Security</span></a>
                       
                    </div>
                  
                </div>
                </div>
                <div className='menu-footer'>
                    <p>Copyright &copy; 2023 Apple Inc.</p>
                    <button className='mobile-Button'>Notify Me</button>
                </div>
                
            </div>
       
    </div>
  )
}

export default MobileNav;