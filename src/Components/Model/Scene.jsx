/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 scene.gltf
*/

import { useEffect } from 'react'
import { useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { useThree } from '@react-three/fiber'

export function Model(props) {
  const { nodes, materials } = useGLTF('scene.gltf');

  let camera = useThree(state => state.camera);

  useEffect(() => {
    let mm = gsap.matchMedia();
    mm.add("(max-width: 820px)", () => {
      gsap.to(camera.position, {
        x: -10.974,
        y: 18.154,
        z: -0.0000053
      })
      gsap.to(camera.rotation, {
        x: -1.571,
        y: -0.544,
        z: -1.570
      })
    })
  
   let tl = gsap.timeline({
     scrollTrigger: {
       trigger: ".Detail",
       start: "top top",
       pin: true, 
       toggleActions: 'play none none reverse',
       ease: "power3.inOut"
     }
    });

   tl.to(".detailheader", {
      y: -200
    }).to(".detailBottom", {
      bottom: "-100%"
    }, "<")
    .set(".canvas", {top: 0})
    .to(camera.position, {
      x: 6.691,
      y: 10.891,
      z: 6.919
    })
    .to(camera.rotation, {
      x: -1.066,
      y: 0.117,
      z: 0.207
    }, "<")
    .from([".float-right-1", ".float-right-2", ".float-right-3"], {
      right: "-100%",
      stagger: 0.5
    })
    .to(camera.position, {
      x: -2.878,
      y: 7.371,
      z: 11.465
    }).to(camera.rotation, {
      x: -0.577,
      y: 0.284,
      z: 0.180
    }, "<")
    .to([".float-right-1", ".float-right-2", ".float-right-3"], {
      right: "-100%"
    }, "<")
    .from([".float-left-1", ".float-left-2"], {
      left: "-100%",
      stagger: "0.5"
    })
    
  
    
 
    
   
   }, []);
  
  return (
    <group {...props} dispose={null}>
      <group position={[-0.003, 0.047, -0.001]} rotation={[1.398, -0.379, 0.383]} scale={1}>
        <group scale={100}>
          <group rotation={[-1.391, 0.433, 0.282]}>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <mesh geometry={nodes.KDGFLTXqIYVblBJ.geometry} material={materials.FAJMtZQLswdvuhO} />
              <mesh geometry={nodes.obpGPOxscQRBrFJ.geometry} material={materials.VxpiigirruNOshp} />
              <mesh geometry={nodes.oSgdXMJmmhZQCzN.geometry} material={materials.FFhjkYvBaxmGeMa} />
              <mesh geometry={nodes.SCIkocbuHjjNTsA.geometry} material={materials.ZwEHHHBVBsIGFLj} />
              <mesh geometry={nodes.zzrLLSPyJZILSKY_0.geometry} material={materials.FFhjkYvBaxmGeMa} />
              <mesh geometry={nodes.ASkoYyVECEcxkYK_0.geometry} material={materials.AjnVirXQeiPgFmd} />
              <mesh geometry={nodes.EiAonKsxDEuXxGR_0.geometry} material={materials.xYIhbFReGzikXuj} />
              <mesh geometry={nodes.IiAxItryhcbgzau_0.geometry} material={materials.FEdJjbtHQhrLkPc} />
              <mesh geometry={nodes.IUxpbXmRrlbzURT_0.geometry} material={materials.msHgsHSWlHxyhfo} />
              <mesh geometry={nodes.khLVByUFFaNMLSm_0.geometry} material={materials.TapGHbYtpjcGEyh} />
              <mesh geometry={nodes.NIpSDFsUWUCOqdg_0.geometry} material={materials.XHmyiGBFGvanMAr} />
              <mesh geometry={nodes.sfTtJVBhwbMtpKx_0.geometry} material={materials.GvidsfHBLmyLFLj} />
              <mesh geometry={nodes.wMmLVLlxQNpoxwu_0.geometry} material={materials.gTQYGMoqLgKFhDN} />
              <mesh geometry={nodes.ZpjYSYThqJeqGFZ_0.geometry} material={materials.XHmyiGBFGvanMAr} />
              <mesh geometry={nodes.HpwVpTrPEytuUsV.geometry} material={materials.LCFAOHKyQkTpEQF} />
              <mesh geometry={nodes.IXuJiiCFSNvsmGR.geometry} material={materials.dFHMyPBpPqeTjiL} />
              <mesh geometry={nodes.jlIHzUMKnDyxeBA.geometry} material={materials.fBnoCDaWrdqLbCS} />
              <mesh geometry={nodes.YEoDlcPCcODxkbN.geometry} material={materials.JvGMyHWKpFKorez} />
              <mesh geometry={nodes.DesySQuVkxDlAlp_0.geometry} material={materials.DesySQuVkxDlAlp_0} />
              <mesh geometry={nodes.gRhjqEgpPdWDhFH.geometry} material={materials.lagreFFLwlIcTJO} />
              <mesh geometry={nodes.ltNMRLYerdBLGAz.geometry} material={materials.uCIAdpMWlBjnYvL} />
              <mesh geometry={nodes.SFnscRcMcAMgche.geometry} material={materials.svovjBXowKlgbKD} />
              <mesh geometry={nodes.swZapDaNVUxFTRq.geometry} material={materials.svovjBXowKlgbKD} />
              <mesh geometry={nodes.vxWoDJDXdJFnuSs.geometry} material={materials.oRyqyBedXgltlyh} />
              <mesh geometry={nodes.dcRUNTSwcozgcqO.geometry} material={materials.svovjBXowKlgbKD} />
              <mesh geometry={nodes.iweCqUsEZGYMjLj.geometry} material={materials.svovjBXowKlgbKD} />
              <mesh geometry={nodes.QWzDeiNdlTmLsaj.geometry} material={materials.oRyqyBedXgltlyh} />
              <mesh geometry={nodes.SqyAKiTAbYxFiMT_0.geometry} material={materials.DesySQuVkxDlAlp_0} />
              <mesh geometry={nodes.wBSkYahuvsEAlXg.geometry} material={materials.lagreFFLwlIcTJO} />
              <mesh geometry={nodes.yWGyQnAhCiOYRbg.geometry} material={materials.uCIAdpMWlBjnYvL} />
              <mesh geometry={nodes.CJWfACsrSRGJXyf.geometry} material={materials.QqwPOMufQnLHpVb} />
              <mesh geometry={nodes.glyogFqKCZxZDOT.geometry} material={materials.lagreFFLwlIcTJO} />
              <mesh geometry={nodes.ZresYrVJWrzYduC.geometry} material={materials.lagreFFLwlIcTJO} />
              <mesh geometry={nodes.AWbZOEfuRQAvVTP.geometry} material={materials.XNhEODEcVemrRSu} />
              <mesh geometry={nodes.DxrCMpAwhniUBfl.geometry} material={materials.pMiARQLBeNgKOAx} />
              <mesh geometry={nodes.IEooweRjLNVZPqx.geometry} material={materials.NJTstBdwEqVPDBG} />
              <mesh geometry={nodes.SRKTTAWIPJHVYpM.geometry} material={materials.UvuKGGVdlOxVUeA} />
              <mesh geometry={nodes.vIfAfiWawaJWGqD.geometry} material={materials.pMiARQLBeNgKOAx} />
              <mesh geometry={nodes.zOojMjLvernppMe.geometry} material={materials.ySrzecxrjVirfze} />
              <mesh geometry={nodes.gCMrtHacMMbsVtY.geometry} material={materials.hzzIZvnSVXHRIpk} />
              <mesh geometry={nodes.yoKCFECQuCmdFPt.geometry} material={materials.LrbPxjZrLaPVhbL} />
              <mesh geometry={nodes.cTCOfMLBXoYxhne.geometry} material={materials.NHDhsOMHMgThpCN} />
              <mesh geometry={nodes.EbXtcbKMemPvJWo_0.geometry} material={materials.NHDhsOMHMgThpCN} />
              <mesh geometry={nodes.MeGztcuEjPuJXZJ.geometry} material={materials.gTQYGMoqLgKFhDN} />
              <mesh geometry={nodes.tkgmgHsnFBmdriF.geometry} material={materials.NLXCMSpYzHeRKCy} />
              <mesh geometry={nodes.uLmdthzQafdZhtY.geometry} material={materials.HjiVKkmzDRBQwcd} />
              <mesh geometry={nodes.YloUIBCKBFoZsyn.geometry} material={materials.nirjontYTAixgEJ} />
              <mesh geometry={nodes.NeorRpMRORinszX.geometry} material={materials.OcjoBBhHkqmGEeg} />
              <mesh geometry={nodes.EiWAFcSpgUbRfLC.geometry} material={materials.HjiVKkmzDRBQwcd} />
              <mesh geometry={nodes.LttGJckIvzcXqfr.geometry} material={materials.nirjontYTAixgEJ} />
              <mesh geometry={nodes.tNyidXzsanoTPLC.geometry} material={materials.NLXCMSpYzHeRKCy} />
              <mesh geometry={nodes.ttGMShCisdkbKAx_0.geometry} material={materials.NHDhsOMHMgThpCN} />
              <mesh geometry={nodes.xyBlAAQKYgueyAl.geometry} material={materials.gTQYGMoqLgKFhDN} />
              <mesh geometry={nodes.jjJIZDrSILBzxpu.geometry} material={materials.CzTcyZGBTOTEuIC} />
              <mesh geometry={nodes.cTBEkXCWkvHrohb.geometry} material={materials.LlnrRvRtBSKKJtZ} />
              <mesh geometry={nodes.jmyvTSbhlLzcdVy.geometry} material={materials.IUXXlUlgvhvFPzz} />
              <mesh geometry={nodes.vyzuKbgYqRUloHN.geometry} material={materials.gFHmZYZAcTzegfV} />
              <mesh geometry={nodes.BYzAzdYRSKOXgvW.geometry} material={materials.gFHmZYZAcTzegfV} />
              <mesh geometry={nodes.COzyZGNXWoVuulX.geometry} material={materials.LlnrRvRtBSKKJtZ} />
              <mesh geometry={nodes.txsLdslKWGeEPTt.geometry} material={materials.IUXXlUlgvhvFPzz} />
              <mesh geometry={nodes.BDnAUbPNZRAcuFf_0.geometry} material={materials.RWqkxBAMyYvCfAW} />
              <mesh geometry={nodes.gImAVESIoCwjazi.geometry} material={materials.lZazJJAwgeaFFzW} />
              <mesh geometry={nodes.hciIxHvmXHAqkAZ_0.geometry} material={materials.CzTcyZGBTOTEuIC} />
              <mesh geometry={nodes.IVshDKAKUOpgoit_0.geometry} material={materials.hQMaJbjPDPOUdry} />
              <mesh geometry={nodes.jZNSaLYonRzXGgY_0.geometry} material={materials.lZazJJAwgeaFFzW} />
              <mesh geometry={nodes.syRtTlwvwBGbycm_0.geometry} material={materials.lZazJJAwgeaFFzW} />
              <mesh geometry={nodes.xpJqyjMVpSjpaIw.geometry} material={materials.CzTcyZGBTOTEuIC} />
              <mesh geometry={nodes.aTcrhiBFDpmfQRb.geometry} material={materials.kPwwriYXUEalYIj} />
              <mesh geometry={nodes.gqNMwQGbnhvlVYE.geometry} material={materials.lZazJJAwgeaFFzW} />
              <mesh geometry={nodes.npnXECWbsAmgBIA.geometry} material={materials.CzTcyZGBTOTEuIC} />
              <mesh geometry={nodes.lntlgnzyayryFPp_0.geometry} material={materials.WicotZnvNvRZKUL} />
              <mesh geometry={nodes.GlqEjTaipLhaVeX.geometry} material={materials.sWxIuDoQFWtTiiB} />
              <mesh geometry={nodes.PelEjfQtfCcokND.geometry} material={materials.hjAUwLwBADKDzhk} />
              <mesh geometry={nodes.utXOMjnivVWqOqb.geometry} material={materials.GevKBvqYjYnmUWP} />
              <mesh geometry={nodes.UXLjllnBycNoaYM_0.geometry} material={materials.FOugkDgsmvxAjLB} />
              <mesh geometry={nodes.AxIDAohNCLUnqHZ_0.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.gyYovHxVbMYfNIs_0.geometry} material={materials.CzTcyZGBTOTEuIC} />
              <mesh geometry={nodes.sPvEwoSuAuchoUX.geometry} material={materials.HAvYQJgmRpVYpqr} />
              <mesh geometry={nodes.EohuhBblivKlgiW.geometry} material={materials.CzTcyZGBTOTEuIC} />
              <mesh geometry={nodes.zvEZknZipHczcSh.geometry} material={materials.snsykSygkWSDIlk} />
              <mesh geometry={nodes.NnqtZkGomSmVeRm_0.geometry} material={materials.hjAUwLwBADKDzhk} />
              <mesh geometry={nodes.KYYFwKltpNVwIZF.geometry} material={materials.GevKBvqYjYnmUWP} />
              <mesh geometry={nodes.PCWXKVLQMLFXuiB.geometry} material={materials.CzTcyZGBTOTEuIC} />
              <mesh geometry={nodes.wNTsFMcHtcwMFzu_0.geometry} material={materials.hjAUwLwBADKDzhk} />
              <mesh geometry={nodes.bWGTZHjKQZbtiyV.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.ddBlCIbantllDIr.geometry} material={materials.kEEsgKvKWifaKeg} />
              <mesh geometry={nodes.fAUXGIjKanMeYea.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.GCtZYOQqcgvnxPi.geometry} material={materials.kEEsgKvKWifaKeg} />
              <mesh geometry={nodes.GqNvIoTBBTlyOqi_0.geometry} material={materials.NLAQCwOxsrAPIlV} />
              <mesh geometry={nodes.ItWUvMBTKMADVpz.geometry} material={materials.kEEsgKvKWifaKeg} />
              <mesh geometry={nodes.jEXLbqFcYStQaQF.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.MeigMDdpfMwthLL.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.nrLqYYObKenvfDT.geometry} material={materials.nctcFIvFhZfKDLQ} />
              <mesh geometry={nodes.wPwRzjPYjmrlEXX.geometry} material={materials.kEEsgKvKWifaKeg} />
              <mesh geometry={nodes.HsgHlwEylVMvWpH.geometry} material={materials.kEEsgKvKWifaKeg} />
              <mesh geometry={nodes.hXjngMziGWeRsLG.geometry} material={materials.kEEsgKvKWifaKeg} />
              <mesh geometry={nodes.JlZUAmaWBjQdvyx.geometry} material={materials.nctcFIvFhZfKDLQ} />
              <mesh geometry={nodes.kpOufxRkGzbfIDK.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.loKnjuoUUqCXjyh.geometry} material={materials.kEEsgKvKWifaKeg} />
              <mesh geometry={nodes.LRMIvaRwBWdAizA_0.geometry} material={materials.NLAQCwOxsrAPIlV} />
              <mesh geometry={nodes.mYnwxJZquqykmUm.geometry} material={materials.kEEsgKvKWifaKeg} />
              <mesh geometry={nodes.RNQzvxThOUKSCWj.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.vJNXctsYfhEHtrV.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.XyedbPFDxeHwCHk.geometry} material={materials.svoioOWqcyuDHRV} />
              <mesh geometry={nodes.KFVogPQUiddsMSf.geometry} material={materials.CzTcyZGBTOTEuIC} />
              <mesh geometry={nodes.MspSzkAWtrSNgSu_0.geometry} material={materials.GevKBvqYjYnmUWP} />
              <mesh geometry={nodes.ZMUGAWqZYOylVJZ.geometry} material={materials.hjAUwLwBADKDzhk} />
              <mesh geometry={nodes.DxigZplXoWuQGiB.geometry} material={materials.snsykSygkWSDIlk} />
              <mesh geometry={nodes.TDKyRfvojNkpooB.geometry} material={materials.CzTcyZGBTOTEuIC} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('scene.gltf')
