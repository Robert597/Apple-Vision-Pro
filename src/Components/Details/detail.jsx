import Vision from '../Canvas/canvas';


const Detail = () => {
 
  return (
    <div className='Detail' >
     <div className='detailheader'>
        <h1>
          <span className="title_line">Introducing Apple Vision Pro:</span>
          <span className="title_line"><span className='colorText'>Apples</span> first Spatial Computer</span>
        </h1>
     </div>

        <Vision/>

<div className='float-Left float-left-1'>
<h1>Sound:</h1>
<p>Speakers positioned close to your ears deliver rich Spatial Audio while keeping you aware of your surroundings.</p>
</div>

<div className='float-Left float-left-2'>
<h1>Head-Band:</h1>
  <p>The Head Band provides cushioning, breathability, and stretch. The Fit Dial lets you adjust Vision Pro precisely to your head.</p>
</div>

<div className='float-right float-right-1'>
  <h1>Enclosure:</h1>
  <p>A singular piece of three-dimensionally formed laminated glass flows into an aluminum alloy frame that curves to wrap around your face.</p>
</div>

<div className='float-right float-right-2'>
  <h1>Light Seal:</h1>
<div className="blend">  <p>The Light Seal gently flexes to conform to your face, delivering a precise fit while blocking out stray light.</p>
</div>
</div>

<div className='float-right float-right-3'>
  <h1>POWER:</h1>
  <p>The external battery supports up to 2 hours of use, and all‑day use when plugged in.</p>
</div>



        <div className="detailBottom">
          <ul>
            <li>
              <h1>processor</h1>
              <p>Dual chip Processor</p>
            </li>
            <li>
              <h1>Display</h1>
              <p>4k</p>
            </li>
            <li>
              <h1>Battery</h1>
              <p>2hours</p>
            </li>
            <li>
              <h1>Security</h1>
              <p>Optic ID</p>
            </li>
            <li>
              <h1>Price</h1>
              <p>$3,499</p>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Detail;