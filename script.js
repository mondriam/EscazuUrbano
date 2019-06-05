TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "adjacentPanoramas": [
   {
    "panorama": {
     "adjacentPanoramas": [
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4",
          "backwardYaw": 20.93,
          "class": "AdjacentPanorama",
          "yaw": 177.56,
          "distance": 1
         }
        ],
        "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 11.59.40.22",
        "hfovMax": 120,
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_F15EAAE5_FAFB_A8C6_41AA_44AF8124BB6C",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4, this.camera_248FCC95_290D_53F1_41C3_9624AD59B9B0); this.mainPlayList.set('selectedIndex', 7)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_0_HS_0_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 177.56,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -1.64,
              "hfov": 8.79
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_0_HS_0_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -1.64,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 177.56,
              "hfov": 8.79
             }
            ]
           },
           {
            "id": "overlay_EAD96647_FB34_7BC2_41C3_AF26CC6B4878",
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": 40.1,
            "bleaching": 0.7,
            "yaw": 51.24
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_F24D939B_FB7E_D434_41A7_759DB6EB8BE4",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_0_HS_1_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -79.51,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -1.44,
              "hfov": 8.79
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_0_HS_1_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -1.44,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -79.51,
              "hfov": 8.79
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_t.jpg",
        "mapLocations": [
         {
          "y": 97.31,
          "angle": -16.76,
          "class": "PanoramaMapLocation",
          "map": {
           "scaleMode": "fit_inside",
           "image": {
            "levels": [
             {
              "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B.png",
              "height": 800,
              "class": "ImageResourceLevel",
              "width": 431
             },
             {
              "grayscale": true,
              "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_lq.png",
              "height": 400,
              "class": "ImageResourceLevel",
              "width": 215
             }
            ],
            "class": "ImageResource"
           },
           "label": "Master-Plan-Map",
           "thumbnailUrl": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_t.png",
           "overlays": [
            {
             "image": {
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_0.png",
                 "height": 24,
                 "class": "ImageResourceLevel",
                 "width": 25
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 351.23,
              "height": 25,
              "y": 678.02,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_BD09ACE0_AE30_3F13_41BD_5FFF039982FA",
             "class": "AreaHotspotMapOverlay",
             "useHandCursor": true,
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 0)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "rollOverDisplay": true,
             "map": {
              "height": 25,
              "y": 678.02,
              "offsetX": 0,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_0_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 351.23
             }
            },
            {
             "image": {
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_1.png",
                 "height": 24,
                 "class": "ImageResourceLevel",
                 "width": 25
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 339.92,
              "height": 25,
              "y": 639.55,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_BDD12C0E_AE31_FF2F_41D8_E01744C9245E",
             "class": "AreaHotspotMapOverlay",
             "useHandCursor": true,
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 7)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "rollOverDisplay": true,
             "map": {
              "height": 25,
              "y": 639.55,
              "offsetX": 0,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_1_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 339.92
             }
            },
            {
             "image": {
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_2.png",
                 "height": 24,
                 "class": "ImageResourceLevel",
                 "width": 25
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 350.5,
              "height": 25,
              "y": 595.76,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_BDD572A2_AE30_EB17_41E2_013B4E1D1816",
             "class": "AreaHotspotMapOverlay",
             "useHandCursor": true,
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 8)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "rollOverDisplay": true,
             "map": {
              "height": 25,
              "y": 595.76,
              "offsetX": 0,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_2_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 350.5
             }
            },
            {
             "image": {
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_3.png",
                 "height": 24,
                 "class": "ImageResourceLevel",
                 "width": 28
                }
               ],
               "class": "ImageResource"
              },
              "width": 28.39,
              "x": 377.65,
              "height": 25,
              "y": 600.85,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_BDFDB098_AE33_E732_41E2_82C9C3FBBDEC",
             "class": "AreaHotspotMapOverlay",
             "useHandCursor": true,
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 3)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "rollOverDisplay": true,
             "map": {
              "height": 25,
              "y": 600.85,
              "offsetX": 0,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_3_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 14
                }
               ],
               "class": "ImageResource"
              },
              "width": 28.39,
              "x": 377.65
             }
            },
            {
             "image": {
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_4.png",
                 "height": 24,
                 "class": "ImageResourceLevel",
                 "width": 25
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 381.39,
              "height": 25,
              "y": 647.52,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_BAAAD66C_AE30_6B13_41E4_41C4AF787B88",
             "class": "AreaHotspotMapOverlay",
             "useHandCursor": true,
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 2)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "rollOverDisplay": true,
             "map": {
              "height": 25,
              "y": 647.52,
              "offsetX": 0,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_4_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 381.39
             }
            },
            {
             "image": {
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_5.png",
                 "height": 25,
                 "class": "ImageResourceLevel",
                 "width": 25
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 216.01,
              "height": 25,
              "y": 84.81,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_B85AADD9_AE30_7935_418C_49774A3F1323",
             "class": "AreaHotspotMapOverlay",
             "useHandCursor": true,
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 9)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "rollOverDisplay": true,
             "map": {
              "height": 25,
              "y": 84.81,
              "offsetX": 0,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_5_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 216.01
             }
            },
            {
             "image": {
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_6.png",
                 "height": 25,
                 "class": "ImageResourceLevel",
                 "width": 25
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 264.33,
              "height": 25,
              "y": 658.61,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_BAF4F184_AE30_2913_41D7_D5320C010656",
             "class": "AreaHotspotMapOverlay",
             "useHandCursor": true,
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 10)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "rollOverDisplay": true,
             "map": {
              "height": 25,
              "y": 658.61,
              "offsetX": 0,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_6_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 264.33
             }
            },
            {
             "image": {
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_7.png",
                 "height": 25,
                 "class": "ImageResourceLevel",
                 "width": 25
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 180.82,
              "height": 25,
              "y": 638.76,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_BB8BD87E_AE30_27EF_41CD_3E50E37DC6C9",
             "class": "AreaHotspotMapOverlay",
             "useHandCursor": true,
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 11)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "rollOverDisplay": true,
             "map": {
              "height": 25,
              "y": 638.76,
              "offsetX": 0,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_7_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 180.82
             }
            },
            {
             "image": {
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_8.png",
                 "height": 25,
                 "class": "ImageResourceLevel",
                 "width": 25
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 88.32,
              "height": 25,
              "y": 264.16,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_B861AF51_AE50_7935_41D1_7279F4D9342F",
             "class": "AreaHotspotMapOverlay",
             "useHandCursor": true,
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 12)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "rollOverDisplay": true,
             "map": {
              "height": 25,
              "y": 264.16,
              "offsetX": 0,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_8_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 88.32
             }
            },
            {
             "image": {
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_9.png",
                 "height": 25,
                 "class": "ImageResourceLevel",
                 "width": 25
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 372.96,
              "height": 25,
              "y": 575.73,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_9B8B69CB_BD7D_6BCF_41D2_C3E1DE217D96",
             "class": "AreaHotspotMapOverlay",
             "useHandCursor": true,
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 4)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "rollOverDisplay": true,
             "map": {
              "height": 25,
              "y": 575.73,
              "offsetX": 0,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_9_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 372.96
             }
            },
            {
             "image": {
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_10.png",
                 "height": 25,
                 "class": "ImageResourceLevel",
                 "width": 25
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 126.34,
              "height": 25,
              "y": 215.9,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_9A15731C_BD7D_D84A_41E0_DA389A2E262F",
             "class": "AreaHotspotMapOverlay",
             "useHandCursor": true,
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 6)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "rollOverDisplay": true,
             "map": {
              "height": 25,
              "y": 215.9,
              "offsetX": 0,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_10_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 126.34
             }
            },
            {
             "image": {
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_11.png",
                 "height": 25,
                 "class": "ImageResourceLevel",
                 "width": 25
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 385.8,
              "height": 25,
              "y": 609.9,
              "class": "HotspotMapOverlayImage"
             },
             "id": "overlay_E8BB89E7_FB2C_68C2_41EC_D51790EAE183",
             "class": "AreaHotspotMapOverlay",
             "useHandCursor": true,
             "areas": [
              {
               "mapColor": "#FF0000",
               "click": "this.mainPlayList.set('selectedIndex', 5)",
               "class": "HotspotMapOverlayArea"
              }
             ],
             "rollOverDisplay": true,
             "map": {
              "height": 25,
              "y": 609.9,
              "offsetX": 0,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "image": {
               "levels": [
                {
                 "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_11_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12
                }
               ],
               "class": "ImageResource"
              },
              "width": 25,
              "x": 385.8
             }
            }
           ],
           "fieldOfViewOverlayInsideColor": "#000000",
           "fieldOfViewOverlayInsideOpacity": 0.4,
           "class": "Map",
           "fieldOfViewOverlayOutsideColor": "#000000",
           "minimumZoomFactor": 0.5,
           "maximumZoomFactor": 1.2,
           "fieldOfViewOverlayOutsideOpacity": 0,
           "fieldOfViewOverlayRadiusScale": 0.2,
           "initialZoomFactor": 1,
           "width": 431,
           "height": 800,
           "id": "map_BACA8E9B_AE30_7B35_41C7_293947DB728B"
          },
          "x": 228.51
         }
        ],
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4"
       },
       "backwardYaw": 177.56,
       "class": "AdjacentPanorama",
       "yaw": 20.93,
       "distance": 1
      },
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4",
          "backwardYaw": -74.27,
          "class": "AdjacentPanorama",
          "yaw": 86.8,
          "distance": 1
         },
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2",
             "backwardYaw": -42.56,
             "class": "AdjacentPanorama",
             "yaw": 129.31,
             "distance": 1
            },
            {
             "panorama": {
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540",
                "backwardYaw": -6.15,
                "class": "AdjacentPanorama",
                "yaw": -160.06,
                "distance": 1
               },
               {
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E",
                   "backwardYaw": 84.72,
                   "class": "AdjacentPanorama",
                   "yaw": 166.66,
                   "distance": 1
                  }
                 ],
                 "label": "Parque",
                 "hfovMax": 120,
                 "partial": false,
                 "class": "Panorama",
                 "hfov": 360,
                 "vfov": 180,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_F69CBB99_FAF4_A94E_41A4_C04758BBB7E7",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E, this.camera_2453AC45_290D_5351_41AD_8407B90E5523); this.mainPlayList.set('selectedIndex', 12)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_0_HS_0_0.png",
                          "height": 146,
                          "class": "ImageResourceLevel",
                          "width": 146
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 166.66,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -5.89,
                       "hfov": 8.74
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_0_HS_0_0_0_map.gif",
                          "height": 73,
                          "class": "ImageResourceLevel",
                          "width": 73
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -5.89,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 166.66,
                       "hfov": 8.74
                      }
                     ]
                    },
                    {
                     "id": "overlay_EADD5BB0_FB2B_A95E_41EE_695E7F180582",
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "pitch": 37.81,
                     "bleaching": 0.7,
                     "yaw": 18.1
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_r.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "front": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_f.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_b.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "top": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_u.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "bottom": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_d.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "left": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_t.jpg",
                 "mapLocations": [
                  {
                   "y": 228.4,
                   "angle": 39.98,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                   "x": 138.84
                  }
                 ],
                 "hfovMin": 60,
                 "pitch": 0,
                 "id": "panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2"
                },
                "backwardYaw": 166.66,
                "class": "AdjacentPanorama",
                "yaw": 84.72,
                "distance": 1
               }
              ],
              "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.03.02.47",
              "hfovMax": 120,
              "partial": false,
              "class": "Panorama",
              "hfov": 360,
              "vfov": 180,
              "frames": [
               {
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_F6CD05CC_FAF4_58C6_41ED_9DEE9357A5E0",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540, this.camera_24284BCA_290D_5553_4195_FA38FB3FE265); this.mainPlayList.set('selectedIndex', 11)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_0_HS_1_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -160.06,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -2.97,
                    "hfov": 8.78
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_0_HS_1_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -2.97,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -160.06,
                    "hfov": 8.78
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_F672A53E_FAF7_F942_41B7_9CC67FCD111C",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2, this.camera_24233BD5_290D_5571_41C1_F315EF4AAB36); this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_0_HS_0_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 84.72,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -10.19,
                    "hfov": 8.65
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_0_HS_0_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -10.19,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 84.72,
                    "hfov": 8.65
                   }
                  ]
                 },
                 {
                  "id": "overlay_EADDD248_FB2B_BBCE_41EB_A34BF0C55F31",
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "pitch": 30.95,
                  "bleaching": 0.7,
                  "yaw": 83.24
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_F2EC0A9D_FB7F_542C_41C1_13F7DE92A3A9",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_0_HS_2_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 138.85,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -0.91,
                    "hfov": 8.79
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_0_HS_2_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -0.91,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 138.85,
                    "hfov": 8.79
                   }
                  ]
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_t.jpg",
              "mapLocations": [
               {
                "y": 276.66,
                "angle": -26.2,
                "class": "PanoramaMapLocation",
                "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                "x": 100.82
               }
              ],
              "hfovMin": 60,
              "pitch": 0,
              "id": "panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E"
             },
             "backwardYaw": -160.06,
             "class": "AdjacentPanorama",
             "yaw": -6.15,
             "distance": 1
            }
           ],
           "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.02.03.77",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_F10C100D_FAF5_F746_41E6_DC2260F5ED7B",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E, this.camera_2458FC3A_290D_5333_417D_4429ACAA5A36); this.mainPlayList.set('selectedIndex', 12)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_0_HS_1_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -6.15,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -3.86,
                 "hfov": 8.77
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_0_HS_1_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -3.86,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -6.15,
                 "hfov": 8.77
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_F6ADE0A9_FAF4_574E_41EA_579E6B5B20B1",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2, this.camera_2444BC30_290D_52CF_41A8_A497CA0DEB1C); this.mainPlayList.set('selectedIndex', 10)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 129.31,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -4.85,
                 "hfov": 8.76
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -4.85,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 129.31,
                 "hfov": 8.76
                }
               ]
              },
              {
               "id": "overlay_EADA183F_FB34_5742_41B1_6D7BF53A0B0E",
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 38.95,
               "bleaching": 0.7,
               "yaw": 61.9
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_F2E712B8_FB7D_3474_41D4_33D977113C94",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 1)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_0_HS_2_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 72.01,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -1.84,
                 "hfov": 8.78
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_0_HS_2_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -1.84,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 72.01,
                 "hfov": 8.78
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_t.jpg",
           "mapLocations": [
            {
             "y": 651.26,
             "angle": -6.48,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "x": 193.32
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540"
          },
          "backwardYaw": 129.31,
          "class": "AdjacentPanorama",
          "yaw": -42.56,
          "distance": 1
         }
        ],
        "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.01.13.34",
        "hfovMax": 120,
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_F139B038_FAF4_574E_41AF_A361E4F8C22E",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4, this.camera_25FB8B48_290D_555F_41B9_F3230A4917AF); this.mainPlayList.set('selectedIndex', 7)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_0_HS_1_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 86.8,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -8.4,
              "hfov": 8.69
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_0_HS_1_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -8.4,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 86.8,
              "hfov": 8.69
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_F6E5D31C_FAF4_B946_41D5_203C3D6E1EE1",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540, this.camera_25FFAB52_290D_5573_417B_D7EC18146A9D); this.mainPlayList.set('selectedIndex', 11)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_0_HS_0_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -42.56,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -6.28,
              "hfov": 8.74
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_0_HS_0_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -6.28,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -42.56,
              "hfov": 8.74
             }
            ]
           },
           {
            "id": "overlay_EADD3F4E_FB34_69C2_41ED_2555343081FA",
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": 36.67,
            "bleaching": 0.7,
            "yaw": 68.76
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_t.jpg",
        "mapLocations": [
         {
          "y": 671.11,
          "angle": -16.6,
          "class": "PanoramaMapLocation",
          "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
          "x": 276.83
         }
        ],
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2"
       },
       "backwardYaw": 86.8,
       "class": "AdjacentPanorama",
       "yaw": -74.27,
       "distance": 1
      },
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03",
             "backwardYaw": 34.2,
             "class": "AdjacentPanorama",
             "yaw": 160.31,
             "distance": 1
            }
           ],
           "label": "Gym",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_F004434C_FAFC_59C6_41D1_56799DCF0478",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03, this.camera_24402C26_290D_52D3_41BD_C26D3CAA5B41); this.mainPlayList.set('selectedIndex', 8)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 160.31,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -19.29,
                 "hfov": 8.3
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -19.29,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 160.31,
                 "hfov": 8.3
                }
               ]
              },
              {
               "id": "overlay_EADAA97D_FB34_E9C6_41E7_C446873188F7",
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 49.24,
               "bleaching": 0.7,
               "yaw": 39.81
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_t.jpg",
           "mapLocations": [
            {
             "y": 613.35,
             "angle": 130.38,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "x": 391.85
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42"
          },
          "backwardYaw": 160.31,
          "class": "AdjacentPanorama",
          "yaw": 34.2,
          "distance": 1
         },
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03",
             "backwardYaw": 84.25,
             "class": "AdjacentPanorama",
             "yaw": -178.29,
             "distance": 1
            },
            {
             "panorama": {
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_FD5D0513_FAEC_5942_41E5_388A78329396",
                "backwardYaw": -158.07,
                "class": "AdjacentPanorama",
                "yaw": 10.74,
                "distance": 1
               }
              ],
              "label": "Eventos",
              "hfovMax": 120,
              "partial": false,
              "class": "Panorama",
              "hfov": 360,
              "vfov": 180,
              "frames": [
               {
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_F166FAA9_FAFC_AB4E_41EE_8D078BC96B18",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD5D0513_FAEC_5942_41E5_388A78329396, this.camera_241D7BA8_290D_55DF_41B9_15322A16921D); this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_0_HS_0_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 10.74,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -7.81,
                    "hfov": 8.71
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_0_HS_0_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -7.81,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 10.74,
                    "hfov": 8.71
                   }
                  ]
                 },
                 {
                  "id": "overlay_EADD2066_FB34_57C2_41D9_AEE597EB5A74",
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "pitch": 48.1,
                  "bleaching": 0.7,
                  "yaw": -85.14
                 },
                 {
                  "id": "overlay_EAD1E3CD_FB34_58C1_41D5_0F05EBB9C9F1",
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "pitch": 48.48,
                  "bleaching": 0.7,
                  "yaw": 89.71
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_t.jpg",
              "mapLocations": [
               {
                "y": 622.4,
                "angle": 156,
                "class": "PanoramaMapLocation",
                "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                "x": 398.3
               }
              ],
              "hfovMin": 60,
              "pitch": 0,
              "id": "panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A"
             },
             "backwardYaw": 10.74,
             "class": "AdjacentPanorama",
             "yaw": -158.07,
             "distance": 1
            }
           ],
           "label": "Piscina",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_F1E62D3A_FAFC_A942_41D4_91EF77F30373",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03, this.camera_24118BB3_290D_5531_41A8_C167436C8C5D); this.mainPlayList.set('selectedIndex', 8)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_0_HS_2_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -178.29,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 7.18,
                 "hfov": 8.72
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_0_HS_2_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 7.18,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -178.29,
                 "hfov": 8.72
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_F140AA1E_FAFD_EB42_41BF_36DCBEC3249D",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A, this.camera_24142BBF_290D_5531_41A7_103356C02A17); this.mainPlayList.set('selectedIndex', 5)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_0_HS_1_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -158.07,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -4.3,
                 "hfov": 8.76
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_0_HS_1_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -4.3,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -158.07,
                 "hfov": 8.76
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_F4B47A53_FB2B_ABC2_41B1_DAFF4C26904C",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.showPopupPanoramaOverlay(this.popup_EB21489D_FB2C_B746_41D8_3A0D763EA5AF, {'pressedBorderColor':'#FFFFFF','iconLineWidth':5,'pressedBorderSize':0,'rollOverIconHeight':60,'iconColor':'#FFFFFF','rollOverBackgroundColor':['#DDDDDD','#000000','#000000'],'paddingRight':5,'rollOverBorderSize':0,'rollOverIconWidth':60,'backgroundColorDirection':'vertical','paddingTop':5,'rollOverBorderColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','iconHeight':60,'iconWidth':60,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'rollOverBackgroundColorRatios':[0,0,1],'pressedIconHeight':60,'backgroundColorRatios':[0,0,1],'backgroundColor':['#DDDDDD','#000000','#000000'],'borderColor':'#FFFFFF','pressedBackgroundColorRatios':[0,0,1],'pressedIconWidth':60,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','borderSize':0,'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#000000','#000000']}, this.ImageResource_EA3E620C_FB3B_FB46_41DB_4A6CBC3FC317, null, null, null, null, false)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_0_HS_0_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 10.04,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 2.15,
                 "hfov": 6.59
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_0_HS_0_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 2.15,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 10.04,
                 "hfov": 6.59
                }
               ]
              },
              {
               "image": {
                "levels": [
                 {
                  "url": "media/popup_EB21489D_FB2C_B746_41D8_3A0D763EA5AF_0_3.jpg",
                  "height": 288,
                  "class": "ImageResourceLevel",
                  "width": 512
                 },
                 {
                  "url": "media/popup_EB21489D_FB2C_B746_41D8_3A0D763EA5AF_0_2.jpg",
                  "height": 576,
                  "class": "ImageResourceLevel",
                  "width": 1024
                 }
                ],
                "class": "ImageResource"
               },
               "showDuration": 500,
               "hideDuration": 500,
               "hfov": 6.59,
               "popupMaxHeight": "95%",
               "rotationY": 0,
               "rotationZ": 0,
               "rotationX": 0,
               "id": "popup_EB21489D_FB2C_B746_41D8_3A0D763EA5AF",
               "class": "PopupPanoramaOverlay",
               "popupMaxWidth": "95%",
               "showEasing": "cubic_in",
               "pitch": 2.15,
               "hideEasing": "cubic_out",
               "yaw": 10.04
              },
              {
               "id": "overlay_EADA863D_FB34_BB46_41E7_153CC2ED3FED",
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 35.52,
               "bleaching": 0.7,
               "yaw": -102.67
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_t.jpg",
           "mapLocations": [
            {
             "y": 660.02,
             "angle": 151.43,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "x": 393.89
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_FD5D0513_FAEC_5942_41E5_388A78329396"
          },
          "backwardYaw": -178.29,
          "class": "AdjacentPanorama",
          "yaw": 84.25,
          "distance": 1
         },
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03",
             "backwardYaw": -33.85,
             "class": "AdjacentPanorama",
             "yaw": -10.75,
             "distance": 1
            }
           ],
           "label": "Co-Working",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_F01F1B4E_FAFF_A9C2_41E0_A280E6F6535F",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03, this.camera_25C41AE5_290D_5751_41BE_B629A0044304); this.mainPlayList.set('selectedIndex', 8)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -10.75,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -19.37,
                 "hfov": 8.29
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -19.37,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -10.75,
                 "hfov": 8.29
                }
               ]
              },
              {
               "id": "overlay_EADCD85D_FB34_D7C6_41C5_6AD05A6E8C6D",
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 54.95,
               "bleaching": 0.7,
               "yaw": -54.29
              },
              {
               "id": "overlay_EAD0FC75_FB34_AFC6_41E8_765EAF856A7F",
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 48.86,
               "bleaching": 0.7,
               "yaw": 93.14
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_t.jpg",
           "mapLocations": [
            {
             "y": 588.23,
             "angle": 245.2,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "x": 385.46
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A"
          },
          "backwardYaw": -10.75,
          "class": "AdjacentPanorama",
          "yaw": -33.85,
          "distance": 1
         },
         {
          "panorama": "this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4",
          "backwardYaw": 70.16,
          "class": "AdjacentPanorama",
          "yaw": 145.14,
          "distance": 1
         }
        ],
        "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 11.55.17.49",
        "hfovMax": 120,
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_F08EF5AF_FAFC_7942_41D4_369497152EAD",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4, this.camera_247F9C6C_290D_5357_419F_9E48B5E6727E); this.mainPlayList.set('selectedIndex', 7)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_3_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 145.14,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -4.42,
              "hfov": 6.57
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_3_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -4.42,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 145.14,
              "hfov": 6.57
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_F04D250A_FAFC_B942_41CA_F10FA99CEC62",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5D0513_FAEC_5942_41E5_388A78329396, this.camera_246DAC59_290D_5371_419A_02FDA261A97D); this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_2_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 84.25,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -19.48,
              "hfov": 6.21
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_2_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -19.48,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 84.25,
              "hfov": 6.21
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_F1FC66E5_FAFD_F8C6_41EC_F2EFB846DC53",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42, this.camera_24558C4F_290D_5351_41A3_FA3C08E69D58); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_1_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 34.2,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -18.42,
              "hfov": 8.34
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_1_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -18.42,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 34.2,
              "hfov": 8.34
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_F1F69C27_FAFC_6F42_41D4_54B30FC3C2F3",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A, this.camera_2466DC62_290D_5353_41B9_E443C700EA95); this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_0_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -33.85,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -24.21,
              "hfov": 8.02
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_0_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -24.21,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -33.85,
              "hfov": 8.02
             }
            ]
           },
           {
            "id": "overlay_EAD20A1C_FB34_EB46_41E0_64CBDD2BDCCD",
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": 24.48,
            "bleaching": 0.7,
            "yaw": -42.48
           },
           {
            "id": "overlay_EAD66EDB_FB34_E8C2_41DE_2D6BAB569B55",
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": 24.48,
            "bleaching": 0.7,
            "yaw": 30.29
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_F2D82B7B_FB7D_34EB_41E7_2C92A9EB3B6B",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_4_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -158.44,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -1.22,
              "hfov": 8.79
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_4_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -1.22,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -158.44,
              "hfov": 8.79
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_t.jpg",
        "mapLocations": [
         {
          "y": 608.26,
          "angle": 64.36,
          "class": "PanoramaMapLocation",
          "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
          "x": 363
         }
        ],
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03"
       },
       "backwardYaw": 145.14,
       "class": "AdjacentPanorama",
       "yaw": 70.16,
       "distance": 1
      },
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C",
             "backwardYaw": 54.74,
             "class": "AdjacentPanorama",
             "yaw": 4.86,
             "distance": 1
            },
            {
             "panorama": {
              "adjacentPanoramas": [
               {
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E",
                      "backwardYaw": 133.17,
                      "class": "AdjacentPanorama",
                      "yaw": -163.85,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF",
                         "backwardYaw": -66.04,
                         "class": "AdjacentPanorama",
                         "yaw": 142.22,
                         "distance": 1
                        }
                       ],
                       "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.14.32.38",
                       "hfovMax": 120,
                       "partial": false,
                       "class": "Panorama",
                       "hfov": 360,
                       "vfov": 180,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "id": "overlay_F4500239_FB15_BB4E_41EC_E0971AA226F4",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF, this.camera_25C64ADA_290D_5773_41C3_8E316B12C735); this.mainPlayList.set('selectedIndex', 20)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_0_HS_0_0.png",
                                "height": 146,
                                "class": "ImageResourceLevel",
                                "width": 146
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": 142.22,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -35.05,
                             "hfov": 7.19
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_0_HS_0_0_0_map.gif",
                                "height": 73,
                                "class": "ImageResourceLevel",
                                "width": 73
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -35.05,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 142.22,
                             "hfov": 7.19
                            }
                           ]
                          },
                          {
                           "id": "overlay_EADD6495_FB2C_FF46_41E9_F08B7DC24D6B",
                           "class": "LensFlarePanoramaOverlay",
                           "bleachingDistance": 0.4,
                           "pitch": 51.52,
                           "bleaching": 0.7,
                           "yaw": 22.67
                          },
                          {
                           "id": "overlay_EADAD88C_FB2C_F747_41E2_2967C5571FFE",
                           "class": "LensFlarePanoramaOverlay",
                           "bleachingDistance": 0.4,
                           "pitch": 68.29,
                           "bleaching": 0.7,
                           "yaw": -155.24
                          }
                         ],
                         "right": {
                          "levels": [
                           {
                            "url": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_r_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "front": {
                          "levels": [
                           {
                            "url": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_f_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "levels": [
                           {
                            "url": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_b_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "top": {
                          "levels": [
                           {
                            "url": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_u_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "bottom": {
                          "levels": [
                           {
                            "url": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_d_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "left": {
                          "levels": [
                           {
                            "url": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_l_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_t.jpg"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_t.jpg",
                       "mapLocations": [
                        {
                         "y": 234.11,
                         "angle": 92.82,
                         "class": "PanoramaMapLocation",
                         "map": {
                          "scaleMode": "fit_inside",
                          "image": {
                           "levels": [
                            {
                             "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E.png",
                             "height": 800,
                             "class": "ImageResourceLevel",
                             "width": 344
                            },
                            {
                             "grayscale": true,
                             "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_lq.png",
                             "height": 400,
                             "class": "ImageResourceLevel",
                             "width": 172
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "label": "2-piso",
                          "thumbnailUrl": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_t.png",
                          "overlays": [
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_0.png",
                                "height": 25,
                                "class": "ImageResourceLevel",
                                "width": 25
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 25,
                             "x": 282.77,
                             "height": 25,
                             "y": 427.61,
                             "class": "HotspotMapOverlayImage"
                            },
                            "id": "overlay_B8F85CB0_AE70_3F73_41C3_DC7B01FC0984",
                            "class": "AreaHotspotMapOverlay",
                            "useHandCursor": true,
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 14)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "rollOverDisplay": true,
                            "map": {
                             "height": 25,
                             "y": 427.61,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_0_map.gif",
                                "height": 12,
                                "class": "ImageResourceLevel",
                                "width": 12
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 25,
                             "x": 282.77
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_1.png",
                                "height": 25,
                                "class": "ImageResourceLevel",
                                "width": 25
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 25,
                             "x": 54.2,
                             "height": 25,
                             "y": 478.53,
                             "class": "HotspotMapOverlayImage"
                            },
                            "id": "overlay_B9A37DAA_AE70_1917_41C7_01122E6A0AED",
                            "class": "AreaHotspotMapOverlay",
                            "useHandCursor": true,
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 18)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "rollOverDisplay": true,
                            "map": {
                             "height": 25,
                             "y": 478.53,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_1_map.gif",
                                "height": 12,
                                "class": "ImageResourceLevel",
                                "width": 12
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 25,
                             "x": 54.2
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_2.png",
                                "height": 25,
                                "class": "ImageResourceLevel",
                                "width": 25
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 25,
                             "x": 87.02,
                             "height": 25,
                             "y": 641.47,
                             "class": "HotspotMapOverlayImage"
                            },
                            "id": "overlay_B9B931CA_AE70_6916_41D9_A5584E238A36",
                            "class": "AreaHotspotMapOverlay",
                            "useHandCursor": true,
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 17)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "rollOverDisplay": true,
                            "map": {
                             "height": 25,
                             "y": 641.47,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_2_map.gif",
                                "height": 12,
                                "class": "ImageResourceLevel",
                                "width": 12
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 25,
                             "x": 87.02
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_3.png",
                                "height": 25,
                                "class": "ImageResourceLevel",
                                "width": 25
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 25,
                             "x": 245.43,
                             "height": 25,
                             "y": 594,
                             "class": "HotspotMapOverlayImage"
                            },
                            "id": "overlay_B98B7224_AE70_2B13_41D2_E4AA8B59B901",
                            "class": "AreaHotspotMapOverlay",
                            "useHandCursor": true,
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 16)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "rollOverDisplay": true,
                            "map": {
                             "height": 25,
                             "y": 594,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_3_map.gif",
                                "height": 12,
                                "class": "ImageResourceLevel",
                                "width": 12
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 25,
                             "x": 245.43
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_4.png",
                                "height": 25,
                                "class": "ImageResourceLevel",
                                "width": 25
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 25,
                             "x": 81.41,
                             "height": 25,
                             "y": 287.3,
                             "class": "HotspotMapOverlayImage"
                            },
                            "id": "overlay_B8C7E95D_AE70_192D_41E1_11DAC171E4FE",
                            "class": "AreaHotspotMapOverlay",
                            "useHandCursor": true,
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 19)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "rollOverDisplay": true,
                            "map": {
                             "height": 25,
                             "y": 287.3,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_4_map.gif",
                                "height": 12,
                                "class": "ImageResourceLevel",
                                "width": 12
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 25,
                             "x": 81.41
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_5.png",
                                "height": 25,
                                "class": "ImageResourceLevel",
                                "width": 25
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 25,
                             "x": 229.59,
                             "height": 25,
                             "y": 221.61,
                             "class": "HotspotMapOverlayImage"
                            },
                            "id": "overlay_B93268DD_AE71_E72D_41D4_1633A180488E",
                            "class": "AreaHotspotMapOverlay",
                            "useHandCursor": true,
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 21)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "rollOverDisplay": true,
                            "map": {
                             "height": 25,
                             "y": 221.61,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_5_map.gif",
                                "height": 12,
                                "class": "ImageResourceLevel",
                                "width": 12
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 25,
                             "x": 229.59
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_6.png",
                                "height": 25,
                                "class": "ImageResourceLevel",
                                "width": 25
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 25,
                             "x": 171.82,
                             "height": 25,
                             "y": 323.51,
                             "class": "HotspotMapOverlayImage"
                            },
                            "id": "overlay_B902B875_AE71_E7FD_41E1_C80DD5F6AC12",
                            "class": "AreaHotspotMapOverlay",
                            "useHandCursor": true,
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 20)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "rollOverDisplay": true,
                            "map": {
                             "height": 25,
                             "y": 323.51,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_6_map.gif",
                                "height": 12,
                                "class": "ImageResourceLevel",
                                "width": 12
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 25,
                             "x": 171.82
                            }
                           },
                           {
                            "image": {
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_7.png",
                                "height": 25,
                                "class": "ImageResourceLevel",
                                "width": 25
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 25,
                             "x": 133.41,
                             "height": 25,
                             "y": 484.19,
                             "class": "HotspotMapOverlayImage"
                            },
                            "id": "overlay_B8C2A774_AE70_69FC_41E1_7E3B506459F7",
                            "class": "AreaHotspotMapOverlay",
                            "useHandCursor": true,
                            "areas": [
                             {
                              "mapColor": "#FF0000",
                              "click": "this.mainPlayList.set('selectedIndex', 15)",
                              "class": "HotspotMapOverlayArea"
                             }
                            ],
                            "rollOverDisplay": true,
                            "map": {
                             "height": 25,
                             "y": 484.19,
                             "offsetX": 0,
                             "class": "HotspotMapOverlayMap",
                             "offsetY": 0,
                             "image": {
                              "levels": [
                               {
                                "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_7_map.gif",
                                "height": 12,
                                "class": "ImageResourceLevel",
                                "width": 12
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "width": 25,
                             "x": 133.41
                            }
                           }
                          ],
                          "fieldOfViewOverlayInsideColor": "#000000",
                          "fieldOfViewOverlayInsideOpacity": 0.4,
                          "class": "Map",
                          "fieldOfViewOverlayOutsideColor": "#000000",
                          "minimumZoomFactor": 0.5,
                          "maximumZoomFactor": 1.2,
                          "fieldOfViewOverlayOutsideOpacity": 0,
                          "fieldOfViewOverlayRadiusScale": 0.2,
                          "initialZoomFactor": 1,
                          "width": 344,
                          "height": 800,
                          "id": "map_B86E682C_AE70_6713_41DE_CACB87474A6E"
                         },
                         "x": 242.09
                        }
                       ],
                       "hfovMin": 60,
                       "pitch": 0,
                       "id": "panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8"
                      },
                      "backwardYaw": 142.22,
                      "class": "AdjacentPanorama",
                      "yaw": -66.04,
                      "distance": 1
                     }
                    ],
                    "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.13.26.08",
                    "hfovMax": 120,
                    "partial": false,
                    "class": "Panorama",
                    "hfov": 360,
                    "vfov": 180,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "id": "overlay_F419BC4A_FB17_EFC2_41DA_F168E67FAC84",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8, this.camera_25E7FB3D_290D_5531_41B8_1D7AEC85D30F); this.mainPlayList.set('selectedIndex', 21)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_0_HS_2_0.png",
                             "height": 146,
                             "class": "ImageResourceLevel",
                             "width": 146
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -66.04,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -37.99,
                          "hfov": 6.93
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_0_HS_2_0_0_map.gif",
                             "height": 73,
                             "class": "ImageResourceLevel",
                             "width": 73
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -37.99,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -66.04,
                          "hfov": 6.93
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "id": "overlay_F4710F9E_FB14_E942_41E9_90499C3873B9",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E, this.camera_25E25B33_290D_5531_4192_98DC11D80A40); this.mainPlayList.set('selectedIndex', 19)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_0_HS_1_0.png",
                             "height": 146,
                             "class": "ImageResourceLevel",
                             "width": 146
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -163.85,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -28.3,
                          "hfov": 7.74
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_0_HS_1_0_0_map.gif",
                             "height": 73,
                             "class": "ImageResourceLevel",
                             "width": 73
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -28.3,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -163.85,
                          "hfov": 7.74
                         }
                        ]
                       },
                       {
                        "id": "overlay_EADB3F0B_FB2C_A942_41DB_A261E8C28B6C",
                        "class": "LensFlarePanoramaOverlay",
                        "bleachingDistance": 0.4,
                        "pitch": 33.62,
                        "bleaching": 0.7,
                        "yaw": 5.52
                       }
                      ],
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_r_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "front": {
                       "levels": [
                        {
                         "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_f_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "CubicPanoramaFrame",
                      "back": {
                       "levels": [
                        {
                         "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_b_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "top": {
                       "levels": [
                        {
                         "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_u_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "bottom": {
                       "levels": [
                        {
                         "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_d_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "left": {
                       "levels": [
                        {
                         "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_l_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_t.jpg"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_t.jpg",
                    "mapLocations": [
                     {
                      "y": 336.01,
                      "angle": 98.91,
                      "class": "PanoramaMapLocation",
                      "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                      "x": 184.32
                     }
                    ],
                    "hfovMin": 60,
                    "pitch": 0,
                    "id": "panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF"
                   },
                   "backwardYaw": -163.85,
                   "class": "AdjacentPanorama",
                   "yaw": 133.17,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A",
                   "backwardYaw": -140.01,
                   "class": "AdjacentPanorama",
                   "yaw": 177.15,
                   "distance": 1
                  }
                 ],
                 "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.12.32.17",
                 "hfovMax": 120,
                 "partial": false,
                 "class": "Panorama",
                 "hfov": 360,
                 "vfov": 180,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_F5C775BD_FB14_B946_41AE_EEC473CFFD3B",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A, this.camera_241ADB9E_290D_55F3_4129_35B215D45E30); this.mainPlayList.set('selectedIndex', 15)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_0_HS_1_0.png",
                          "height": 146,
                          "class": "ImageResourceLevel",
                          "width": 146
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 177.15,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -22.59,
                       "hfov": 8.11
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_0_HS_1_0_0_map.gif",
                          "height": 73,
                          "class": "ImageResourceLevel",
                          "width": 73
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -22.59,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 177.15,
                       "hfov": 8.11
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_F43186E0_FB14_58FE_41D1_E9F4B5AD660F",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF, this.camera_2406AB93_290D_55F1_4190_20F5895413A8); this.mainPlayList.set('selectedIndex', 20)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_0_HS_0_0.png",
                          "height": 146,
                          "class": "ImageResourceLevel",
                          "width": 146
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 133.17,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -31.87,
                       "hfov": 7.46
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_0_HS_0_0_0_map.gif",
                          "height": 73,
                          "class": "ImageResourceLevel",
                          "width": 73
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -31.87,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 133.17,
                       "hfov": 7.46
                      }
                     ]
                    },
                    {
                     "id": "overlay_EADD98DB_FB2C_A8C2_41E0_044840C635FB",
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "pitch": 31.33,
                     "bleaching": 0.7,
                     "yaw": -15.43
                    },
                    {
                     "id": "overlay_EAD554BB_FB2C_BF42_41D2_EAC6A9ADFA59",
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "pitch": 31.71,
                     "bleaching": 0.7,
                     "yaw": 55.05
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_r.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "front": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_f.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_b.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "top": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_u.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "bottom": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_d.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "left": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_t.jpg",
                 "mapLocations": [
                  {
                   "y": 299.8,
                   "angle": -15.53,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                   "x": 93.91
                  }
                 ],
                 "hfovMin": 60,
                 "pitch": 0,
                 "id": "panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E"
                },
                "backwardYaw": 177.15,
                "class": "AdjacentPanorama",
                "yaw": -140.01,
                "distance": 1
               },
               {
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A",
                   "backwardYaw": -10.54,
                   "class": "AdjacentPanorama",
                   "yaw": 2.64,
                   "distance": 1
                  }
                 ],
                 "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.10.11.98",
                 "hfovMax": 120,
                 "partial": false,
                 "class": "Panorama",
                 "hfov": 360,
                 "vfov": 180,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_F5718A14_FB14_6B46_41D6_F4DF4A467239",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A, this.camera_24492C12_290D_52F3_41B4_5B71708362D4); this.mainPlayList.set('selectedIndex', 15)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_0_HS_0_0.png",
                          "height": 146,
                          "class": "ImageResourceLevel",
                          "width": 146
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 2.64,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -12.03,
                       "hfov": 8.6
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_0_HS_0_0_0_map.gif",
                          "height": 73,
                          "class": "ImageResourceLevel",
                          "width": 73
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -12.03,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 2.64,
                       "hfov": 8.6
                      }
                     ]
                    },
                    {
                     "id": "overlay_EADAF5E2_FB2C_58C3_41EF_348E6D697F96",
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "pitch": 50,
                     "bleaching": 0.7,
                     "yaw": -117.52
                    },
                    {
                     "id": "overlay_EAD6A941_FB2C_693E_41E4_D898B361401A",
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "pitch": 36.29,
                     "bleaching": 0.7,
                     "yaw": 43.24
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_r.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "front": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_f.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_b.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "top": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_u.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "bottom": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_d.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "left": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_t.jpg",
                 "mapLocations": [
                  {
                   "y": 606.5,
                   "angle": -33.82,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                   "x": 257.93
                  }
                 ],
                 "hfovMin": 60,
                 "pitch": 0,
                 "id": "panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD"
                },
                "backwardYaw": 2.64,
                "class": "AdjacentPanorama",
                "yaw": -10.54,
                "distance": 1
               },
               {
                "panorama": "this.panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442",
                "backwardYaw": -18.24,
                "class": "AdjacentPanorama",
                "yaw": -88.13,
                "distance": 1
               },
               {
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A",
                   "backwardYaw": 147.04,
                   "class": "AdjacentPanorama",
                   "yaw": 128.37,
                   "distance": 1
                  }
                 ],
                 "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.11.47.51",
                 "hfovMax": 120,
                 "partial": false,
                 "class": "Panorama",
                 "hfov": 360,
                 "vfov": 180,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_F5A64EA9_FB15_EB4E_41E3_5837050507B4",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A, this.camera_25D96AEE_290D_5753_41A0_9CAF4A19F1D0); this.mainPlayList.set('selectedIndex', 15)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_0_HS_0_0.png",
                          "height": 146,
                          "class": "ImageResourceLevel",
                          "width": 146
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 128.37,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -38.44,
                       "hfov": 6.88
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_0_HS_0_0_0_map.gif",
                          "height": 73,
                          "class": "ImageResourceLevel",
                          "width": 73
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -38.44,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 128.37,
                       "hfov": 6.88
                      }
                     ]
                    },
                    {
                     "id": "overlay_EADADFF3_FB2C_68C2_41DE_70B839C85391",
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "pitch": 62.95,
                     "bleaching": 0.7,
                     "yaw": 36.38
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_r.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "front": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_f.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_b.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "top": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_u.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "bottom": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_d.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "left": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_t.jpg",
                 "mapLocations": [
                  {
                   "y": 491.03,
                   "angle": -11.17,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                   "x": 66.7
                  }
                 ],
                 "hfovMin": 60,
                 "pitch": 0,
                 "id": "panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16"
                },
                "backwardYaw": 128.37,
                "class": "AdjacentPanorama",
                "yaw": 147.04,
                "distance": 1
               },
               {
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A",
                   "backwardYaw": 64.23,
                   "class": "AdjacentPanorama",
                   "yaw": 23.68,
                   "distance": 1
                  }
                 ],
                 "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.10.56.12",
                 "hfovMax": 120,
                 "partial": false,
                 "class": "Panorama",
                 "hfov": 360,
                 "vfov": 180,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_F5993236_FB14_BB42_41EA_5367E75C3FAD",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A, this.camera_244DFC1C_290D_52F7_41B1_EB5EBBD3061E); this.mainPlayList.set('selectedIndex', 15)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_0_HS_0_0.png",
                          "height": 146,
                          "class": "ImageResourceLevel",
                          "width": 146
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 23.68,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -21.57,
                       "hfov": 8.17
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_0_HS_0_0_0_map.gif",
                          "height": 73,
                          "class": "ImageResourceLevel",
                          "width": 73
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -21.57,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 23.68,
                       "hfov": 8.17
                      }
                     ]
                    },
                    {
                     "id": "overlay_EADDC29A_FB2C_7B42_41E1_F6D50FE92A12",
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "pitch": 37.05,
                     "bleaching": 0.7,
                     "yaw": 2.1
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_r.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "front": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_f.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_b.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "top": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_u.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "bottom": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_d.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "left": {
                    "levels": [
                     {
                      "url": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_t.jpg",
                 "mapLocations": [
                  {
                   "y": 653.97,
                   "angle": -0.36,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                   "x": 99.52
                  }
                 ],
                 "hfovMin": 60,
                 "pitch": 0,
                 "id": "panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956"
                },
                "backwardYaw": 23.68,
                "class": "AdjacentPanorama",
                "yaw": 64.23,
                "distance": 1
               }
              ],
              "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.09.27.04",
              "hfovMax": 120,
              "partial": false,
              "class": "Panorama",
              "hfov": 360,
              "vfov": 180,
              "frames": [
               {
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_F6D9D7BC_FB1F_B946_41D0_03316C638E55",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956, this.camera_25E94B1F_290D_56F1_41B2_10101F483DDC); this.mainPlayList.set('selectedIndex', 17)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_5_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 64.23,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -19.62,
                    "hfov": 8.28
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_5_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -19.62,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 64.23,
                    "hfov": 8.28
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_F5317BA7_FB1C_E942_41DE_F27E4268289E",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD, this.camera_25D3AB02_290D_56D3_4175_0013F4A8250E); this.mainPlayList.set('selectedIndex', 16)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_4_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -10.54,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -19.52,
                    "hfov": 8.28
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_4_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -19.52,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -10.54,
                    "hfov": 8.28
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_F5551352_FB1D_D9C2_41E8_992B0A5133ED",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16, this.camera_25D5FB16_290D_56F3_41B1_6419194B8FE3); this.mainPlayList.set('selectedIndex', 18)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_3_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 147.04,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -22.73,
                    "hfov": 8.11
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_3_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -22.73,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 147.04,
                    "hfov": 8.11
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_F585331D_FB1C_D946_41EA_8BF98FE3E56E",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442, this.camera_25D0EB0C_290D_56D7_41B9_F21FC583C2CD); this.mainPlayList.set('selectedIndex', 14)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_2_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -88.13,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -24.97,
                    "hfov": 7.97
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_2_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -24.97,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -88.13,
                    "hfov": 7.97
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_F595EB38_FB1C_694E_41DB_7F5976B96B29",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E, this.camera_25DE7AF8_290D_573F_41C1_2A60AB018711); this.mainPlayList.set('selectedIndex', 19)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_1_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -140.01,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -13.19,
                    "hfov": 8.56
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_1_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -13.19,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -140.01,
                    "hfov": 8.56
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_F4FA7B47_FB2C_E9C2_41BC_599C24DB8395",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.showPopupPanoramaOverlay(this.popup_EB8AED66_FB2F_E9C2_41E6_4EC758A048EE, {'pressedBorderColor':'#FFFFFF','iconLineWidth':5,'pressedBorderSize':0,'rollOverIconHeight':60,'iconColor':'#FFFFFF','rollOverBackgroundColor':['#DDDDDD','#000000','#000000'],'paddingRight':5,'rollOverBorderSize':0,'rollOverIconWidth':60,'backgroundColorDirection':'vertical','paddingTop':5,'rollOverBorderColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','iconHeight':60,'iconWidth':60,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'rollOverBackgroundColorRatios':[0,0,1],'pressedIconHeight':60,'backgroundColorRatios':[0,0,1],'backgroundColor':['#DDDDDD','#000000','#000000'],'borderColor':'#FFFFFF','pressedBackgroundColorRatios':[0,0,1],'pressedIconWidth':60,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','borderSize':0,'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#000000','#000000']}, this.ImageResource_EA224210_FB3B_FB5E_41B8_D5A45B002493, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_0_0.png",
                       "height": 109,
                       "class": "ImageResourceLevel",
                       "width": 109
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 11.6,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": 1.4,
                    "hfov": 6.59
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_0_0_0_map.gif",
                       "height": 54,
                       "class": "ImageResourceLevel",
                       "width": 54
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 1.4,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 11.6,
                    "hfov": 6.59
                   }
                  ]
                 },
                 {
                  "image": {
                   "levels": [
                    {
                     "url": "media/popup_EB8AED66_FB2F_E9C2_41E6_4EC758A048EE_0_2.jpg",
                     "height": 512,
                     "class": "ImageResourceLevel",
                     "width": 512
                    },
                    {
                     "url": "media/popup_EB8AED66_FB2F_E9C2_41E6_4EC758A048EE_0_1.jpg",
                     "height": 1024,
                     "class": "ImageResourceLevel",
                     "width": 1024
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "showDuration": 500,
                  "hideDuration": 500,
                  "hfov": 6.59,
                  "popupMaxHeight": "95%",
                  "rotationY": 0,
                  "rotationZ": 0,
                  "rotationX": 0,
                  "id": "popup_EB8AED66_FB2F_E9C2_41E6_4EC758A048EE",
                  "class": "PopupPanoramaOverlay",
                  "popupMaxWidth": "95%",
                  "showEasing": "cubic_in",
                  "pitch": 1.4,
                  "hideEasing": "cubic_out",
                  "yaw": 11.6
                 },
                 {
                  "id": "overlay_EADA96D2_FB2B_B8C2_41E5_08444C5B698C",
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "pitch": 59.14,
                  "bleaching": 0.7,
                  "yaw": -140
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_t.jpg",
              "mapLocations": [
               {
                "y": 496.69,
                "angle": 136.84,
                "class": "PanoramaMapLocation",
                "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                "x": 145.91
               }
              ],
              "hfovMin": 60,
              "pitch": 0,
              "id": "panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A"
             },
             "backwardYaw": -88.13,
             "class": "AdjacentPanorama",
             "yaw": -18.24,
             "distance": 1
            }
           ],
           "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.08.31.66",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_F6A0EAB4_FB1C_6B46_41E1_F21218C8D8B8",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C, this.camera_25FCFB5C_290D_5577_41C1_80B916279D82); this.mainPlayList.set('selectedIndex', 1)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_0_HS_1_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 4.86,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -27.58,
                 "hfov": 7.79
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_0_HS_1_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -27.58,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 4.86,
                 "hfov": 7.79
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_F6E89A1F_FB1C_AB42_41E3_4B36F8DF6035",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A, this.camera_25F0DB66_290D_5553_41C1_765D5BD577DA); this.mainPlayList.set('selectedIndex', 15)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -18.24,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": 9.31,
                 "hfov": 8.67
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 9.31,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -18.24,
                 "hfov": 8.67
                }
               ]
              },
              {
               "id": "overlay_EAD3A620_FB2B_DB7E_41DF_B42B6B017B3D",
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 83.52,
               "bleaching": 0.7,
               "yaw": -43.62
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_t.jpg",
           "mapLocations": [
            {
             "y": 433.43,
             "angle": 269.62,
             "class": "PanoramaMapLocation",
             "map": {
              "scaleMode": "fit_inside",
              "image": {
               "levels": [
                {
                 "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C.png",
                 "height": 800,
                 "class": "ImageResourceLevel",
                 "width": 344
                },
                {
                 "grayscale": true,
                 "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_lq.png",
                 "height": 400,
                 "class": "ImageResourceLevel",
                 "width": 172
                }
               ],
               "class": "ImageResource"
              },
              "label": "1-piso",
              "thumbnailUrl": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_t.png",
              "overlays": [
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_0.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 49.56,
                 "height": 25,
                 "y": 424.33,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_B8AFC1F0_AE70_E8F3_41DF_4DA851E12770",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 1)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 424.33,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_0_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 49.56
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_1.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 222.69,
                 "height": 25,
                 "y": 233.1,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_B942F424_AE70_2F13_4182_5C003BEE434A",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 13)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 233.1,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_1_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 222.69
                }
               },
               {
                "image": {
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_2.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 290.58,
                 "height": 25,
                 "y": 420.93,
                 "class": "HotspotMapOverlayImage"
                },
                "id": "overlay_B925714F_AE70_692D_4194_4B98DAECC533",
                "class": "AreaHotspotMapOverlay",
                "useHandCursor": true,
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "click": "this.mainPlayList.set('selectedIndex', 14)",
                  "class": "HotspotMapOverlayArea"
                 }
                ],
                "rollOverDisplay": true,
                "map": {
                 "height": 25,
                 "y": 420.93,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "levels": [
                   {
                    "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_2_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "width": 25,
                 "x": 290.58
                }
               }
              ],
              "fieldOfViewOverlayInsideColor": "#000000",
              "fieldOfViewOverlayInsideOpacity": 0.4,
              "class": "Map",
              "fieldOfViewOverlayOutsideColor": "#000000",
              "minimumZoomFactor": 0.5,
              "maximumZoomFactor": 1.2,
              "fieldOfViewOverlayOutsideOpacity": 0,
              "fieldOfViewOverlayRadiusScale": 0.2,
              "initialZoomFactor": 1,
              "width": 344,
              "height": 800,
              "id": "map_B8CA0598_AE70_6932_41E3_495D3E2D778C"
             },
             "x": 303.08
            },
            {
             "y": 440.11,
             "angle": -87.44,
             "class": "PanoramaMapLocation",
             "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
             "x": 295.27
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442"
          },
          "backwardYaw": 4.86,
          "class": "AdjacentPanorama",
          "yaw": 54.74,
          "distance": 1
         },
         {
          "panorama": "this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4",
          "backwardYaw": -9.57,
          "class": "AdjacentPanorama",
          "yaw": 98.66,
          "distance": 1
         },
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C",
             "backwardYaw": 8.56,
             "class": "AdjacentPanorama",
             "yaw": -95.39,
             "distance": 1
            }
           ],
           "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.07.38.28",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_F6302A40_FAEB_AB3E_41ED_72C188D0F8DD",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C, this.camera_2476AC85_290D_53D1_4121_F161A5C222A0); this.mainPlayList.set('selectedIndex', 1)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -95.39,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -12.14,
                 "hfov": 8.59
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -12.14,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -95.39,
                 "hfov": 8.59
                }
               ]
              },
              {
               "id": "overlay_EADA472F_FB2B_F941_41A0_81A3762CBABB",
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 20.29,
               "bleaching": 0.7,
               "yaw": -112.95
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_t.jpg",
           "mapLocations": [
            {
             "y": 245.6,
             "angle": -59.96,
             "class": "PanoramaMapLocation",
             "map": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
             "x": 235.19
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C"
          },
          "backwardYaw": -95.39,
          "class": "AdjacentPanorama",
          "yaw": 8.56,
          "distance": 1
         }
        ],
        "label": "Casa Modelo",
        "hfovMax": 120,
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_09A09AA9_056B_1CFC_4177_0367D8E37CB2",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4, this.camera_240FEB7A_290D_5533_41B6_379E3CF1BD52); this.mainPlayList.set('selectedIndex', 7)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_0_HS_2_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 98.66,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -10.02,
              "hfov": 8.66
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_0_HS_2_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -10.02,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 98.66,
              "hfov": 8.66
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_09DDF1EA_0569_0C7C_4187_37BCE3E0F3A9",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442, this.camera_240B4B70_290D_554F_4192_94A464790236); this.mainPlayList.set('selectedIndex', 14)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_0_HS_1_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 54.74,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 15.62,
              "hfov": 8.46
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_0_HS_1_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 15.62,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 54.74,
              "hfov": 8.46
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_088A9784_0569_14B4_417C_E518273FD5F4",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C, this.camera_24025B88_290D_55DF_41C2_D49E2ACB8BD5); this.mainPlayList.set('selectedIndex', 13)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_0_HS_0_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 8.56,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -5.28,
              "hfov": 8.75
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_0_HS_0_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -5.28,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 8.56,
              "hfov": 8.75
             }
            ]
           },
           {
            "id": "overlay_1DE1FB7A_057B_1C5F_4191_31E78867EE81",
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": 6.19,
            "bleaching": 0.7,
            "yaw": -27.24
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_220EE431_290B_F330_41B0_A32C28CE9BDB",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.showPopupPanoramaOverlay(this.popup_22AACE67_290C_EF51_41C0_118FEA07A2FD, {'pressedBorderColor':'#FFFFFF','iconLineWidth':5,'pressedBorderSize':0,'rollOverIconHeight':60,'iconColor':'#FFFFFF','rollOverBackgroundColor':['#DDDDDD','#000000','#000000'],'paddingRight':5,'rollOverBorderSize':0,'rollOverIconWidth':60,'backgroundColorDirection':'vertical','paddingTop':5,'rollOverBorderColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','iconHeight':60,'iconWidth':60,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'rollOverBackgroundColorRatios':[0,0,1],'pressedIconHeight':60,'backgroundColorRatios':[0,0,1],'backgroundColor':['#DDDDDD','#000000','#000000'],'borderColor':'#FFFFFF','pressedBackgroundColorRatios':[0,0,1],'pressedIconWidth':60,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','borderSize':0,'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#000000','#000000']}, this.ImageResource_229C3C5A_290D_7373_41A8_9DB8C0D887A8, null, null, null, null, false)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_0_HS_3_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -0.88,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 0.16,
              "hfov": 6.59
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_0_HS_3_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 0.16,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -0.88,
              "hfov": 6.59
             }
            ]
           },
           {
            "image": {
             "levels": [
              {
               "url": "media/popup_22AACE67_290C_EF51_41C0_118FEA07A2FD_0_2.jpg",
               "height": 512,
               "class": "ImageResourceLevel",
               "width": 512
              },
              {
               "url": "media/popup_22AACE67_290C_EF51_41C0_118FEA07A2FD_0_1.jpg",
               "height": 1024,
               "class": "ImageResourceLevel",
               "width": 1024
              }
             ],
             "class": "ImageResource"
            },
            "showDuration": 500,
            "hideDuration": 500,
            "hfov": 6.59,
            "popupMaxHeight": "95%",
            "rotationY": 0,
            "rotationZ": 0,
            "rotationX": 0,
            "id": "popup_22AACE67_290C_EF51_41C0_118FEA07A2FD",
            "class": "PopupPanoramaOverlay",
            "popupMaxWidth": "95%",
            "showEasing": "cubic_in",
            "pitch": 0.16,
            "hideEasing": "cubic_out",
            "yaw": -0.88
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_t.jpg",
        "mapLocations": [
         {
          "y": 436.83,
          "angle": 19.22,
          "class": "PanoramaMapLocation",
          "map": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
          "x": 62.06
         }
        ],
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C"
       },
       "backwardYaw": 98.66,
       "class": "AdjacentPanorama",
       "yaw": -9.57,
       "distance": 1
      },
      {
       "panorama": "this.panorama_F2CA7815_FAEC_D746_41B4_366CE2486574",
       "backwardYaw": 41.37,
       "class": "AdjacentPanorama",
       "yaw": -170.09,
       "distance": 1
      }
     ],
     "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 11.54.26.19",
     "hfovMax": 120,
     "partial": false,
     "class": "Panorama",
     "hfov": 360,
     "vfov": 180,
     "frames": [
      {
       "overlays": [
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_F32D0DBE_FAF5_A942_41C4_7513DE65156B",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_F2CA7815_FAEC_D746_41B4_366CE2486574, this.camera_2436BC07_290D_52D1_41C1_08A068E9F754); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_4_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -170.09,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -14.08,
           "hfov": 8.53
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_4_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -14.08,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -170.09,
           "hfov": 8.53
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_F0ECCC20_FAF4_EF7E_41CA_10CC41F8F890",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2, this.camera_243B9BE9_290D_5551_41B1_81EB95BBE91F); this.mainPlayList.set('selectedIndex', 10)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_3_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -74.27,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -7.06,
           "hfov": 8.72
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_3_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -7.06,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -74.27,
           "hfov": 8.72
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_F0F7FCAA_FAF4_6F42_41CB_813B896937B8",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C, this.camera_2432BBFD_290D_5531_41B6_E45943EE3DD2); this.mainPlayList.set('selectedIndex', 1)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_2_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -9.57,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 0.09,
           "hfov": 8.79
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_2_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 0.09,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -9.57,
           "hfov": 8.79
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_F304C8FB_FAF7_A8C2_419D_12739731B307",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.showPopupPanoramaOverlay(this.popup_F049F018_FAF4_774E_41D1_C04E6224ACE3, {'pressedBorderColor':'#FFFFFF','iconLineWidth':5,'pressedBorderSize':0,'rollOverIconHeight':60,'iconColor':'#FFFFFF','rollOverBackgroundColor':['#DDDDDD','#000000','#000000'],'paddingRight':5,'rollOverBorderSize':0,'rollOverIconWidth':60,'backgroundColorDirection':'vertical','paddingTop':5,'rollOverBorderColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','iconHeight':60,'iconWidth':60,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'rollOverBackgroundColorRatios':[0,0,1],'pressedIconHeight':60,'backgroundColorRatios':[0,0,1],'backgroundColor':['#DDDDDD','#000000','#000000'],'borderColor':'#FFFFFF','pressedBackgroundColorRatios':[0,0,1],'pressedIconWidth':60,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','borderSize':0,'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#000000','#000000']}, this.ImageResource_EA38020B_FB3B_FB42_41ED_4428E852F1CC, null, null, null, null, false)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_1_0.png",
              "height": 109,
              "class": "ImageResourceLevel",
              "width": 109
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -7.33,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 16.07,
           "hfov": 6.33
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_1_0_0_map.gif",
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 54
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 16.07,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -7.33,
           "hfov": 6.33
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_F0E6D38F_FAF4_5942_41D6_AB9A22CB3BF7",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03, this.camera_243E0BF2_290D_5530_41C2_2D8A7892C5B0); this.mainPlayList.set('selectedIndex', 8)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_0_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 70.16,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -2.86,
           "hfov": 8.78
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_0_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -2.86,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 70.16,
           "hfov": 8.78
          }
         ]
        },
        {
         "image": {
          "levels": [
           {
            "url": "media/popup_F049F018_FAF4_774E_41D1_C04E6224ACE3_0_3.jpg",
            "height": 288,
            "class": "ImageResourceLevel",
            "width": 512
           },
           {
            "url": "media/popup_F049F018_FAF4_774E_41D1_C04E6224ACE3_0_2.jpg",
            "height": 576,
            "class": "ImageResourceLevel",
            "width": 1024
           }
          ],
          "class": "ImageResource"
         },
         "showDuration": 500,
         "hideDuration": 500,
         "hfov": 6.33,
         "popupMaxHeight": "95%",
         "rotationY": 0,
         "rotationZ": 0,
         "rotationX": 0,
         "id": "popup_F049F018_FAF4_774E_41D1_C04E6224ACE3",
         "class": "PopupPanoramaOverlay",
         "popupMaxWidth": "95%",
         "showEasing": "cubic_in",
         "pitch": 16.07,
         "hideEasing": "cubic_out",
         "yaw": -7.33
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_EA86B948_FB35_A9CE_41C1_1ED4A86D9B3E",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4, this.camera_24270BDF_290D_5571_41A1_ACE2DADCEC33); this.mainPlayList.set('selectedIndex', 9)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_5_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 20.93,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -3.49,
           "hfov": 8.77
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_5_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -3.49,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 20.93,
           "hfov": 8.77
          }
         ]
        },
        {
         "id": "overlay_E958FB6D_FB34_A9C6_41C1_D1ABE56A3B3E",
         "class": "LensFlarePanoramaOverlay",
         "bleachingDistance": 0.4,
         "pitch": 32.86,
         "bleaching": 0.7,
         "yaw": 90.86
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_r_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_f_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_b_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_u_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_d_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_l_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_t.jpg",
     "mapLocations": [
      {
       "y": 652.05,
       "angle": -25.27,
       "class": "PanoramaMapLocation",
       "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
       "x": 352.42
      }
     ],
     "hfovMin": 60,
     "pitch": 0,
     "id": "panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4"
    },
    "backwardYaw": -170.09,
    "class": "AdjacentPanorama",
    "yaw": 41.37,
    "distance": 1
   }
  ],
  "label": "Start",
  "hfovMax": 120,
  "partial": false,
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_F3A57708_FAED_D94E_41B7_36B73B043F40",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4, this.camera_25EECB29_290D_56D1_41C1_48425FAB11D4); this.mainPlayList.set('selectedIndex', 7)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_0_HS_1_0.png",
           "height": 146,
           "class": "ImageResourceLevel",
           "width": 146
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 41.37,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -9.52,
        "hfov": 8.67
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_0_HS_1_0_0_map.gif",
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -9.52,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 41.37,
        "hfov": 8.67
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_F34DD9C6_FAF4_68C2_41E1_A4715392C65F",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_F03B81DB_FAF4_B8C2_41C4_C08345CF767C, {'pressedBorderColor':'#FFFFFF','iconLineWidth':5,'pressedBorderSize':0,'rollOverIconHeight':60,'iconColor':'#FFFFFF','rollOverBackgroundColor':['#DDDDDD','#000000','#000000'],'paddingRight':5,'rollOverBorderSize':0,'rollOverIconWidth':60,'backgroundColorDirection':'vertical','paddingTop':5,'rollOverBorderColor':'#FFFFFF','pressedBackgroundColorDirection':'vertical','iconHeight':60,'iconWidth':60,'pressedIconLineWidth':5,'backgroundOpacity':0.3,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'rollOverBackgroundColorRatios':[0,0,1],'pressedIconHeight':60,'backgroundColorRatios':[0,0,1],'backgroundColor':['#DDDDDD','#000000','#000000'],'borderColor':'#FFFFFF','pressedBackgroundColorRatios':[0,0,1],'pressedIconWidth':60,'rollOverBackgroundOpacity':0.3,'rollOverIconColor':'#666666','borderSize':0,'pressedBackgroundOpacity':0.3,'paddingLeft':5,'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#000000','#000000']}, this.ImageResource_EA3A8206_FB3B_FB42_41EE_D3E5B37820C9, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_0_HS_0_0.png",
           "height": 183,
           "class": "ImageResourceLevel",
           "width": 183
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -117.08,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 1.25,
        "hfov": 10.98
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_0_HS_0_0_0_map.gif",
           "height": 91,
           "class": "ImageResourceLevel",
           "width": 91
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.25,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -117.08,
        "hfov": 10.98
       }
      ]
     },
     {
      "image": {
       "levels": [
        {
         "url": "media/popup_F03B81DB_FAF4_B8C2_41C4_C08345CF767C_0_3.jpg",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_F03B81DB_FAF4_B8C2_41C4_C08345CF767C_0_2.jpg",
         "height": 576,
         "class": "ImageResourceLevel",
         "width": 1024
        }
       ],
       "class": "ImageResource"
      },
      "showDuration": 500,
      "hideDuration": 500,
      "hfov": 10.98,
      "popupMaxHeight": "95%",
      "rotationY": 0,
      "rotationZ": 0,
      "rotationX": 0,
      "id": "popup_F03B81DB_FAF4_B8C2_41C4_C08345CF767C",
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "95%",
      "showEasing": "cubic_in",
      "pitch": 1.25,
      "hideEasing": "cubic_out",
      "yaw": -117.08
     },
     {
      "id": "overlay_EADAD81B_FB34_B742_41E7_111F334A9D47",
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.4,
      "pitch": 29.43,
      "bleaching": 0.7,
      "yaw": 103.43
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_t.jpg"
   }
  ],
  "thumbnailUrl": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_t.jpg",
  "mapLocations": [
   {
    "y": 690.52,
    "angle": -45.88,
    "class": "PanoramaMapLocation",
    "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
    "x": 363.73
   }
  ],
  "hfovMin": 60,
  "pitch": 0,
  "id": "panorama_F2CA7815_FAEC_D746_41B4_366CE2486574"
 },
 {
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false,
  "buttonCardboardView": {
   "toolTipShadowBlurRadius": 3,
   "toolTipBorderSize": 1,
   "height": 50,
   "toolTipFontColor": "#606060",
   "paddingRight": 0,
   "toolTipPaddingTop": 4,
   "transparencyActive": false,
   "toolTipPaddingLeft": 6,
   "toolTipShadowColor": "#333333",
   "toolTipTextShadowOpacity": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipFontFamily": "Arial",
   "toolTipFontWeight": "normal",
   "minHeight": 1,
   "toolTipBorderColor": "#767676",
   "toolTipBorderRadius": 3,
   "mode": "push",
   "toolTipFontSize": 12,
   "toolTipTextShadowBlurRadius": 3,
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "minWidth": 1,
   "class": "IconButton",
   "toolTipPaddingBottom": 4,
   "iconURL": "skin/IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667.png",
   "toolTipOpacity": 1,
   "toolTipFontStyle": "normal",
   "toolTip": "VR",
   "backgroundOpacity": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowOpacity": 1,
   "toolTipPaddingRight": 6,
   "paddingBottom": 0,
   "cursor": "hand",
   "width": 75,
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowSpread": 0,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667",
   "toolTipShadowHorizontalLength": 0
  },
  "mouseControlMode": "drag_acceleration"
 },
 {
  "viewerArea": {
   "toolTipBorderSize": 1,
   "toolTipPaddingTop": 4,
   "playbackBarProgressBorderRadius": 0,
   "progressBarBorderRadius": 0,
   "progressBarBorderSize": 0,
   "transitionMode": "blending",
   "toolTipShadowColor": "#333333",
   "toolTipTextShadowOpacity": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipFontFamily": "Arial",
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarBorderRadius": 0,
   "toolTipFontWeight": "normal",
   "toolTipBorderRadius": 3,
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipFontSize": 12,
   "toolTipTextShadowBlurRadius": 3,
   "shadow": false,
   "playbackBarHeadBorderRadius": 0,
   "class": "ViewerArea",
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipOpacity": 1,
   "toolTipPaddingRight": 6,
   "progressLeft": 0,
   "playbackBarHeadBorderColor": "#000000",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowOpacity": 1,
   "playbackBarHeadShadowBlurRadius": 3,
   "paddingBottom": 0,
   "playbackBarBorderSize": 0,
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarBackgroundOpacity": 1,
   "playbackBarProgressOpacity": 1,
   "playbackBarLeft": 0,
   "id": "MapViewer",
   "width": "100%",
   "playbackBarHeadHeight": 15,
   "borderSize": 0,
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadBorderSize": 0,
   "toolTipShadowHorizontalLength": 0,
   "progressRight": 0,
   "playbackBarHeadShadowColor": "#000000",
   "progressOpacity": 1,
   "paddingRight": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipPaddingLeft": 6,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadow": true,
   "toolTipFontColor": "#606060",
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadOpacity": 1,
   "toolTipShadowSpread": 0,
   "progressBackgroundOpacity": 1,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarOpacity": 1,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "height": "100%",
   "progressBarOpacity": 1,
   "playbackBarBottom": 0,
   "progressBorderColor": "#000000",
   "progressBottom": 2,
   "minHeight": 1,
   "progressHeight": 10,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "progressBorderSize": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipFontStyle": "normal",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingTop": 0,
   "minWidth": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBorderRadius": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeight": 10,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarProgressBorderSize": 0,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarHeadWidth": 6,
   "playbackBarRight": 0,
   "toolTipTextShadowColor": "#000000",
   "playbackBarBorderColor": "#FFFFFF"
  },
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "movementMode": "constrained"
 },
 {
  "id": "panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 90,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C",
 {
  "id": "panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5D0513_FAEC_5942_41E5_388A78329396",
 {
  "id": "panorama_FD5D0513_FAEC_5942_41E5_388A78329396_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42",
 {
  "id": "panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A",
 {
  "id": "panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A",
 {
  "id": "panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2",
 {
  "id": "panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4",
 {
  "id": "panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03",
 {
  "id": "panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4",
 {
  "id": "panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2",
 {
  "id": "panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540",
 {
  "id": "panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E",
 {
  "id": "panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C",
 {
  "id": "panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442",
 {
  "id": "panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A",
 {
  "id": "panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD",
 {
  "id": "panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956",
 {
  "id": "panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16",
 {
  "id": "panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E",
 {
  "id": "panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF",
 {
  "id": "panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8",
 {
  "id": "panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "items": [
   {
    "media": "this.panorama_F2CA7815_FAEC_D746_41B4_366CE2486574",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25B7CABC_290D_5737_41B1_54995E207D59, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25B7CABC_290D_5737_41B1_54995E207D59",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25B67ABD_290D_5731_4193_FB528599B1DB, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25B67ABD_290D_5731_4193_FB528599B1DB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_FD5D0513_FAEC_5942_41E5_388A78329396",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25B68ABD_290D_5731_41BC_D4D537905E0F, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25B68ABD_290D_5731_41BC_D4D537905E0F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5D0513_FAEC_5942_41E5_388A78329396_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25B6CABD_290D_5731_41A2_EECDC96D9CCC, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25B6CABD_290D_5731_41A2_EECDC96D9CCC",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25B50ABE_290D_5733_41B1_08B8991BB1EF, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25B50ABE_290D_5733_41B1_08B8991BB1EF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25B55ABE_290D_5733_41BA_9C01962931C2, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25B55ABE_290D_5733_41BA_9C01962931C2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "media": "this.panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25B59ABE_290D_5733_41B1_C09B787C7DEB, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25B59ABE_290D_5733_41B1_C09B787C7DEB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "media": "this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25B42ABE_290D_5733_41B7_1B1DE738A0C1, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25B42ABE_290D_5733_41B7_1B1DE738A0C1",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "media": "this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25B46ABF_290D_5731_41C2_44E35756721B, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25B46ABF_290D_5731_41C2_44E35756721B",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "media": "this.panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25B4BABF_290D_5731_41C3_9C11E792B448, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25B4BABF_290D_5731_41C3_9C11E792B448",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "media": "this.panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25B4FABF_290D_5731_4197_09A6A45CF226, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25B4FABF_290D_5731_4197_09A6A45CF226",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "media": "this.panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25CB3AC0_290D_574F_4191_7B09E826C6DA, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25CB3AC0_290D_574F_4191_7B09E826C6DA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "media": "this.panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25CB4AC0_290D_574F_41C0_3CB67EB13EE2, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25CB4AC0_290D_574F_41C0_3CB67EB13EE2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "media": "this.panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25CB8AC0_290D_574F_41B3_E7DADDD417B5, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25CB8AC0_290D_574F_41B3_E7DADDD417B5",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "media": "this.panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25CBDAC1_290D_5751_41BA_1A612B3CC4CB, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25CBDAC1_290D_5751_41BA_1A612B3CC4CB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "media": "this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25CA1AC1_290D_5751_419F_BBC4DDDBBC7F, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25CA1AC1_290D_5751_419F_BBC4DDDBBC7F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "media": "this.panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25CAAAC1_290D_5751_41C2_D4086FFCB688, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25CAAAC1_290D_5751_41C2_D4086FFCB688",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "media": "this.panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25CAEAC1_290D_5751_4155_DC6CABEC8D64, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25CAEAC1_290D_5751_4155_DC6CABEC8D64",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "media": "this.panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25C92AC2_290D_5753_41A0_0DCCE237CB75, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25C92AC2_290D_5753_41A0_0DCCE237CB75",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "media": "this.panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25C97AC2_290D_5753_41B5_B0771E019DCB, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25C97AC2_290D_5753_41B5_B0771E019DCB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "media": "this.panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25C9BAC2_290D_5753_41C3_92FD431AF517, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25C9BAC2_290D_5753_41C3_92FD431AF517",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "media": "this.panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_25C9CAC3_290D_5751_41C2_B0E86E51FB24, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_25C9CAC3_290D_5751_41C2_B0E86E51FB24",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 0)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 0, 1)"
   },
   {
    "media": "this.panorama_FD5D0513_FAEC_5942_41E5_388A78329396",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5D0513_FAEC_5942_41E5_388A78329396_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 1, 2)"
   },
   {
    "media": "this.panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 2, 3)"
   },
   {
    "media": "this.panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 3, 4)"
   },
   {
    "media": "this.panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 4, 5)"
   },
   {
    "media": "this.panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 5, 0)"
   }
  ],
  "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
  "class": "PlayList"
 },
 "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
 {
  "items": [
   {
    "media": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_24FB0A8E_290D_57D3_4191_9924238306A8",
  "class": "PlayList"
 },
 "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
 {
  "items": [
   {
    "media": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_24FB7A8F_290D_5705_41B0_0B352C271291",
  "class": "PlayList"
 },
 "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
 {
  "items": [
   {
    "media": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_25B73ABC_290D_5737_41B3_4D4E0ACF75BE",
  "class": "PlayList"
 },
 {
  "id": "effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42",
  "class": "FadeInEffect",
  "easing": "linear",
  "duration": 1000
 },
 {
  "id": "effect_D3728F7A_DF8C_960C_417C_830810DD2653",
  "class": "FadeOutEffect",
  "easing": "linear",
  "duration": 1000
 },
 "this.popup_F03B81DB_FAF4_B8C2_41C4_C08345CF767C",
 {
  "id": "ImageResource_EA3A8206_FB3B_FB42_41EE_D3E5B37820C9",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_F03B81DB_FAF4_B8C2_41C4_C08345CF767C_0_0.jpg",
    "height": 1998,
    "class": "ImageResourceLevel",
    "width": 3551
   },
   {
    "url": "media/popup_F03B81DB_FAF4_B8C2_41C4_C08345CF767C_0_1.jpg",
    "height": 1152,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_F03B81DB_FAF4_B8C2_41C4_C08345CF767C_0_2.jpg",
    "height": 576,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_F03B81DB_FAF4_B8C2_41C4_C08345CF767C_0_3.jpg",
    "height": 288,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_22AACE67_290C_EF51_41C0_118FEA07A2FD",
 {
  "id": "ImageResource_229C3C5A_290D_7373_41A8_9DB8C0D887A8",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_22AACE67_290C_EF51_41C0_118FEA07A2FD_0_0.jpg",
    "height": 1500,
    "class": "ImageResourceLevel",
    "width": 1500
   },
   {
    "url": "media/popup_22AACE67_290C_EF51_41C0_118FEA07A2FD_0_1.jpg",
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_22AACE67_290C_EF51_41C0_118FEA07A2FD_0_2.jpg",
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_EB21489D_FB2C_B746_41D8_3A0D763EA5AF",
 {
  "id": "ImageResource_EA3E620C_FB3B_FB46_41DB_4A6CBC3FC317",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_EB21489D_FB2C_B746_41D8_3A0D763EA5AF_0_0.jpg",
    "height": 1998,
    "class": "ImageResourceLevel",
    "width": 3551
   },
   {
    "url": "media/popup_EB21489D_FB2C_B746_41D8_3A0D763EA5AF_0_1.jpg",
    "height": 1152,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_EB21489D_FB2C_B746_41D8_3A0D763EA5AF_0_2.jpg",
    "height": 576,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_EB21489D_FB2C_B746_41D8_3A0D763EA5AF_0_3.jpg",
    "height": 288,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_F049F018_FAF4_774E_41D1_C04E6224ACE3",
 {
  "id": "ImageResource_EA38020B_FB3B_FB42_41ED_4428E852F1CC",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_F049F018_FAF4_774E_41D1_C04E6224ACE3_0_0.jpg",
    "height": 1998,
    "class": "ImageResourceLevel",
    "width": 3551
   },
   {
    "url": "media/popup_F049F018_FAF4_774E_41D1_C04E6224ACE3_0_1.jpg",
    "height": 1152,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_F049F018_FAF4_774E_41D1_C04E6224ACE3_0_2.jpg",
    "height": 576,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_F049F018_FAF4_774E_41D1_C04E6224ACE3_0_3.jpg",
    "height": 288,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_EB8AED66_FB2F_E9C2_41E6_4EC758A048EE",
 {
  "id": "ImageResource_EA224210_FB3B_FB5E_41B8_D5A45B002493",
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_EB8AED66_FB2F_E9C2_41E6_4EC758A048EE_0_0.jpg",
    "height": 1500,
    "class": "ImageResourceLevel",
    "width": 1500
   },
   {
    "url": "media/popup_EB8AED66_FB2F_E9C2_41E6_4EC758A048EE_0_1.jpg",
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_EB8AED66_FB2F_E9C2_41E6_4EC758A048EE_0_2.jpg",
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 {
  "id": "camera_25C64ADA_290D_5773_41C3_8E316B12C735",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 113.96
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_25C41AE5_290D_5751_41BE_B629A0044304",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 146.15
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_25D96AEE_290D_5753_41A0_9CAF4A19F1D0",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -32.96
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_25DE7AF8_290D_573F_41C1_2A60AB018711",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -2.85
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_25D3AB02_290D_56D3_4175_0013F4A8250E",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -177.36
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_25D0EB0C_290D_56D7_41B9_F21FC583C2CD",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 161.76
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_25D5FB16_290D_56F3_41B1_6419194B8FE3",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -51.63
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_25E94B1F_290D_56F1_41B2_10101F483DDC",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -156.32
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_25EECB29_290D_56D1_41C1_48425FAB11D4",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 9.91
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_25E25B33_290D_5531_4192_98DC11D80A40",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -46.83
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_25E7FB3D_290D_5531_41B8_1D7AEC85D30F",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -37.78
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_25FB8B48_290D_555F_41B9_F3230A4917AF",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 105.73
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_25FFAB52_290D_5573_417B_D7EC18146A9D",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -50.69
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_25FCFB5C_290D_5577_41C1_80B916279D82",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -125.26
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_25F0DB66_290D_5553_41C1_765D5BD577DA",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 91.87
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_240B4B70_290D_554F_4192_94A464790236",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -175.14
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_240FEB7A_290D_5533_41B6_379E3CF1BD52",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 170.43
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_24025B88_290D_55DF_41C2_D49E2ACB8BD5",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 84.61
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2406AB93_290D_55F1_4190_20F5895413A8",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 16.15
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_241ADB9E_290D_55F3_4129_35B215D45E30",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 39.99
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_241D7BA8_290D_55DF_41B9_15322A16921D",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 21.93
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_24118BB3_290D_5531_41A8_C167436C8C5D",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -95.75
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_24142BBF_290D_5531_41A7_103356C02A17",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -169.26
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_24284BCA_290D_5553_4195_FA38FB3FE265",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 173.85
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_24233BD5_290D_5571_41C1_F315EF4AAB36",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -13.34
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_24270BDF_290D_5571_41A1_ACE2DADCEC33",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -2.44
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_243B9BE9_290D_5551_41B1_81EB95BBE91F",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -93.2
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_243E0BF2_290D_5530_41C2_2D8A7892C5B0",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -34.86
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2432BBFD_290D_5531_41B6_E45943EE3DD2",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -81.34
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2436BC07_290D_52D1_41C1_08A068E9F754",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 90,
   "yaw": -138.63
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_24492C12_290D_52F3_41B4_5B71708362D4",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 169.46
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_244DFC1C_290D_52F7_41B1_EB5EBBD3061E",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -115.77
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_24402C26_290D_52D3_41BD_C26D3CAA5B41",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -145.8
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2444BC30_290D_52CF_41A8_A497CA0DEB1C",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 137.44
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2458FC3A_290D_5333_417D_4429ACAA5A36",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 19.94
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2453AC45_290D_5351_41AD_8407B90E5523",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -95.28
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_24558C4F_290D_5351_41A3_FA3C08E69D58",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -19.69
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_246DAC59_290D_5371_419A_02FDA261A97D",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 1.71
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2466DC62_290D_5353_41B9_E443C700EA95",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 169.25
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_247F9C6C_290D_5357_419F_9E48B5E6727E",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -109.84
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2476AC85_290D_53D1_4121_F161A5C222A0",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -171.44
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_248FCC95_290D_53F1_41C3_9624AD59B9B0",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -159.07
  },
  "automaticZoomSpeed": 10
 },
 {
  "image": {
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_B64C568F_BD85_29CF_41E2_F9997BF3F5D0.jpg"
    }
   ],
   "class": "ImageResource"
  },
  "label": "Planta-de-Distribuci\u00f3n-Nivel-1",
  "thumbnailUrl": "media/photo_B64C568F_BD85_29CF_41E2_F9997BF3F5D0_t.jpg",
  "width": 1500,
  "height": 1500,
  "id": "photo_B64C568F_BD85_29CF_41E2_F9997BF3F5D0",
  "class": "Photo",
  "duration": 5000
 },
 {
  "image": {
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_B728384A_BD85_38B1_41E1_33C933E2F91F.jpg"
    }
   ],
   "class": "ImageResource"
  },
  "label": "Planta-de-Distribuci\u00f3n-Nivel-2",
  "thumbnailUrl": "media/photo_B728384A_BD85_38B1_41E1_33C933E2F91F_t.jpg",
  "width": 1500,
  "height": 1500,
  "id": "photo_B728384A_BD85_38B1_41E1_33C933E2F91F",
  "class": "Photo",
  "duration": 5000
 }
], "children": [
 {
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "top": 0,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 0,
  "transitionMode": "blending",
  "borderRadius": 0,
  "paddingLeft": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipFontFamily": "Arial",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontSize": 12,
  "toolTipTextShadowBlurRadius": 3,
  "shadow": false,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipOpacity": 1,
  "toolTipPaddingRight": 6,
  "progressLeft": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "paddingBottom": 0,
  "playbackBarBorderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "playbackBarLeft": 0,
  "id": "MainViewer",
  "width": "100%",
  "playbackBarHeadHeight": 15,
  "borderSize": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "toolTipShadowHorizontalLength": 0,
  "progressRight": 0,
  "toolTipShadowSpread": 0,
  "progressOpacity": 1,
  "paddingRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "height": "100%",
  "progressBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarOpacity": 1,
  "playbackBarBottom": 5,
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#000000",
  "progressBottom": 0,
  "minHeight": 50,
  "progressHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingTop": 0,
  "minWidth": 100,
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "left": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeight": 10,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontStyle": "normal",
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "playbackBarRight": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderColor": "#FFFFFF"
 },
 {
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "height": "18.033%",
  "paddingRight": 0,
  "bottom": "0%",
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingLeft": 0,
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 1,
  "class": "Container",
  "left": "0%",
  "scrollBarMargin": 2,
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "overflow": "scroll",
  "width": "100%",
  "horizontalAlign": "center",
  "id": "Container_D19AA380_DE1B_2AF3_41EA_D9B3468B686F",
  "children": [
   {
    "scrollBarColor": "#000000",
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "backgroundColorDirection": "vertical",
    "paddingRight": 0,
    "height": 77,
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingLeft": 0,
    "backgroundColorRatios": [
     0.8
    ],
    "minHeight": 77,
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "shadow": false,
    "paddingTop": 0,
    "minWidth": 334,
    "class": "Container",
    "scrollBarMargin": 2,
    "layout": "horizontal",
    "backgroundOpacity": 0.1,
    "overflow": "scroll",
    "backgroundColor": [
     "#000000"
    ],
    "paddingBottom": 0,
    "width": 334,
    "borderSize": 0,
    "horizontalAlign": "center",
    "id": "Container_FD43509A_EC70_8CA6_41E8_9E5B7D453FAE",
    "children": [
     {
      "visible": false,
      "toolTipShadowBlurRadius": 3,
      "toolTipBorderSize": 1,
      "height": 50,
      "toolTipFontColor": "#606060",
      "paddingRight": 0,
      "toolTipPaddingTop": 4,
      "transparencyActive": true,
      "toolTipPaddingLeft": 6,
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 0,
      "borderRadius": 0,
      "paddingLeft": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipFontFamily": "Arial",
      "toolTipFontWeight": "normal",
      "mode": "toggle",
      "toolTipBorderColor": "#767676",
      "toolTipBorderRadius": 3,
      "verticalAlign": "middle",
      "toolTipFontSize": 12,
      "toolTipTextShadowBlurRadius": 3,
      "shadow": false,
      "paddingTop": 0,
      "minWidth": 1,
      "class": "IconButton",
      "toolTipPaddingBottom": 4,
      "iconURL": "skin/IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9.png",
      "toolTipOpacity": 1,
      "toolTipFontStyle": "normal",
      "toolTip": "Info",
      "pressedIconURL": "skin/IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9_pressed.png",
      "backgroundOpacity": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingRight": 6,
      "paddingBottom": 0,
      "cursor": "hand",
      "width": 75,
      "minHeight": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowSpread": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "id": "IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9",
      "toolTipShadowHorizontalLength": 0
     },
     {
      "toolTipShadowBlurRadius": 3,
      "toolTipBorderSize": 1,
      "height": 50,
      "toolTipFontColor": "#606060",
      "paddingRight": 0,
      "toolTipPaddingTop": 4,
      "transparencyActive": true,
      "toolTipPaddingLeft": 6,
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 0,
      "borderRadius": 0,
      "paddingLeft": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipFontFamily": "Arial",
      "toolTipFontWeight": "normal",
      "mode": "toggle",
      "toolTipBorderColor": "#767676",
      "toolTipBorderRadius": 3,
      "minHeight": 1,
      "toolTipFontSize": 12,
      "toolTipTextShadowBlurRadius": 3,
      "verticalAlign": "middle",
      "shadow": false,
      "paddingTop": 0,
      "minWidth": 1,
      "class": "IconButton",
      "toolTipPaddingBottom": 4,
      "iconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0.png",
      "toolTipOpacity": 1,
      "click": "this.mainPlayList.set('selectedIndex', 1)",
      "toolTipFontStyle": "normal",
      "toolTip": "Casa Modelo",
      "pressedIconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0_pressed.png",
      "backgroundOpacity": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingRight": 6,
      "paddingBottom": 0,
      "cursor": "hand",
      "width": 75,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowSpread": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "id": "IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0",
      "toolTipShadowHorizontalLength": 0
     },
     {
      "toolTipShadowBlurRadius": 3,
      "toolTipBorderSize": 1,
      "height": 50,
      "toolTipFontColor": "#606060",
      "paddingRight": 0,
      "toolTipPaddingTop": 4,
      "transparencyActive": true,
      "toolTipPaddingLeft": 6,
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 0,
      "borderRadius": 0,
      "paddingLeft": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipFontFamily": "Arial",
      "toolTipFontWeight": "normal",
      "mode": "toggle",
      "toolTipBorderColor": "#767676",
      "toolTipBorderRadius": 3,
      "minHeight": 1,
      "toolTipFontSize": 12,
      "toolTipTextShadowBlurRadius": 3,
      "verticalAlign": "middle",
      "shadow": false,
      "paddingTop": 0,
      "minWidth": 1,
      "class": "IconButton",
      "toolTipPaddingBottom": 4,
      "iconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2.png",
      "toolTipOpacity": 1,
      "click": "if(!this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, true, 0, this.effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42, 'showEffect', false) } else if(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, false, 0, this.effect_D3728F7A_DF8C_960C_417C_830810DD2653, 'hideEffect', false) }",
      "toolTipFontStyle": "normal",
      "toolTip": "Mapa",
      "pressedIconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2_pressed.png",
      "backgroundOpacity": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowOpacity": 1,
      "toolTipPaddingRight": 6,
      "paddingBottom": 0,
      "cursor": "hand",
      "width": 75,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowSpread": 0,
      "borderSize": 0,
      "horizontalAlign": "center",
      "id": "IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2",
      "toolTipShadowHorizontalLength": 0
     },
     "this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667"
    ]
   }
  ]
 },
 {
  "scrollBarColor": "#000000",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "height": "77.049%",
  "paddingRight": 0,
  "top": "2.05%",
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingLeft": 0,
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 1,
  "class": "Container",
  "scrollBarMargin": 2,
  "layout": "vertical",
  "backgroundOpacity": 0,
  "overflow": "scroll",
  "paddingBottom": 0,
  "width": "29.316%",
  "borderSize": 0,
  "horizontalAlign": "center",
  "id": "Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F",
  "right": "0%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "paddingRight": 0,
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingLeft": 0,
    "minHeight": 1,
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "shadow": false,
    "paddingTop": 0,
    "minWidth": 1,
    "class": "Container",
    "scrollBarMargin": 2,
    "layout": "vertical",
    "backgroundOpacity": 0,
    "overflow": "scroll",
    "paddingBottom": 0,
    "width": "100%",
    "borderSize": 0,
    "horizontalAlign": "center",
    "id": "Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5",
    "children": [
     "this.MapViewer"
    ]
   }
  ]
 },
 {
  "scrollBarColor": "#000000",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "height": "10%",
  "paddingRight": 0,
  "top": "0.96%",
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingLeft": 0,
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 1,
  "class": "Container",
  "left": "0%",
  "scrollBarMargin": 2,
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "overflow": "scroll",
  "width": "100%",
  "borderSize": 0,
  "horizontalAlign": "left",
  "id": "Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F",
  "children": [
   {
    "gap": 0,
    "paddingRight": 5,
    "popUpFontColor": "#000000",
    "fontSize": 14,
    "backgroundColorDirection": "vertical",
    "borderSize": 0,
    "popUpBackgroundColor": "#FFFFFF",
    "fontColor": "#333333",
    "popUpBackgroundOpacity": 0.72,
    "fontFamily": "Arial",
    "playList": "this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
    "prompt": "Ubicaciones",
    "fontStyle": "normal",
    "borderRadius": 4,
    "popUpShadowBlurRadius": 6,
    "paddingLeft": 5,
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "height": "27.397%",
    "selectedPopUpFontColor": "#FFFFFF",
    "backgroundColorRatios": [
     0,
     1
    ],
    "fontWeight": "normal",
    "minHeight": 20,
    "popUpShadowColor": "#000000",
    "popUpShadowSpread": 1,
    "popUpShadowOpacity": 0,
    "shadow": false,
    "paddingTop": 0,
    "minWidth": 200,
    "class": "DropDown",
    "popUpBorderRadius": 0,
    "selectedPopUpBackgroundColor": "#0066FF",
    "arrowColor": "#0066FF",
    "backgroundOpacity": 0.72,
    "backgroundColor": [
     "#00CCFF",
     "#0099FF"
    ],
    "paddingBottom": 0,
    "arrowBeforeLabel": false,
    "textDecoration": "none",
    "width": "20.256%",
    "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F",
    "popUpShadow": false
   }
  ]
 },
 {
  "fontFamily": "Arial",
  "fontSize": 20,
  "height": "10%",
  "paddingRight": 0,
  "visible": false,
  "top": "0%",
  "fontColor": "#FFFFFF",
  "textShadowColor": "#000000",
  "fontStyle": "normal",
  "borderRadius": 0,
  "paddingLeft": 0,
  "textShadowHorizontalLength": 1,
  "fontWeight": "normal",
  "minHeight": 1,
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 1,
  "class": "Label",
  "textShadowBlurRadius": 3,
  "left": "0%",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "text": "La Lima Free Zone",
  "textDecoration": "none",
  "textShadowVerticalLength": 1,
  "width": "100%",
  "borderSize": 0,
  "horizontalAlign": "center",
  "id": "Label_E2D61738_F65E_D8BA_41DD_6888E340C197",
  "textShadowOpacity": 1
 },
 {
  "fontFamily": "Arial",
  "fontSize": 20,
  "height": "10%",
  "paddingRight": 0,
  "visible": false,
  "top": "0%",
  "fontColor": "#FFFFFF",
  "textShadowColor": "#000000",
  "fontStyle": "normal",
  "borderRadius": 0,
  "paddingLeft": 0,
  "textShadowHorizontalLength": 1,
  "fontWeight": "normal",
  "minHeight": 1,
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 1,
  "class": "Label",
  "textShadowBlurRadius": 3,
  "left": "0%",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "text": "Cartago City",
  "textDecoration": "none",
  "textShadowVerticalLength": 1,
  "width": "100%",
  "borderSize": 0,
  "horizontalAlign": "center",
  "id": "Label_E253EC4C_F622_28DA_41DB_546DF82EE842",
  "textShadowOpacity": 1
 },
 {
  "fontFamily": "Arial",
  "fontSize": 20,
  "height": "13.108%",
  "paddingRight": 0,
  "visible": false,
  "top": "0%",
  "fontColor": "#FFFFFF",
  "textShadowColor": "#000000",
  "fontStyle": "normal",
  "borderRadius": 0,
  "paddingLeft": 0,
  "textShadowHorizontalLength": 1,
  "fontWeight": "normal",
  "minHeight": 1,
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 1,
  "class": "Label",
  "textShadowBlurRadius": 3,
  "left": "0%",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "text": "Corporate Center Project",
  "textDecoration": "none",
  "textShadowVerticalLength": 1,
  "width": "100%",
  "borderSize": 0,
  "horizontalAlign": "center",
  "id": "Label_E216BE12_F622_684F_41EC_C2D2817E217E",
  "textShadowOpacity": 1
 },
 {
  "fontFamily": "Arial",
  "fontSize": 20,
  "height": "3.5%",
  "paddingRight": 0,
  "visible": false,
  "top": "6%",
  "fontColor": "#FFFFFF",
  "textShadowColor": "#000000",
  "fontStyle": "normal",
  "borderRadius": 0,
  "paddingLeft": 0,
  "textShadowHorizontalLength": 1,
  "fontWeight": "normal",
  "minHeight": 1,
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 1,
  "class": "Label",
  "textShadowBlurRadius": 3,
  "left": "0%",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "text": "Corporate Building",
  "textDecoration": "none",
  "textShadowVerticalLength": 1,
  "width": "100%",
  "borderSize": 0,
  "horizontalAlign": "center",
  "id": "Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515",
  "textShadowOpacity": 1
 },
 {
  "scrollBarColor": "#000000",
  "gap": 10,
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "height": "100%",
  "backgroundColorDirection": "vertical",
  "borderSize": 0,
  "top": "0%",
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingLeft": 0,
  "backgroundColorRatios": [
   0
  ],
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 1,
  "class": "Container",
  "left": "0%",
  "scrollBarMargin": 2,
  "layout": "absolute",
  "backgroundOpacity": 0.3,
  "backgroundColor": [
   "#000000"
  ],
  "paddingBottom": 0,
  "overflow": "scroll",
  "width": "100%",
  "visible": false,
  "horizontalAlign": "left",
  "id": "Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E",
  "children": [
   {
    "scrollBarColor": "#000000",
    "gap": 10,
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "height": "91.081%",
    "backgroundColorDirection": "vertical",
    "borderSize": 0,
    "bottom": "3.11%",
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingLeft": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "minHeight": 1,
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "verticalAlign": "top",
    "shadow": false,
    "paddingTop": 0,
    "minWidth": 1,
    "class": "Container",
    "left": "4.32%",
    "scrollBarMargin": 2,
    "layout": "absolute",
    "backgroundOpacity": 0.3,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingBottom": 0,
    "overflow": "scroll",
    "width": "91.341%",
    "horizontalAlign": "left",
    "id": "Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41",
    "children": [
     {
      "url": "https://www.xline3d.com/360/lalimav6.html",
      "paddingRight": 0,
      "height": "100%",
      "backgroundColorDirection": "vertical",
      "borderSize": 0,
      "top": "0%",
      "insetBorder": false,
      "borderRadius": 0,
      "paddingLeft": 0,
      "backgroundColorRatios": [
       0
      ],
      "minHeight": 1,
      "shadow": false,
      "paddingTop": 0,
      "minWidth": 1,
      "class": "WebFrame",
      "backgroundOpacity": 1,
      "scrollEnabled": true,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingBottom": 0,
      "width": "99.907%",
      "right": "0%",
      "id": "WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21"
     },
     {
      "url": "skin/Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418.png",
      "borderSize": 0,
      "paddingRight": 0,
      "height": "10.979%",
      "top": "0%",
      "maxHeight": 396,
      "maxWidth": 394,
      "borderRadius": 0,
      "paddingLeft": 0,
      "minHeight": 40,
      "scaleMode": "fit_inside",
      "verticalAlign": "middle",
      "shadow": false,
      "paddingTop": 0,
      "minWidth": 40,
      "class": "Image",
      "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, false, 0, null, null, false)",
      "right": "0%",
      "backgroundOpacity": 0,
      "width": "6.97%",
      "paddingBottom": 0,
      "horizontalAlign": "center",
      "id": "Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418"
     }
    ]
   }
  ]
 },
 {
  "paddingRight": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "backgroundColorDirection": "vertical",
  "borderSize": 0,
  "top": 0,
  "bottom": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "backgroundColorRatios": [
   0
  ],
  "minHeight": 0,
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 0,
  "class": "UIComponent",
  "left": 0,
  "backgroundOpacity": 0.55,
  "backgroundColor": [
   "#000000"
  ],
  "paddingBottom": 0,
  "right": 0,
  "visible": false,
  "id": "veilPopupPanorama"
 },
 {
  "paddingRight": 0,
  "backgroundColorDirection": "vertical",
  "borderSize": 0,
  "top": 0,
  "bottom": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "backgroundColorRatios": [],
  "minHeight": 0,
  "scaleMode": "custom",
  "shadow": false,
  "paddingTop": 0,
  "minWidth": 0,
  "class": "ZoomImage",
  "left": 0,
  "backgroundOpacity": 1,
  "backgroundColor": [],
  "paddingBottom": 0,
  "right": 0,
  "visible": false,
  "id": "zoomImagePopupPanorama"
 },
 {
  "visible": false,
  "shadowColor": "#000000",
  "paddingRight": 5,
  "iconLineWidth": 5,
  "backgroundColorDirection": "vertical",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "fontFamily": "Arial",
  "top": 10,
  "fontColor": "#FFFFFF",
  "shadowBlurRadius": 6,
  "fontSize": 12,
  "fontStyle": "normal",
  "pressedIconColor": "#888888",
  "borderRadius": 0,
  "iconHeight": 20,
  "label": "",
  "paddingLeft": 5,
  "borderColor": "#000000",
  "gap": 5,
  "iconWidth": 20,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "fontWeight": "normal",
  "minHeight": 0,
  "rollOverIconColor": "#666666",
  "iconBeforeLabel": true,
  "mode": "push",
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 5,
  "shadowSpread": 1,
  "minWidth": 0,
  "class": "CloseButton",
  "layout": "horizontal",
  "backgroundOpacity": 0.3,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingBottom": 5,
  "cursor": "hand",
  "textDecoration": "none",
  "borderSize": 0,
  "horizontalAlign": "center",
  "id": "closeButtonPopupPanorama",
  "right": 10,
  "iconColor": "#000000"
 }
], 
 "scrollBarColor": "#000000",
 "gap": 10,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_24FB0A8E_290D_57D3_4191_9924238306A8.set('selectedIndex', 0)",
 "borderSize": 0,
 "scripts": {
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "getKey": function(key){    return window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "existsKey": function(key){    return key in window; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "unregisterKey": function(key){    delete window[key]; },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){    var self = this;   this.MainViewer.set('toolTipEnabled', false);   var cardboardEnabled = this.isCardboardViewMode();   if(!cardboardEnabled) {       var zoomImage = this.zoomImagePopupPanorama;       var showDuration = popupPanoramaOverlay.get('showDuration');       var hideDuration = popupPanoramaOverlay.get('hideDuration');       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth');       var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight');       var showEndFunction = function() {           var loadedFunction = function(){               if(!self.isCardboardViewMode())                   popupPanoramaOverlay.set('visible', false);           };           popupPanoramaOverlay.unbind('showEnd', showEndFunction, self);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', 1);           self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null,            closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction);       };       var hideFunction = function() {           var restoreShowDurationFunction = function(){                popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self);                popupPanoramaOverlay.set('visible', false);               popupPanoramaOverlay.set('showDuration', showDuration);               popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup);               popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup);           };           self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio);           var currentWidth = zoomImage.get('imageWidth');           var currentHeight = zoomImage.get('imageHeight');           popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', hideDuration);           popupPanoramaOverlay.set('popupMaxWidth', currentWidth);           popupPanoramaOverlay.set('popupMaxHeight', currentHeight);          if(popupPanoramaOverlay.get('visible'))              restoreShowDurationFunction();          else              popupPanoramaOverlay.set('visible', true);           self.MainViewer.set('toolTipEnabled', true);       };       if(!imageHD){           imageHD = popupPanoramaOverlay.get('image');       }       if(!toggleImageHD && toggleImage){           toggleImageHD = toggleImage;       }       popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   } else {       var hideEndFunction = function() {           self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);           if(audio){               if(stopBackgroundAudio){                   self.resumeGlobalAudios();               }               self.stopGlobalAudio(audio);           }           popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self);           self.MainViewer.set('toolTipEnabled', true);       };       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               this.pauseGlobalAudios();           }           this.playGlobalAudio(audio);       }       popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true);   }   popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "registerKey": function(key, value){    window[key] = value; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; }
 },
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "minWidth": 20,
 "class": "Player",
 "mouseWheelEnabled": true,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "overflow": "visible",
 "paddingBottom": 0,
 "width": "100%",
 "backgroundPreloadEnabled": true,
 "horizontalAlign": "left",
 "id": "rootPlayer"
})