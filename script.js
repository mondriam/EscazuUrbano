TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "mapLocations": [
   {
    "y": 690.52,
    "class": "PanoramaMapLocation",
    "map": {
     "scaleMode": "fit_inside",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B.png",
        "height": 800,
        "class": "ImageResourceLevel",
        "width": 431
       },
       {
        "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_lq.png",
        "height": 400,
        "class": "ImageResourceLevel",
        "grayscale": true,
        "width": 215
       }
      ]
     },
     "class": "Map",
     "initialZoomFactor": 1,
     "label": "Master-Plan-Map",
     "minimumZoomFactor": 0.5,
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "maximumZoomFactor": 1.2,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "overlays": [
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_0.png",
           "height": 24,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 25,
        "x": 351.23,
        "height": 25,
        "y": 678.02
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 678.02,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_0_map.gif",
           "height": 12,
           "class": "ImageResourceLevel",
           "width": 12
          }
         ]
        },
        "width": 25,
        "x": 351.23
       },
       "id": "overlay_BD09ACE0_AE30_3F13_41BD_5FFF039982FA",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_1.png",
           "height": 24,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 25,
        "x": 339.92,
        "height": 25,
        "y": 639.55
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 639.55,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_1_map.gif",
           "height": 12,
           "class": "ImageResourceLevel",
           "width": 12
          }
         ]
        },
        "width": 25,
        "x": 339.92
       },
       "id": "overlay_BDD12C0E_AE31_FF2F_41D8_E01744C9245E",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_2.png",
           "height": 24,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 25,
        "x": 350.5,
        "height": 25,
        "y": 595.76
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 595.76,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_2_map.gif",
           "height": 12,
           "class": "ImageResourceLevel",
           "width": 12
          }
         ]
        },
        "width": 25,
        "x": 350.5
       },
       "id": "overlay_BDD572A2_AE30_EB17_41E2_013B4E1D1816",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_3.png",
           "height": 24,
           "class": "ImageResourceLevel",
           "width": 28
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 28.39,
        "x": 377.65,
        "height": 25,
        "y": 600.85
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 600.85,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_3_map.gif",
           "height": 12,
           "class": "ImageResourceLevel",
           "width": 14
          }
         ]
        },
        "width": 28.39,
        "x": 377.65
       },
       "id": "overlay_BDFDB098_AE33_E732_41E2_82C9C3FBBDEC",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_4.png",
           "height": 24,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 25,
        "x": 381.39,
        "height": 25,
        "y": 647.52
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 647.52,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_4_map.gif",
           "height": 12,
           "class": "ImageResourceLevel",
           "width": 12
          }
         ]
        },
        "width": 25,
        "x": 381.39
       },
       "id": "overlay_BAAAD66C_AE30_6B13_41E4_41C4AF787B88",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_5.png",
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 25,
        "x": 216.01,
        "height": 25,
        "y": 84.81
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 84.81,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_5_map.gif",
           "height": 12,
           "class": "ImageResourceLevel",
           "width": 12
          }
         ]
        },
        "width": 25,
        "x": 216.01
       },
       "id": "overlay_B85AADD9_AE30_7935_418C_49774A3F1323",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 9)"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_6.png",
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 25,
        "x": 264.33,
        "height": 25,
        "y": 658.61
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 658.61,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_6_map.gif",
           "height": 12,
           "class": "ImageResourceLevel",
           "width": 12
          }
         ]
        },
        "width": 25,
        "x": 264.33
       },
       "id": "overlay_BAF4F184_AE30_2913_41D7_D5320C010656",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 10)"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_7.png",
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 25,
        "x": 180.82,
        "height": 25,
        "y": 638.76
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 638.76,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_7_map.gif",
           "height": 12,
           "class": "ImageResourceLevel",
           "width": 12
          }
         ]
        },
        "width": 25,
        "x": 180.82
       },
       "id": "overlay_BB8BD87E_AE30_27EF_41CD_3E50E37DC6C9",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 11)"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_8.png",
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 25,
        "x": 88.32,
        "height": 25,
        "y": 264.16
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 264.16,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_8_map.gif",
           "height": 12,
           "class": "ImageResourceLevel",
           "width": 12
          }
         ]
        },
        "width": 25,
        "x": 88.32
       },
       "id": "overlay_B861AF51_AE50_7935_41D1_7279F4D9342F",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 12)"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_9.png",
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 25,
        "x": 372.96,
        "height": 25,
        "y": 575.73
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 575.73,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_9_map.gif",
           "height": 12,
           "class": "ImageResourceLevel",
           "width": 12
          }
         ]
        },
        "width": 25,
        "x": 372.96
       },
       "id": "overlay_9B8B69CB_BD7D_6BCF_41D2_C3E1DE217D96",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_10.png",
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 25,
        "x": 126.34,
        "height": 25,
        "y": 215.9
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 215.9,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_10_map.gif",
           "height": 12,
           "class": "ImageResourceLevel",
           "width": 12
          }
         ]
        },
        "width": 25,
        "x": 126.34
       },
       "id": "overlay_9A15731C_BD7D_D84A_41E0_DA389A2E262F",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ]
      },
      {
       "image": {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_11.png",
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 25,
        "x": 385.8,
        "height": 25,
        "y": 609.9
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 609.9,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_11_map.gif",
           "height": 12,
           "class": "ImageResourceLevel",
           "width": 12
          }
         ]
        },
        "width": 25,
        "x": 385.8
       },
       "id": "overlay_E8BB89E7_FB2C_68C2_41EC_D51790EAE183",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ]
      }
     ],
     "fieldOfViewOverlayRadiusScale": 0.2,
     "height": 800,
     "width": 431,
     "thumbnailUrl": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_t.png",
     "id": "map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
     "fieldOfViewOverlayInsideColor": "#000000"
    },
    "angle": -45.88,
    "x": 363.73
   }
  ],
  "class": "Panorama",
  "partial": false,
  "label": "Start",
  "hfovMax": 120,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "panorama": {
     "mapLocations": [
      {
       "y": 652.05,
       "class": "PanoramaMapLocation",
       "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
       "angle": -25.27,
       "x": 352.42
      }
     ],
     "class": "Panorama",
     "partial": false,
     "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 11.54.26.19",
     "hfovMax": 120,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": {
        "mapLocations": [
         {
          "y": 97.31,
          "class": "PanoramaMapLocation",
          "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
          "angle": -16.76,
          "x": 228.51
         }
        ],
        "class": "Panorama",
        "partial": false,
        "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 11.59.40.22",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4",
          "class": "AdjacentPanorama",
          "backwardYaw": 20.93,
          "yaw": 177.56,
          "distance": 1
         }
        ],
        "id": "panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
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
           ]
          },
          "front": {
           "class": "ImageResource",
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
           ]
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "class": "ImageResource",
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
           ]
          },
          "top": {
           "class": "ImageResource",
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
           ]
          },
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_F15EAAE5_FAFB_A8C6_41AA_44AF8124BB6C",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_0_HS_0_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.79,
              "pitch": -1.64,
              "yaw": 177.56
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4, this.camera_0374E99F_09DA_CFA7_41A1_F6160754B073); this.mainPlayList.set('selectedIndex', 7)"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_0_HS_0_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ]
              },
              "pitch": -1.64,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 177.56,
              "hfov": 8.79
             }
            ]
           },
           {
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": 40.1,
            "id": "overlay_EAD96647_FB34_7BC2_41C3_AF26CC6B4878",
            "bleaching": 0.7,
            "yaw": 51.24
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_F24D939B_FB7E_D434_41A7_759DB6EB8BE4",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_0_HS_1_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.79,
              "pitch": -1.44,
              "yaw": -79.51
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_0_HS_1_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ]
              },
              "pitch": -1.44,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -79.51,
              "hfov": 8.79
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
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
           ]
          },
          "left": {
           "class": "ImageResource",
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
           ]
          },
          "thumbnailUrl": "media/panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 177.56,
       "yaw": 20.93,
       "distance": 1
      },
      {
       "panorama": {
        "mapLocations": [
         {
          "y": 608.26,
          "class": "PanoramaMapLocation",
          "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
          "angle": 64.36,
          "x": 363
         }
        ],
        "class": "Panorama",
        "partial": false,
        "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 11.55.17.49",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": {
           "mapLocations": [
            {
             "y": 588.23,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "angle": 245.2,
             "x": 385.46
            }
           ],
           "class": "Panorama",
           "partial": false,
           "label": "Co-Working",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03",
             "class": "AdjacentPanorama",
             "backwardYaw": -33.85,
             "yaw": -10.75,
             "distance": 1
            }
           ],
           "id": "panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
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
              ]
             },
             "front": {
              "class": "ImageResource",
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
              ]
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "class": "ImageResource",
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
              ]
             },
             "top": {
              "class": "ImageResource",
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
              ]
             },
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_F01F1B4E_FAFF_A9C2_41E0_A280E6F6535F",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.29,
                 "pitch": -19.37,
                 "yaw": -10.75
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03, this.camera_03477980_09DA_CF99_41A2_7F8883A3765C); this.mainPlayList.set('selectedIndex', 8)"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ]
                 },
                 "pitch": -19.37,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -10.75,
                 "hfov": 8.29
                }
               ]
              },
              {
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 54.95,
               "id": "overlay_EADCD85D_FB34_D7C6_41C5_6AD05A6E8C6D",
               "bleaching": 0.7,
               "yaw": -54.29
              },
              {
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 48.86,
               "id": "overlay_EAD0FC75_FB34_AFC6_41E8_765EAF856A7F",
               "bleaching": 0.7,
               "yaw": 93.14
              }
             ],
             "bottom": {
              "class": "ImageResource",
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
              ]
             },
             "left": {
              "class": "ImageResource",
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
              ]
             },
             "thumbnailUrl": "media/panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": -10.75,
          "yaw": -33.85,
          "distance": 1
         },
         {
          "panorama": {
           "mapLocations": [
            {
             "y": 660.02,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "angle": 151.43,
             "x": 393.89
            }
           ],
           "class": "Panorama",
           "partial": false,
           "label": "Piscina",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03",
             "class": "AdjacentPanorama",
             "backwardYaw": 84.25,
             "yaw": -178.29,
             "distance": 1
            },
            {
             "panorama": {
              "mapLocations": [
               {
                "y": 622.4,
                "class": "PanoramaMapLocation",
                "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                "angle": 156,
                "x": 398.3
               }
              ],
              "class": "Panorama",
              "partial": false,
              "label": "Eventos",
              "hfovMax": 120,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_FD5D0513_FAEC_5942_41E5_388A78329396",
                "class": "AdjacentPanorama",
                "backwardYaw": -158.07,
                "yaw": 10.74,
                "distance": 1
               }
              ],
              "id": "panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A",
              "hfov": 360,
              "thumbnailUrl": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "frames": [
               {
                "right": {
                 "class": "ImageResource",
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
                 ]
                },
                "front": {
                 "class": "ImageResource",
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
                 ]
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "class": "ImageResource",
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
                 ]
                },
                "top": {
                 "class": "ImageResource",
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
                 ]
                },
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_F166FAA9_FAFC_AB4E_41EE_8D078BC96B18",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_0_HS_0_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.71,
                    "pitch": -7.81,
                    "yaw": 10.74
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD5D0513_FAEC_5942_41E5_388A78329396, this.camera_026A9B38_09DA_CCE8_4195_4CCF4380599C); this.mainPlayList.set('selectedIndex', 2)"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_0_HS_0_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ]
                    },
                    "pitch": -7.81,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 10.74,
                    "hfov": 8.71
                   }
                  ]
                 },
                 {
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "pitch": 48.1,
                  "id": "overlay_EADD2066_FB34_57C2_41D9_AEE597EB5A74",
                  "bleaching": 0.7,
                  "yaw": -85.14
                 },
                 {
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "pitch": 48.48,
                  "id": "overlay_EAD1E3CD_FB34_58C1_41D5_0F05EBB9C9F1",
                  "bleaching": 0.7,
                  "yaw": 89.71
                 }
                ],
                "bottom": {
                 "class": "ImageResource",
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
                 ]
                },
                "left": {
                 "class": "ImageResource",
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
                 ]
                },
                "thumbnailUrl": "media/panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_t.jpg"
               }
              ]
             },
             "class": "AdjacentPanorama",
             "backwardYaw": 10.74,
             "yaw": -158.07,
             "distance": 1
            }
           ],
           "id": "panorama_FD5D0513_FAEC_5942_41E5_388A78329396",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
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
              ]
             },
             "front": {
              "class": "ImageResource",
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
              ]
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "class": "ImageResource",
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
              ]
             },
             "top": {
              "class": "ImageResource",
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
              ]
             },
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_F1E62D3A_FAFC_A942_41D4_91EF77F30373",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_0_HS_2_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.72,
                 "pitch": 7.18,
                 "yaw": -178.29
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03, this.camera_0379398B_09DA_CFAF_419A_6827E7C43FF3); this.mainPlayList.set('selectedIndex', 8)"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_0_HS_2_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ]
                 },
                 "pitch": 7.18,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -178.29,
                 "hfov": 8.72
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_F140AA1E_FAFD_EB42_41BF_36DCBEC3249D",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_0_HS_1_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.76,
                 "pitch": -4.3,
                 "yaw": -158.07
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A, this.camera_0372D995_09DA_CFBB_41A3_B33394B7D756); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_0_HS_1_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ]
                 },
                 "pitch": -4.3,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -158.07,
                 "hfov": 8.76
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_F4B47A53_FB2B_ABC2_41B1_DAFF4C26904C",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_0_HS_0_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.59,
                 "pitch": 2.15,
                 "yaw": 10.04
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_EB21489D_FB2C_B746_41D8_3A0D763EA5AF, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_EA3E620C_FB3B_FB46_41DB_4A6CBC3FC317, null, null, null, null, false)"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_0_HS_0_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ]
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
                "class": "ImageResource",
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
                ]
               },
               "class": "PopupPanoramaOverlay",
               "popupMaxWidth": "95%",
               "rotationX": 0,
               "showDuration": 500,
               "rotationY": 0,
               "hideEasing": "cubic_out",
               "popupMaxHeight": "95%",
               "rotationZ": 0,
               "id": "popup_EB21489D_FB2C_B746_41D8_3A0D763EA5AF",
               "hideDuration": 500,
               "hfov": 6.59,
               "pitch": 2.15,
               "showEasing": "cubic_in",
               "yaw": 10.04
              },
              {
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 35.52,
               "id": "overlay_EADA863D_FB34_BB46_41E7_153CC2ED3FED",
               "bleaching": 0.7,
               "yaw": -102.67
              }
             ],
             "bottom": {
              "class": "ImageResource",
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
              ]
             },
             "left": {
              "class": "ImageResource",
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
              ]
             },
             "thumbnailUrl": "media/panorama_FD5D0513_FAEC_5942_41E5_388A78329396_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": -178.29,
          "yaw": 84.25,
          "distance": 1
         },
         {
          "panorama": {
           "mapLocations": [
            {
             "y": 613.35,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "angle": 130.38,
             "x": 391.85
            }
           ],
           "class": "Panorama",
           "partial": false,
           "label": "Gym",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03",
             "class": "AdjacentPanorama",
             "backwardYaw": 34.2,
             "yaw": 160.31,
             "distance": 1
            }
           ],
           "id": "panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
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
              ]
             },
             "front": {
              "class": "ImageResource",
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
              ]
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "class": "ImageResource",
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
              ]
             },
             "top": {
              "class": "ImageResource",
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
              ]
             },
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_F004434C_FAFC_59C6_41D1_56799DCF0478",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.3,
                 "pitch": -19.29,
                 "yaw": 160.31
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03, this.camera_02D20A2C_09DA_CCE9_4199_125C40C25506); this.mainPlayList.set('selectedIndex', 8)"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ]
                 },
                 "pitch": -19.29,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 160.31,
                 "hfov": 8.3
                }
               ]
              },
              {
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 49.24,
               "id": "overlay_EADAA97D_FB34_E9C6_41E7_C446873188F7",
               "bleaching": 0.7,
               "yaw": 39.81
              }
             ],
             "bottom": {
              "class": "ImageResource",
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
              ]
             },
             "left": {
              "class": "ImageResource",
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
              ]
             },
             "thumbnailUrl": "media/panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": 160.31,
          "yaw": 34.2,
          "distance": 1
         },
         {
          "panorama": "this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4",
          "class": "AdjacentPanorama",
          "backwardYaw": 70.16,
          "yaw": 145.14,
          "distance": 1
         }
        ],
        "id": "panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
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
           ]
          },
          "front": {
           "class": "ImageResource",
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
           ]
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "class": "ImageResource",
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
           ]
          },
          "top": {
           "class": "ImageResource",
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
           ]
          },
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_F08EF5AF_FAFC_7942_41D4_369497152EAD",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_3_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.57,
              "pitch": -4.42,
              "yaw": 145.14
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4, this.camera_023E1B74_09DA_C378_4190_1CF618E882A2); this.mainPlayList.set('selectedIndex', 7)"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_3_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ]
              },
              "pitch": -4.42,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 145.14,
              "hfov": 6.57
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_F04D250A_FAFC_B942_41CA_F10FA99CEC62",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_2_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.21,
              "pitch": -19.48,
              "yaw": 84.25
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5D0513_FAEC_5942_41E5_388A78329396, this.camera_02093B60_09DA_CC98_41A3_36C335D722C3); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_2_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ]
              },
              "pitch": -19.48,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 84.25,
              "hfov": 6.21
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_F1FC66E5_FAFD_F8C6_41EC_F2EFB846DC53",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_1_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.34,
              "pitch": -18.42,
              "yaw": 34.2
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42, this.camera_02060B6A_09DA_C368_417F_C53F6C3176E9); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_1_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ]
              },
              "pitch": -18.42,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 34.2,
              "hfov": 8.34
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_F1F69C27_FAFC_6F42_41D4_54B30FC3C2F3",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_0_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.02,
              "pitch": -24.21,
              "yaw": -33.85
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A, this.camera_02107B56_09DA_CCB8_4197_2A88E88E57F1); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_0_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ]
              },
              "pitch": -24.21,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -33.85,
              "hfov": 8.02
             }
            ]
           },
           {
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": 24.48,
            "id": "overlay_EAD20A1C_FB34_EB46_41E0_64CBDD2BDCCD",
            "bleaching": 0.7,
            "yaw": -42.48
           },
           {
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": 24.48,
            "id": "overlay_EAD66EDB_FB34_E8C2_41DE_2D6BAB569B55",
            "bleaching": 0.7,
            "yaw": 30.29
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_F2D82B7B_FB7D_34EB_41E7_2C92A9EB3B6B",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_4_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.79,
              "pitch": -1.22,
              "yaw": -158.44
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_0_HS_4_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ]
              },
              "pitch": -1.22,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -158.44,
              "hfov": 8.79
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
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
           ]
          },
          "left": {
           "class": "ImageResource",
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
           ]
          },
          "thumbnailUrl": "media/panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 145.14,
       "yaw": 70.16,
       "distance": 1
      },
      {
       "panorama": {
        "mapLocations": [
         {
          "y": 436.83,
          "class": "PanoramaMapLocation",
          "map": {
           "scaleMode": "fit_inside",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C.png",
              "height": 800,
              "class": "ImageResourceLevel",
              "width": 344
             },
             {
              "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_lq.png",
              "height": 400,
              "class": "ImageResourceLevel",
              "grayscale": true,
              "width": 172
             }
            ]
           },
           "class": "Map",
           "initialZoomFactor": 1,
           "label": "1-piso",
           "minimumZoomFactor": 0.5,
           "fieldOfViewOverlayInsideOpacity": 0.4,
           "maximumZoomFactor": 1.2,
           "fieldOfViewOverlayOutsideColor": "#000000",
           "fieldOfViewOverlayOutsideOpacity": 0,
           "overlays": [
            {
             "image": {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_0.png",
                 "height": 25,
                 "class": "ImageResourceLevel",
                 "width": 25
                }
               ]
              },
              "class": "HotspotMapOverlayImage",
              "width": 25,
              "x": 49.56,
              "height": 25,
              "y": 424.33
             },
             "class": "AreaHotspotMapOverlay",
             "rollOverDisplay": true,
             "useHandCursor": true,
             "map": {
              "height": 25,
              "y": 424.33,
              "offsetX": 0,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_0_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12
                }
               ]
              },
              "width": 25,
              "x": 49.56
             },
             "id": "overlay_B8AFC1F0_AE70_E8F3_41DF_4DA851E12770",
             "areas": [
              {
               "mapColor": "#FF0000",
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 1)"
              }
             ]
            },
            {
             "image": {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_1.png",
                 "height": 25,
                 "class": "ImageResourceLevel",
                 "width": 25
                }
               ]
              },
              "class": "HotspotMapOverlayImage",
              "width": 25,
              "x": 222.69,
              "height": 25,
              "y": 233.1
             },
             "class": "AreaHotspotMapOverlay",
             "rollOverDisplay": true,
             "useHandCursor": true,
             "map": {
              "height": 25,
              "y": 233.1,
              "offsetX": 0,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_1_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12
                }
               ]
              },
              "width": 25,
              "x": 222.69
             },
             "id": "overlay_B942F424_AE70_2F13_4182_5C003BEE434A",
             "areas": [
              {
               "mapColor": "#FF0000",
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 13)"
              }
             ]
            },
            {
             "image": {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_2.png",
                 "height": 25,
                 "class": "ImageResourceLevel",
                 "width": 25
                }
               ]
              },
              "class": "HotspotMapOverlayImage",
              "width": 25,
              "x": 290.58,
              "height": 25,
              "y": 420.93
             },
             "class": "AreaHotspotMapOverlay",
             "rollOverDisplay": true,
             "useHandCursor": true,
             "map": {
              "height": 25,
              "y": 420.93,
              "offsetX": 0,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_2_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12
                }
               ]
              },
              "width": 25,
              "x": 290.58
             },
             "id": "overlay_B925714F_AE70_692D_4194_4B98DAECC533",
             "areas": [
              {
               "mapColor": "#FF0000",
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 14)"
              }
             ]
            }
           ],
           "fieldOfViewOverlayRadiusScale": 0.2,
           "height": 800,
           "width": 344,
           "thumbnailUrl": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_t.png",
           "id": "map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
           "fieldOfViewOverlayInsideColor": "#000000"
          },
          "angle": 19.22,
          "x": 62.06
         }
        ],
        "class": "Panorama",
        "partial": false,
        "label": "Casa Modelo",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": {
           "mapLocations": [
            {
             "y": 245.6,
             "class": "PanoramaMapLocation",
             "map": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
             "angle": -59.96,
             "x": 235.19
            }
           ],
           "class": "Panorama",
           "partial": false,
           "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.07.38.28",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C",
             "class": "AdjacentPanorama",
             "backwardYaw": 8.56,
             "yaw": -95.39,
             "distance": 1
            }
           ],
           "id": "panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
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
              ]
             },
             "front": {
              "class": "ImageResource",
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
              ]
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "class": "ImageResource",
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
              ]
             },
             "top": {
              "class": "ImageResource",
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
              ]
             },
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_F6302A40_FAEB_AB3E_41ED_72C188D0F8DD",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.59,
                 "pitch": -12.14,
                 "yaw": -95.39
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C, this.camera_02DA5A1C_09DA_CCA9_4196_616A127EF97E); this.mainPlayList.set('selectedIndex', 1)"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ]
                 },
                 "pitch": -12.14,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -95.39,
                 "hfov": 8.59
                }
               ]
              },
              {
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 20.29,
               "id": "overlay_EADA472F_FB2B_F941_41A0_81A3762CBABB",
               "bleaching": 0.7,
               "yaw": -112.95
              }
             ],
             "bottom": {
              "class": "ImageResource",
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
              ]
             },
             "left": {
              "class": "ImageResource",
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
              ]
             },
             "thumbnailUrl": "media/panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": -95.39,
          "yaw": 8.56,
          "distance": 1
         },
         {
          "panorama": {
           "mapLocations": [
            {
             "y": 433.43,
             "class": "PanoramaMapLocation",
             "map": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
             "angle": 269.62,
             "x": 303.08
            },
            {
             "y": 440.11,
             "class": "PanoramaMapLocation",
             "map": {
              "scaleMode": "fit_inside",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E.png",
                 "height": 800,
                 "class": "ImageResourceLevel",
                 "width": 344
                },
                {
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_lq.png",
                 "height": 400,
                 "class": "ImageResourceLevel",
                 "grayscale": true,
                 "width": 172
                }
               ]
              },
              "class": "Map",
              "initialZoomFactor": 1,
              "label": "2-piso",
              "minimumZoomFactor": 0.5,
              "fieldOfViewOverlayInsideOpacity": 0.4,
              "maximumZoomFactor": 1.2,
              "fieldOfViewOverlayOutsideColor": "#000000",
              "fieldOfViewOverlayOutsideOpacity": 0,
              "overlays": [
               {
                "image": {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_0.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ]
                 },
                 "class": "HotspotMapOverlayImage",
                 "width": 25,
                 "x": 282.77,
                 "height": 25,
                 "y": 427.61
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "useHandCursor": true,
                "map": {
                 "height": 25,
                 "y": 427.61,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_0_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ]
                 },
                 "width": 25,
                 "x": 282.77
                },
                "id": "overlay_B8F85CB0_AE70_3F73_41C3_DC7B01FC0984",
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 14)"
                 }
                ]
               },
               {
                "image": {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_1.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ]
                 },
                 "class": "HotspotMapOverlayImage",
                 "width": 25,
                 "x": 54.2,
                 "height": 25,
                 "y": 478.53
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "useHandCursor": true,
                "map": {
                 "height": 25,
                 "y": 478.53,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_1_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ]
                 },
                 "width": 25,
                 "x": 54.2
                },
                "id": "overlay_B9A37DAA_AE70_1917_41C7_01122E6A0AED",
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 18)"
                 }
                ]
               },
               {
                "image": {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_2.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ]
                 },
                 "class": "HotspotMapOverlayImage",
                 "width": 25,
                 "x": 87.02,
                 "height": 25,
                 "y": 641.47
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "useHandCursor": true,
                "map": {
                 "height": 25,
                 "y": 641.47,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_2_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ]
                 },
                 "width": 25,
                 "x": 87.02
                },
                "id": "overlay_B9B931CA_AE70_6916_41D9_A5584E238A36",
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 17)"
                 }
                ]
               },
               {
                "image": {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_3.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ]
                 },
                 "class": "HotspotMapOverlayImage",
                 "width": 25,
                 "x": 245.43,
                 "height": 25,
                 "y": 594
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "useHandCursor": true,
                "map": {
                 "height": 25,
                 "y": 594,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_3_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ]
                 },
                 "width": 25,
                 "x": 245.43
                },
                "id": "overlay_B98B7224_AE70_2B13_41D2_E4AA8B59B901",
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 16)"
                 }
                ]
               },
               {
                "image": {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_4.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ]
                 },
                 "class": "HotspotMapOverlayImage",
                 "width": 25,
                 "x": 81.41,
                 "height": 25,
                 "y": 287.3
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "useHandCursor": true,
                "map": {
                 "height": 25,
                 "y": 287.3,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_4_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ]
                 },
                 "width": 25,
                 "x": 81.41
                },
                "id": "overlay_B8C7E95D_AE70_192D_41E1_11DAC171E4FE",
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 19)"
                 }
                ]
               },
               {
                "image": {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_5.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ]
                 },
                 "class": "HotspotMapOverlayImage",
                 "width": 25,
                 "x": 229.59,
                 "height": 25,
                 "y": 221.61
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "useHandCursor": true,
                "map": {
                 "height": 25,
                 "y": 221.61,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_5_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ]
                 },
                 "width": 25,
                 "x": 229.59
                },
                "id": "overlay_B93268DD_AE71_E72D_41D4_1633A180488E",
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 21)"
                 }
                ]
               },
               {
                "image": {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_6.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ]
                 },
                 "class": "HotspotMapOverlayImage",
                 "width": 25,
                 "x": 171.82,
                 "height": 25,
                 "y": 323.51
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "useHandCursor": true,
                "map": {
                 "height": 25,
                 "y": 323.51,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_6_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ]
                 },
                 "width": 25,
                 "x": 171.82
                },
                "id": "overlay_B902B875_AE71_E7FD_41E1_C80DD5F6AC12",
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 20)"
                 }
                ]
               },
               {
                "image": {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_7.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ]
                 },
                 "class": "HotspotMapOverlayImage",
                 "width": 25,
                 "x": 133.41,
                 "height": 25,
                 "y": 484.19
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "useHandCursor": true,
                "map": {
                 "height": 25,
                 "y": 484.19,
                 "offsetX": 0,
                 "class": "HotspotMapOverlayMap",
                 "offsetY": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_7_map.gif",
                    "height": 12,
                    "class": "ImageResourceLevel",
                    "width": 12
                   }
                  ]
                 },
                 "width": 25,
                 "x": 133.41
                },
                "id": "overlay_B8C2A774_AE70_69FC_41E1_7E3B506459F7",
                "areas": [
                 {
                  "mapColor": "#FF0000",
                  "class": "HotspotMapOverlayArea",
                  "click": "this.mainPlayList.set('selectedIndex', 15)"
                 }
                ]
               }
              ],
              "fieldOfViewOverlayRadiusScale": 0.2,
              "height": 800,
              "width": 344,
              "thumbnailUrl": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_t.png",
              "id": "map_B86E682C_AE70_6713_41DE_CACB87474A6E",
              "fieldOfViewOverlayInsideColor": "#000000"
             },
             "angle": -87.44,
             "x": 295.27
            }
           ],
           "class": "Panorama",
           "partial": false,
           "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.08.31.66",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C",
             "class": "AdjacentPanorama",
             "backwardYaw": 54.74,
             "yaw": 4.86,
             "distance": 1
            },
            {
             "panorama": {
              "mapLocations": [
               {
                "y": 496.69,
                "class": "PanoramaMapLocation",
                "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                "angle": 136.84,
                "x": 145.91
               }
              ],
              "class": "Panorama",
              "partial": false,
              "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.09.27.04",
              "hfovMax": 120,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "panorama": {
                 "mapLocations": [
                  {
                   "y": 491.03,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                   "angle": -11.17,
                   "x": 66.7
                  }
                 ],
                 "class": "Panorama",
                 "partial": false,
                 "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.11.47.51",
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A",
                   "class": "AdjacentPanorama",
                   "backwardYaw": 147.04,
                   "yaw": 128.37,
                   "distance": 1
                  }
                 ],
                 "id": "panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16",
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_t.jpg",
                 "vfov": 180,
                 "pitch": 0,
                 "frames": [
                  {
                   "right": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "front": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "top": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_F5A64EA9_FB15_EB4E_41E3_5837050507B4",
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_0_HS_0_0.png",
                          "height": 146,
                          "class": "ImageResourceLevel",
                          "width": 146
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 6.88,
                       "pitch": -38.44,
                       "yaw": 128.37
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A, this.camera_024D3B18_09DA_CCA9_41A1_E1EAAB697F98); this.mainPlayList.set('selectedIndex', 15)"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_0_HS_0_0_0_map.gif",
                          "height": 73,
                          "class": "ImageResourceLevel",
                          "width": 73
                         }
                        ]
                       },
                       "pitch": -38.44,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 128.37,
                       "hfov": 6.88
                      }
                     ]
                    },
                    {
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "pitch": 62.95,
                     "id": "overlay_EADADFF3_FB2C_68C2_41DE_70B839C85391",
                     "bleaching": 0.7,
                     "yaw": 36.38
                    }
                   ],
                   "bottom": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "left": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "thumbnailUrl": "media/panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_t.jpg"
                  }
                 ]
                },
                "class": "AdjacentPanorama",
                "backwardYaw": 128.37,
                "yaw": 147.04,
                "distance": 1
               },
               {
                "panorama": {
                 "mapLocations": [
                  {
                   "y": 653.97,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                   "angle": -0.36,
                   "x": 99.52
                  }
                 ],
                 "class": "Panorama",
                 "partial": false,
                 "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.10.56.12",
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A",
                   "class": "AdjacentPanorama",
                   "backwardYaw": 64.23,
                   "yaw": 23.68,
                   "distance": 1
                  }
                 ],
                 "id": "panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956",
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_t.jpg",
                 "vfov": 180,
                 "pitch": 0,
                 "frames": [
                  {
                   "right": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "front": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "top": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_F5993236_FB14_BB42_41EA_5367E75C3FAD",
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_0_HS_0_0.png",
                          "height": 146,
                          "class": "ImageResourceLevel",
                          "width": 146
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.17,
                       "pitch": -21.57,
                       "yaw": 23.68
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A, this.camera_02911AA3_09DA_CD9F_41A2_50F14BC48977); this.mainPlayList.set('selectedIndex', 15)"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_0_HS_0_0_0_map.gif",
                          "height": 73,
                          "class": "ImageResourceLevel",
                          "width": 73
                         }
                        ]
                       },
                       "pitch": -21.57,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 23.68,
                       "hfov": 8.17
                      }
                     ]
                    },
                    {
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "pitch": 37.05,
                     "id": "overlay_EADDC29A_FB2C_7B42_41E1_F6D50FE92A12",
                     "bleaching": 0.7,
                     "yaw": 2.1
                    }
                   ],
                   "bottom": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "left": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "thumbnailUrl": "media/panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_t.jpg"
                  }
                 ]
                },
                "class": "AdjacentPanorama",
                "backwardYaw": 23.68,
                "yaw": 64.23,
                "distance": 1
               },
               {
                "panorama": {
                 "mapLocations": [
                  {
                   "y": 299.8,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                   "angle": -15.53,
                   "x": 93.91
                  }
                 ],
                 "class": "Panorama",
                 "partial": false,
                 "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.12.32.17",
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "panorama": {
                    "mapLocations": [
                     {
                      "y": 336.01,
                      "class": "PanoramaMapLocation",
                      "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                      "angle": 98.91,
                      "x": 184.32
                     }
                    ],
                    "class": "Panorama",
                    "partial": false,
                    "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.13.26.08",
                    "hfovMax": 120,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "panorama": {
                       "mapLocations": [
                        {
                         "y": 234.11,
                         "class": "PanoramaMapLocation",
                         "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                         "angle": 92.82,
                         "x": 242.09
                        }
                       ],
                       "class": "Panorama",
                       "partial": false,
                       "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.14.32.38",
                       "hfovMax": 120,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF",
                         "class": "AdjacentPanorama",
                         "backwardYaw": -66.04,
                         "yaw": 142.22,
                         "distance": 1
                        }
                       ],
                       "id": "panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8",
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_t.jpg",
                       "vfov": 180,
                       "pitch": 0,
                       "frames": [
                        {
                         "right": {
                          "class": "ImageResource",
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
                          ]
                         },
                         "front": {
                          "class": "ImageResource",
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
                          ]
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "class": "ImageResource",
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
                          ]
                         },
                         "top": {
                          "class": "ImageResource",
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
                          ]
                         },
                         "overlays": [
                          {
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "id": "overlay_F4500239_FB15_BB4E_41EC_E0971AA226F4",
                           "useHandCursor": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_0_HS_0_0.png",
                                "height": 146,
                                "class": "ImageResourceLevel",
                                "width": 146
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.19,
                             "pitch": -35.05,
                             "yaw": 142.22
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF, this.camera_02BE9AD3_09DA_CDB8_41A3_A70F702E6B74); this.mainPlayList.set('selectedIndex', 20)"
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_0_HS_0_0_0_map.gif",
                                "height": 73,
                                "class": "ImageResourceLevel",
                                "width": 73
                               }
                              ]
                             },
                             "pitch": -35.05,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 142.22,
                             "hfov": 7.19
                            }
                           ]
                          },
                          {
                           "class": "LensFlarePanoramaOverlay",
                           "bleachingDistance": 0.4,
                           "pitch": 51.52,
                           "id": "overlay_EADD6495_FB2C_FF46_41E9_F08B7DC24D6B",
                           "bleaching": 0.7,
                           "yaw": 22.67
                          },
                          {
                           "class": "LensFlarePanoramaOverlay",
                           "bleachingDistance": 0.4,
                           "pitch": 68.29,
                           "id": "overlay_EADAD88C_FB2C_F747_41E2_2967C5571FFE",
                           "bleaching": 0.7,
                           "yaw": -155.24
                          }
                         ],
                         "bottom": {
                          "class": "ImageResource",
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
                          ]
                         },
                         "left": {
                          "class": "ImageResource",
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
                          ]
                         },
                         "thumbnailUrl": "media/panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_t.jpg"
                        }
                       ]
                      },
                      "class": "AdjacentPanorama",
                      "backwardYaw": 142.22,
                      "yaw": -66.04,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E",
                      "class": "AdjacentPanorama",
                      "backwardYaw": 133.17,
                      "yaw": -163.85,
                      "distance": 1
                     }
                    ],
                    "id": "panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF",
                    "hfov": 360,
                    "thumbnailUrl": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_t.jpg",
                    "vfov": 180,
                    "pitch": 0,
                    "frames": [
                     {
                      "right": {
                       "class": "ImageResource",
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
                       ]
                      },
                      "front": {
                       "class": "ImageResource",
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
                       ]
                      },
                      "class": "CubicPanoramaFrame",
                      "back": {
                       "class": "ImageResource",
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
                       ]
                      },
                      "top": {
                       "class": "ImageResource",
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
                       ]
                      },
                      "overlays": [
                       {
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_F419BC4A_FB17_EFC2_41DA_F168E67FAC84",
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_0_HS_2_0.png",
                             "height": 146,
                             "class": "ImageResourceLevel",
                             "width": 146
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 6.93,
                          "pitch": -37.99,
                          "yaw": -66.04
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8, this.camera_02458B23_09DA_CC98_4181_BB9574C46460); this.mainPlayList.set('selectedIndex', 21)"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_0_HS_2_0_0_map.gif",
                             "height": 73,
                             "class": "ImageResourceLevel",
                             "width": 73
                            }
                           ]
                          },
                          "pitch": -37.99,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -66.04,
                          "hfov": 6.93
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_F4710F9E_FB14_E942_41E9_90499C3873B9",
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_0_HS_1_0.png",
                             "height": 146,
                             "class": "ImageResourceLevel",
                             "width": 146
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 7.74,
                          "pitch": -28.3,
                          "yaw": -163.85
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E, this.camera_027DFB2D_09DA_CCE8_4176_4E85F80D8BF4); this.mainPlayList.set('selectedIndex', 19)"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_0_HS_1_0_0_map.gif",
                             "height": 73,
                             "class": "ImageResourceLevel",
                             "width": 73
                            }
                           ]
                          },
                          "pitch": -28.3,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -163.85,
                          "hfov": 7.74
                         }
                        ]
                       },
                       {
                        "class": "LensFlarePanoramaOverlay",
                        "bleachingDistance": 0.4,
                        "pitch": 33.62,
                        "id": "overlay_EADB3F0B_FB2C_A942_41DB_A261E8C28B6C",
                        "bleaching": 0.7,
                        "yaw": 5.52
                       }
                      ],
                      "bottom": {
                       "class": "ImageResource",
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
                       ]
                      },
                      "left": {
                       "class": "ImageResource",
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
                       ]
                      },
                      "thumbnailUrl": "media/panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_t.jpg"
                     }
                    ]
                   },
                   "class": "AdjacentPanorama",
                   "backwardYaw": -163.85,
                   "yaw": 133.17,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A",
                   "class": "AdjacentPanorama",
                   "backwardYaw": -140.01,
                   "yaw": 177.15,
                   "distance": 1
                  }
                 ],
                 "id": "panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E",
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_t.jpg",
                 "vfov": 180,
                 "pitch": 0,
                 "frames": [
                  {
                   "right": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "front": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "top": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_F5C775BD_FB14_B946_41AE_EEC473CFFD3B",
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_0_HS_1_0.png",
                          "height": 146,
                          "class": "ImageResourceLevel",
                          "width": 146
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.11,
                       "pitch": -22.59,
                       "yaw": 177.15
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A, this.camera_0281AAC3_09DA_CD9F_4190_240960C1B325); this.mainPlayList.set('selectedIndex', 15)"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_0_HS_1_0_0_map.gif",
                          "height": 73,
                          "class": "ImageResourceLevel",
                          "width": 73
                         }
                        ]
                       },
                       "pitch": -22.59,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 177.15,
                       "hfov": 8.11
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_F43186E0_FB14_58FE_41D1_E9F4B5AD660F",
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_0_HS_0_0.png",
                          "height": 146,
                          "class": "ImageResourceLevel",
                          "width": 146
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 7.46,
                       "pitch": -31.87,
                       "yaw": 133.17
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF, this.camera_02894AB3_09DA_CDFF_41A0_933EF11BEFDC); this.mainPlayList.set('selectedIndex', 20)"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_0_HS_0_0_0_map.gif",
                          "height": 73,
                          "class": "ImageResourceLevel",
                          "width": 73
                         }
                        ]
                       },
                       "pitch": -31.87,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 133.17,
                       "hfov": 7.46
                      }
                     ]
                    },
                    {
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "pitch": 31.33,
                     "id": "overlay_EADD98DB_FB2C_A8C2_41E0_044840C635FB",
                     "bleaching": 0.7,
                     "yaw": -15.43
                    },
                    {
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "pitch": 31.71,
                     "id": "overlay_EAD554BB_FB2C_BF42_41D2_EAC6A9ADFA59",
                     "bleaching": 0.7,
                     "yaw": 55.05
                    }
                   ],
                   "bottom": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "left": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "thumbnailUrl": "media/panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_t.jpg"
                  }
                 ]
                },
                "class": "AdjacentPanorama",
                "backwardYaw": 177.15,
                "yaw": -140.01,
                "distance": 1
               },
               {
                "panorama": "this.panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442",
                "class": "AdjacentPanorama",
                "backwardYaw": -18.24,
                "yaw": -88.13,
                "distance": 1
               },
               {
                "panorama": {
                 "mapLocations": [
                  {
                   "y": 606.5,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                   "angle": -33.82,
                   "x": 257.93
                  }
                 ],
                 "class": "Panorama",
                 "partial": false,
                 "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.10.11.98",
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A",
                   "class": "AdjacentPanorama",
                   "backwardYaw": -10.54,
                   "yaw": 2.64,
                   "distance": 1
                  }
                 ],
                 "id": "panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD",
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_t.jpg",
                 "vfov": 180,
                 "pitch": 0,
                 "frames": [
                  {
                   "right": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "front": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "top": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_F5718A14_FB14_6B46_41D6_F4DF4A467239",
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_0_HS_0_0.png",
                          "height": 146,
                          "class": "ImageResourceLevel",
                          "width": 146
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.6,
                       "pitch": -12.03,
                       "yaw": 2.64
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A, this.camera_0236CB7D_09DA_C368_4155_1711BC37D678); this.mainPlayList.set('selectedIndex', 15)"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_0_HS_0_0_0_map.gif",
                          "height": 73,
                          "class": "ImageResourceLevel",
                          "width": 73
                         }
                        ]
                       },
                       "pitch": -12.03,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 2.64,
                       "hfov": 8.6
                      }
                     ]
                    },
                    {
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "pitch": 50,
                     "id": "overlay_EADAF5E2_FB2C_58C3_41EF_348E6D697F96",
                     "bleaching": 0.7,
                     "yaw": -117.52
                    },
                    {
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "pitch": 36.29,
                     "id": "overlay_EAD6A941_FB2C_693E_41E4_D898B361401A",
                     "bleaching": 0.7,
                     "yaw": 43.24
                    }
                   ],
                   "bottom": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "left": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "thumbnailUrl": "media/panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_t.jpg"
                  }
                 ]
                },
                "class": "AdjacentPanorama",
                "backwardYaw": 2.64,
                "yaw": -10.54,
                "distance": 1
               }
              ],
              "id": "panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A",
              "hfov": 360,
              "thumbnailUrl": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "frames": [
               {
                "right": {
                 "class": "ImageResource",
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
                 ]
                },
                "front": {
                 "class": "ImageResource",
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
                 ]
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "class": "ImageResource",
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
                 ]
                },
                "top": {
                 "class": "ImageResource",
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
                 ]
                },
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_F6D9D7BC_FB1F_B946_41D0_03316C638E55",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_5_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.28,
                    "pitch": -19.62,
                    "yaw": 64.23
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956, this.camera_0307C9DB_09DA_CFAF_41A0_ACB91DE26B3A); this.mainPlayList.set('selectedIndex', 17)"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_5_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ]
                    },
                    "pitch": -19.62,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 64.23,
                    "hfov": 8.28
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_F5317BA7_FB1C_E942_41DE_F27E4268289E",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_4_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.28,
                    "pitch": -19.52,
                    "yaw": -10.54
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD, this.camera_032DBA0A_09DA_CCA9_418E_A923953FF757); this.mainPlayList.set('selectedIndex', 16)"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_4_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ]
                    },
                    "pitch": -19.52,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -10.54,
                    "hfov": 8.28
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_F5551352_FB1D_D9C2_41E8_992B0A5133ED",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_3_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.11,
                    "pitch": -22.73,
                    "yaw": 147.04
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16, this.camera_030FE9D1_09DA_CFBB_4192_3AC1165B781E); this.mainPlayList.set('selectedIndex', 18)"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_3_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ]
                    },
                    "pitch": -22.73,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 147.04,
                    "hfov": 8.11
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_F585331D_FB1C_D946_41EA_8BF98FE3E56E",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_2_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.97,
                    "pitch": -24.97,
                    "yaw": -88.13
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442, this.camera_033579FA_09DA_CF69_4194_2093984872BE); this.mainPlayList.set('selectedIndex', 14)"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_2_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ]
                    },
                    "pitch": -24.97,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -88.13,
                    "hfov": 7.97
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_F595EB38_FB1C_694E_41DB_7F5976B96B29",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_1_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.56,
                    "pitch": -13.19,
                    "yaw": -140.01
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E, this.camera_033D59EF_09DA_CF67_41A2_C78D819B8DDB); this.mainPlayList.set('selectedIndex', 19)"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_1_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ]
                    },
                    "pitch": -13.19,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -140.01,
                    "hfov": 8.56
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_F4FA7B47_FB2C_E9C2_41BC_599C24DB8395",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_0_0.png",
                       "height": 109,
                       "class": "ImageResourceLevel",
                       "width": 109
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.59,
                    "pitch": 1.4,
                    "yaw": 11.6
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.showPopupPanoramaOverlay(this.popup_EB8AED66_FB2F_E9C2_41E6_4EC758A048EE, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_EA224210_FB3B_FB5E_41B8_D5A45B002493, null, null, null, null, false)"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_0_HS_0_0_0_map.gif",
                       "height": 54,
                       "class": "ImageResourceLevel",
                       "width": 54
                      }
                     ]
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
                   "class": "ImageResource",
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
                   ]
                  },
                  "class": "PopupPanoramaOverlay",
                  "popupMaxWidth": "95%",
                  "rotationX": 0,
                  "showDuration": 500,
                  "rotationY": 0,
                  "hideEasing": "cubic_out",
                  "popupMaxHeight": "95%",
                  "rotationZ": 0,
                  "id": "popup_EB8AED66_FB2F_E9C2_41E6_4EC758A048EE",
                  "hideDuration": 500,
                  "hfov": 6.59,
                  "pitch": 1.4,
                  "showEasing": "cubic_in",
                  "yaw": 11.6
                 },
                 {
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "pitch": 59.14,
                  "id": "overlay_EADA96D2_FB2B_B8C2_41E5_08444C5B698C",
                  "bleaching": 0.7,
                  "yaw": -140
                 }
                ],
                "bottom": {
                 "class": "ImageResource",
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
                 ]
                },
                "left": {
                 "class": "ImageResource",
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
                 ]
                },
                "thumbnailUrl": "media/panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_t.jpg"
               }
              ]
             },
             "class": "AdjacentPanorama",
             "backwardYaw": -88.13,
             "yaw": -18.24,
             "distance": 1
            }
           ],
           "id": "panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
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
              ]
             },
             "front": {
              "class": "ImageResource",
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
              ]
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "class": "ImageResource",
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
              ]
             },
             "top": {
              "class": "ImageResource",
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
              ]
             },
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_F6A0EAB4_FB1C_6B46_41E1_F21218C8D8B8",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_0_HS_1_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 7.79,
                 "pitch": -27.58,
                 "yaw": 4.86
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C, this.camera_0262DB42_09DA_CC98_4197_41812EEA8CEC); this.mainPlayList.set('selectedIndex', 1)"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_0_HS_1_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ]
                 },
                 "pitch": -27.58,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 4.86,
                 "hfov": 7.79
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_F6E89A1F_FB1C_AB42_41E3_4B36F8DF6035",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.67,
                 "pitch": 9.31,
                 "yaw": -18.24
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A, this.camera_021BAB4C_09DA_CCA8_4184_755FAB9FAA52); this.mainPlayList.set('selectedIndex', 15)"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ]
                 },
                 "pitch": 9.31,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -18.24,
                 "hfov": 8.67
                }
               ]
              },
              {
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 83.52,
               "id": "overlay_EAD3A620_FB2B_DB7E_41DF_B42B6B017B3D",
               "bleaching": 0.7,
               "yaw": -43.62
              }
             ],
             "bottom": {
              "class": "ImageResource",
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
              ]
             },
             "left": {
              "class": "ImageResource",
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
              ]
             },
             "thumbnailUrl": "media/panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": 4.86,
          "yaw": 54.74,
          "distance": 1
         },
         {
          "panorama": "this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4",
          "class": "AdjacentPanorama",
          "backwardYaw": -9.57,
          "yaw": 98.66,
          "distance": 1
         }
        ],
        "id": "panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
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
           ]
          },
          "front": {
           "class": "ImageResource",
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
           ]
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "class": "ImageResource",
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
           ]
          },
          "top": {
           "class": "ImageResource",
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
           ]
          },
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_09A09AA9_056B_1CFC_4177_0367D8E37CB2",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_0_HS_2_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.66,
              "pitch": -10.02,
              "yaw": 98.66
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4, this.camera_02A7AAFA_09DA_CD68_4192_D4609402985E); this.mainPlayList.set('selectedIndex', 7)"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_0_HS_2_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ]
              },
              "pitch": -10.02,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 98.66,
              "hfov": 8.66
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_09DDF1EA_0569_0C7C_4187_37BCE3E0F3A9",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_0_HS_1_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.46,
              "pitch": 15.62,
              "yaw": 54.74
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442, this.camera_02AF8AEE_09DA_CD68_418F_E2E7043EB2BA); this.mainPlayList.set('selectedIndex', 14)"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_0_HS_1_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ]
              },
              "pitch": 15.62,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 54.74,
              "hfov": 8.46
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_088A9784_0569_14B4_417C_E518273FD5F4",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_0_HS_0_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.75,
              "pitch": -5.28,
              "yaw": 8.56
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C, this.camera_02B6DADE_09DA_CDA8_417F_631285F432DA); this.mainPlayList.set('selectedIndex', 13)"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_0_HS_0_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ]
              },
              "pitch": -5.28,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 8.56,
              "hfov": 8.75
             }
            ]
           },
           {
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": 6.19,
            "id": "overlay_1DE1FB7A_057B_1C5F_4191_31E78867EE81",
            "bleaching": 0.7,
            "yaw": -27.24
           }
          ],
          "bottom": {
           "class": "ImageResource",
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
           ]
          },
          "left": {
           "class": "ImageResource",
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
           ]
          },
          "thumbnailUrl": "media/panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 98.66,
       "yaw": -9.57,
       "distance": 1
      },
      {
       "panorama": {
        "mapLocations": [
         {
          "y": 671.11,
          "class": "PanoramaMapLocation",
          "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
          "angle": -16.6,
          "x": 276.83
         }
        ],
        "class": "Panorama",
        "partial": false,
        "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.01.13.34",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4",
          "class": "AdjacentPanorama",
          "backwardYaw": -74.27,
          "yaw": 86.8,
          "distance": 1
         },
         {
          "panorama": {
           "mapLocations": [
            {
             "y": 651.26,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "angle": -6.48,
             "x": 193.32
            }
           ],
           "class": "Panorama",
           "partial": false,
           "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.02.03.77",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": {
              "mapLocations": [
               {
                "y": 276.66,
                "class": "PanoramaMapLocation",
                "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                "angle": -26.2,
                "x": 100.82
               }
              ],
              "class": "Panorama",
              "partial": false,
              "label": "EscazuUrbano-Win64-Shipping 360 2019.05.27 - 12.03.02.47",
              "hfovMax": 120,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "panorama": {
                 "mapLocations": [
                  {
                   "y": 228.4,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                   "angle": 39.98,
                   "x": 138.84
                  }
                 ],
                 "class": "Panorama",
                 "partial": false,
                 "label": "Parque",
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E",
                   "class": "AdjacentPanorama",
                   "backwardYaw": 84.72,
                   "yaw": 166.66,
                   "distance": 1
                  }
                 ],
                 "id": "panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2",
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_t.jpg",
                 "vfov": 180,
                 "pitch": 0,
                 "frames": [
                  {
                   "right": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "front": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "top": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_F69CBB99_FAF4_A94E_41A4_C04758BBB7E7",
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_0_HS_0_0.png",
                          "height": 146,
                          "class": "ImageResourceLevel",
                          "width": 146
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.74,
                       "pitch": -5.89,
                       "yaw": 166.66
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E, this.camera_0317E9C7_09DA_CFA7_419A_17D3CE58E7E4); this.mainPlayList.set('selectedIndex', 12)"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_0_HS_0_0_0_map.gif",
                          "height": 73,
                          "class": "ImageResourceLevel",
                          "width": 73
                         }
                        ]
                       },
                       "pitch": -5.89,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 166.66,
                       "hfov": 8.74
                      }
                     ]
                    },
                    {
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "pitch": 37.81,
                     "id": "overlay_EADD5BB0_FB2B_A95E_41EE_695E7F180582",
                     "bleaching": 0.7,
                     "yaw": 18.1
                    }
                   ],
                   "bottom": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "left": {
                    "class": "ImageResource",
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
                    ]
                   },
                   "thumbnailUrl": "media/panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_t.jpg"
                  }
                 ]
                },
                "class": "AdjacentPanorama",
                "backwardYaw": 166.66,
                "yaw": 84.72,
                "distance": 1
               },
               {
                "panorama": "this.panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540",
                "class": "AdjacentPanorama",
                "backwardYaw": -6.15,
                "yaw": -160.06,
                "distance": 1
               }
              ],
              "id": "panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E",
              "hfov": 360,
              "thumbnailUrl": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "frames": [
               {
                "right": {
                 "class": "ImageResource",
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
                 ]
                },
                "front": {
                 "class": "ImageResource",
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
                 ]
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "class": "ImageResource",
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
                 ]
                },
                "top": {
                 "class": "ImageResource",
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
                 ]
                },
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_F6CD05CC_FAF4_58C6_41ED_9DEE9357A5E0",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_0_HS_1_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.78,
                    "pitch": -2.97,
                    "yaw": -160.06
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540, this.camera_02986A94_09DA_CDB8_419A_8DE1F38D794E); this.mainPlayList.set('selectedIndex', 11)"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_0_HS_1_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ]
                    },
                    "pitch": -2.97,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -160.06,
                    "hfov": 8.78
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_F672A53E_FAF7_F942_41B7_9CC67FCD111C",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_0_HS_0_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.65,
                    "pitch": -10.19,
                    "yaw": 84.72
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2, this.camera_02E00A84_09DA_CD98_4181_396427DF8CB2); this.mainPlayList.set('selectedIndex', 6)"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_0_HS_0_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ]
                    },
                    "pitch": -10.19,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 84.72,
                    "hfov": 8.65
                   }
                  ]
                 },
                 {
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "pitch": 30.95,
                  "id": "overlay_EADDD248_FB2B_BBCE_41EB_A34BF0C55F31",
                  "bleaching": 0.7,
                  "yaw": 83.24
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_F2EC0A9D_FB7F_542C_41C1_13F7DE92A3A9",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_0_HS_2_0.png",
                       "height": 146,
                       "class": "ImageResourceLevel",
                       "width": 146
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.79,
                    "pitch": -0.91,
                    "yaw": 138.85
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 1)"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_0_HS_2_0_0_map.gif",
                       "height": 73,
                       "class": "ImageResourceLevel",
                       "width": 73
                      }
                     ]
                    },
                    "pitch": -0.91,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 138.85,
                    "hfov": 8.79
                   }
                  ]
                 }
                ],
                "bottom": {
                 "class": "ImageResource",
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
                 ]
                },
                "left": {
                 "class": "ImageResource",
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
                 ]
                },
                "thumbnailUrl": "media/panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_t.jpg"
               }
              ]
             },
             "class": "AdjacentPanorama",
             "backwardYaw": -160.06,
             "yaw": -6.15,
             "distance": 1
            },
            {
             "panorama": "this.panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2",
             "class": "AdjacentPanorama",
             "backwardYaw": -42.56,
             "yaw": 129.31,
             "distance": 1
            }
           ],
           "id": "panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
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
              ]
             },
             "front": {
              "class": "ImageResource",
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
              ]
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "class": "ImageResource",
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
              ]
             },
             "top": {
              "class": "ImageResource",
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
              ]
             },
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_F10C100D_FAF5_F746_41E6_DC2260F5ED7B",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_0_HS_1_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.77,
                 "pitch": -3.86,
                 "yaw": -6.15
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E, this.camera_025C5B04_09DA_CC98_4194_DFB5307831B1); this.mainPlayList.set('selectedIndex', 12)"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_0_HS_1_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ]
                 },
                 "pitch": -3.86,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -6.15,
                 "hfov": 8.77
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_F6ADE0A9_FAF4_574E_41EA_579E6B5B20B1",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_0_HS_0_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.76,
                 "pitch": -4.85,
                 "yaw": 129.31
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2, this.camera_02547B0F_09DA_CCA8_4175_CD0DB35757F6); this.mainPlayList.set('selectedIndex', 10)"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_0_HS_0_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ]
                 },
                 "pitch": -4.85,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 129.31,
                 "hfov": 8.76
                }
               ]
              },
              {
               "class": "LensFlarePanoramaOverlay",
               "bleachingDistance": 0.4,
               "pitch": 38.95,
               "id": "overlay_EADA183F_FB34_5742_41B1_6D7BF53A0B0E",
               "bleaching": 0.7,
               "yaw": 61.9
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_F2E712B8_FB7D_3474_41D4_33D977113C94",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_0_HS_2_0.png",
                    "height": 146,
                    "class": "ImageResourceLevel",
                    "width": 146
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.78,
                 "pitch": -1.84,
                 "yaw": 72.01
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.mainPlayList.set('selectedIndex', 1)"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_0_HS_2_0_0_map.gif",
                    "height": 73,
                    "class": "ImageResourceLevel",
                    "width": 73
                   }
                  ]
                 },
                 "pitch": -1.84,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 72.01,
                 "hfov": 8.78
                }
               ]
              }
             ],
             "bottom": {
              "class": "ImageResource",
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
              ]
             },
             "left": {
              "class": "ImageResource",
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
              ]
             },
             "thumbnailUrl": "media/panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": 129.31,
          "yaw": -42.56,
          "distance": 1
         }
        ],
        "id": "panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
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
           ]
          },
          "front": {
           "class": "ImageResource",
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
           ]
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "class": "ImageResource",
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
           ]
          },
          "top": {
           "class": "ImageResource",
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
           ]
          },
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_F139B038_FAF4_574E_41AF_A361E4F8C22E",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_0_HS_1_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.69,
              "pitch": -8.4,
              "yaw": 86.8
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4, this.camera_036C09A9_09DA_CFEB_41A0_F0963B1AC5E8); this.mainPlayList.set('selectedIndex', 7)"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_0_HS_1_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ]
              },
              "pitch": -8.4,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 86.8,
              "hfov": 8.69
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_F6E5D31C_FAF4_B946_41D5_203C3D6E1EE1",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_0_HS_0_0.png",
                 "height": 146,
                 "class": "ImageResourceLevel",
                 "width": 146
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.74,
              "pitch": -6.28,
              "yaw": -42.56
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540, this.camera_036479B3_09DA_CFFF_41A1_C7C23F5B2F96); this.mainPlayList.set('selectedIndex', 11)"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_0_HS_0_0_0_map.gif",
                 "height": 73,
                 "class": "ImageResourceLevel",
                 "width": 73
                }
               ]
              },
              "pitch": -6.28,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -42.56,
              "hfov": 8.74
             }
            ]
           },
           {
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "pitch": 36.67,
            "id": "overlay_EADD3F4E_FB34_69C2_41ED_2555343081FA",
            "bleaching": 0.7,
            "yaw": 68.76
           }
          ],
          "bottom": {
           "class": "ImageResource",
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
           ]
          },
          "left": {
           "class": "ImageResource",
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
           ]
          },
          "thumbnailUrl": "media/panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 86.8,
       "yaw": -74.27,
       "distance": 1
      },
      {
       "panorama": "this.panorama_F2CA7815_FAEC_D746_41B4_366CE2486574",
       "class": "AdjacentPanorama",
       "backwardYaw": 41.37,
       "yaw": -170.09,
       "distance": 1
      }
     ],
     "id": "panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4",
     "hfov": 360,
     "thumbnailUrl": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_t.jpg",
     "vfov": 180,
     "pitch": 0,
     "frames": [
      {
       "right": {
        "class": "ImageResource",
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
        ]
       },
       "front": {
        "class": "ImageResource",
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
        ]
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "class": "ImageResource",
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
        ]
       },
       "top": {
        "class": "ImageResource",
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
        ]
       },
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_F32D0DBE_FAF5_A942_41C4_7513DE65156B",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_4_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.53,
           "pitch": -14.08,
           "yaw": -170.09
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_F2CA7815_FAEC_D746_41B4_366CE2486574, this.camera_02EBBA7A_09DA_CD68_41A0_8DC577E59F94); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_4_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ]
           },
           "pitch": -14.08,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -170.09,
           "hfov": 8.53
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_F0ECCC20_FAF4_EF7E_41CA_10CC41F8F890",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_3_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.72,
           "pitch": -7.06,
           "yaw": -74.27
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2, this.camera_02F38A69_09DA_CD6B_41A1_BD8461D7F0EE); this.mainPlayList.set('selectedIndex', 10)"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_3_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ]
           },
           "pitch": -7.06,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -74.27,
           "hfov": 8.72
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_F0F7FCAA_FAF4_6F42_41CB_813B896937B8",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_2_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.79,
           "pitch": 0.09,
           "yaw": -9.57
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C, this.camera_02FB2A59_09DA_CCAB_4174_E9536AC2E24F); this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_2_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ]
           },
           "pitch": 0.09,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -9.57,
           "hfov": 8.79
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_F304C8FB_FAF7_A8C2_419D_12739731B307",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_1_0.png",
              "height": 109,
              "class": "ImageResourceLevel",
              "width": 109
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.33,
           "pitch": 16.07,
           "yaw": -7.33
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_F049F018_FAF4_774E_41D1_C04E6224ACE3, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_EA38020B_FB3B_FB42_41ED_4428E852F1CC, null, null, null, null, false)"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_1_0_0_map.gif",
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 54
             }
            ]
           },
           "pitch": 16.07,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -7.33,
           "hfov": 6.33
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_F0E6D38F_FAF4_5942_41D6_AB9A22CB3BF7",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_0_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.78,
           "pitch": -2.86,
           "yaw": 70.16
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03, this.camera_02C2DA49_09DA_CCAB_4197_8D0190752CF8); this.mainPlayList.set('selectedIndex', 8)"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_0_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ]
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
          "class": "ImageResource",
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
          ]
         },
         "class": "PopupPanoramaOverlay",
         "popupMaxWidth": "95%",
         "rotationX": 0,
         "showDuration": 500,
         "rotationY": 0,
         "hideEasing": "cubic_out",
         "popupMaxHeight": "95%",
         "rotationZ": 0,
         "id": "popup_F049F018_FAF4_774E_41D1_C04E6224ACE3",
         "hideDuration": 500,
         "hfov": 6.33,
         "pitch": 16.07,
         "showEasing": "cubic_in",
         "yaw": -7.33
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_EA86B948_FB35_A9CE_41C1_1ED4A86D9B3E",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_5_0.png",
              "height": 146,
              "class": "ImageResourceLevel",
              "width": 146
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.77,
           "pitch": -3.49,
           "yaw": 20.93
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4, this.camera_02CACA39_09DA_CCEB_4199_E847E1F4D94E); this.mainPlayList.set('selectedIndex', 9)"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_0_HS_5_0_0_map.gif",
              "height": 73,
              "class": "ImageResourceLevel",
              "width": 73
             }
            ]
           },
           "pitch": -3.49,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 20.93,
           "hfov": 8.77
          }
         ]
        },
        {
         "class": "LensFlarePanoramaOverlay",
         "bleachingDistance": 0.4,
         "pitch": 32.86,
         "id": "overlay_E958FB6D_FB34_A9C6_41C1_D1ABE56A3B3E",
         "bleaching": 0.7,
         "yaw": 90.86
        }
       ],
       "bottom": {
        "class": "ImageResource",
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
        ]
       },
       "left": {
        "class": "ImageResource",
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
        ]
       },
       "thumbnailUrl": "media/panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_t.jpg"
      }
     ]
    },
    "class": "AdjacentPanorama",
    "backwardYaw": -170.09,
    "yaw": 41.37,
    "distance": 1
   }
  ],
  "id": "panorama_F2CA7815_FAEC_D746_41B4_366CE2486574",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
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
     ]
    },
    "front": {
     "class": "ImageResource",
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
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
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
     ]
    },
    "top": {
     "class": "ImageResource",
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
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_F3A57708_FAED_D94E_41B7_36B73B043F40",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_0_HS_1_0.png",
           "height": 146,
           "class": "ImageResourceLevel",
           "width": 146
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.67,
        "pitch": -9.52,
        "yaw": 41.37
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4, this.camera_031C79BD_09DA_CFEB_41A2_DB874229A241); this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_0_HS_1_0_0_map.gif",
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73
          }
         ]
        },
        "pitch": -9.52,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 41.37,
        "hfov": 8.67
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_F34DD9C6_FAF4_68C2_41E1_A4715392C65F",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_0_HS_0_0.png",
           "height": 183,
           "class": "ImageResourceLevel",
           "width": 183
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.98,
        "pitch": 1.23,
        "yaw": -117.06
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_F03B81DB_FAF4_B8C2_41C4_C08345CF767C, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_EA3A8206_FB3B_FB42_41EE_D3E5B37820C9, null, null, null, null, false)"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_0_HS_0_0_0_map.gif",
           "height": 91,
           "class": "ImageResourceLevel",
           "width": 91
          }
         ]
        },
        "pitch": 1.23,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -117.06,
        "hfov": 10.98
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
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
       ]
      },
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "95%",
      "rotationX": 0,
      "showDuration": 500,
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "popupMaxHeight": "95%",
      "rotationZ": 0,
      "id": "popup_F03B81DB_FAF4_B8C2_41C4_C08345CF767C",
      "hideDuration": 500,
      "hfov": 10.98,
      "pitch": 1.23,
      "showEasing": "cubic_in",
      "yaw": -117.06
     },
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.4,
      "pitch": 29.43,
      "id": "overlay_EADAD81B_FB34_B742_41E7_111F334A9D47",
      "bleaching": 0.7,
      "yaw": 103.43
     }
    ],
    "bottom": {
     "class": "ImageResource",
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
     ]
    },
    "left": {
     "class": "ImageResource",
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
     ]
    },
    "thumbnailUrl": "media/panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_t.jpg"
   }
  ]
 },
 {
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "mouseControlMode": "drag_acceleration",
  "touchControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "buttonCardboardView": {
   "toolTipTextShadowColor": "#000000",
   "horizontalAlign": "center",
   "toolTipShadowBlurRadius": 3,
   "toolTipFontSize": 12,
   "toolTipPaddingBottom": 4,
   "iconURL": "skin/IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667.png",
   "toolTipPaddingRight": 6,
   "toolTipOpacity": 1,
   "borderSize": 0,
   "paddingLeft": 0,
   "toolTipShadowOpacity": 1,
   "toolTipPaddingLeft": 6,
   "toolTipFontWeight": "normal",
   "toolTipShadowSpread": 0,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowBlurRadius": 3,
   "verticalAlign": "middle",
   "minHeight": 1,
   "toolTipShadowHorizontalLength": 0,
   "class": "IconButton",
   "mode": "push",
   "toolTipFontColor": "#606060",
   "paddingTop": 0,
   "toolTipBorderRadius": 3,
   "shadow": false,
   "toolTipFontFamily": "Arial",
   "minWidth": 1,
   "toolTipShadowColor": "#333333",
   "transparencyActive": false,
   "toolTipShadowVerticalLength": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipTextShadowOpacity": 0,
   "toolTipFontStyle": "normal",
   "toolTipBorderSize": 1,
   "toolTip": "VR",
   "toolTipPaddingTop": 4,
   "width": 75,
   "height": 50,
   "backgroundOpacity": 0,
   "id": "IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667",
   "borderRadius": 0,
   "paddingRight": 0
  }
 },
 {
  "movementMode": "constrained",
  "viewerArea": {
   "borderRadius": 0,
   "toolTipTextShadowColor": "#000000",
   "progressLeft": 0,
   "playbackBarProgressOpacity": 1,
   "playbackBarHeadBorderColor": "#000000",
   "toolTipFontSize": 12,
   "toolTipPaddingBottom": 4,
   "toolTipOpacity": 1,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "paddingLeft": 0,
   "toolTipShadowOpacity": 1,
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "toolTipBorderColor": "#767676",
   "toolTipFontWeight": "normal",
   "progressRight": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipTextShadowBlurRadius": 3,
   "progressOpacity": 1,
   "playbackBarHeadShadow": true,
   "progressBackgroundOpacity": 1,
   "toolTipBorderRadius": 3,
   "playbackBarOpacity": 1,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarLeft": 0,
   "toolTipShadowColor": "#333333",
   "playbackBarHeadHeight": 15,
   "shadow": false,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipShadowVerticalLength": 0,
   "progressBackgroundColorRatios": [
    0
   ],
   "progressBarOpacity": 1,
   "toolTipBackgroundColor": "#F6F6F6",
   "progressBottom": 2,
   "toolTipTextShadowOpacity": 0,
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "paddingBottom": 0,
   "playbackBarHeadOpacity": 1,
   "progressHeight": 10,
   "progressBackgroundColorDirection": "vertical",
   "height": "100%",
   "progressBorderSize": 0,
   "playbackBarBottom": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressBorderColor": "#000000",
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "id": "MapViewer",
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "paddingRight": 0,
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBorderRadius": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipPaddingRight": 6,
   "playbackBarHeight": 10,
   "playbackBarBorderColor": "#FFFFFF",
   "toolTipPaddingLeft": 6,
   "playbackBarHeadWidth": 6,
   "borderSize": 0,
   "playbackBarProgressBorderSize": 0,
   "width": "100%",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "toolTipShadowSpread": 0,
   "minHeight": 1,
   "toolTipShadowHorizontalLength": 0,
   "progressBarBorderRadius": 0,
   "class": "ViewerArea",
   "progressBarBorderSize": 0,
   "paddingTop": 0,
   "toolTipFontFamily": "Arial",
   "transitionMode": "blending",
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipFontColor": "#606060",
   "playbackBarProgressBorderRadius": 0,
   "minWidth": 1,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarBorderRadius": 0,
   "toolTipFontStyle": "normal",
   "toolTipBorderSize": 1,
   "toolTipPaddingTop": 4,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBorderRadius": 0
  },
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 90,
   "yaw": 0
  },
  "id": "panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_camera"
 },
 "this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_camera"
 },
 "this.panorama_FD5D0513_FAEC_5942_41E5_388A78329396",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5D0513_FAEC_5942_41E5_388A78329396_camera"
 },
 "this.panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_camera"
 },
 "this.panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_camera"
 },
 "this.panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_camera"
 },
 "this.panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_camera"
 },
 "this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_camera"
 },
 "this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_camera"
 },
 "this.panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_camera"
 },
 "this.panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_camera"
 },
 "this.panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_camera"
 },
 "this.panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_camera"
 },
 "this.panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_camera"
 },
 "this.panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_camera"
 },
 "this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_camera"
 },
 "this.panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_camera"
 },
 "this.panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_camera"
 },
 "this.panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_camera"
 },
 "this.panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_camera"
 },
 "this.panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_camera"
 },
 "this.panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_camera"
 },
 {
  "items": [
   {
    "media": "this.panorama_F2CA7815_FAEC_D746_41B4_366CE2486574",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03AD9955_09DA_CCBB_41A1_B54C6C790FB6, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F2CA7815_FAEC_D746_41B4_366CE2486574_camera",
    "id": "PanoramaPlayListItem_03AD9955_09DA_CCBB_41A1_B54C6C790FB6",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03A06957_09DA_CCA7_4175_6CFC0753ABD9, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_camera",
    "id": "PanoramaPlayListItem_03A06957_09DA_CCA7_4175_6CFC0753ABD9",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_FD5D0513_FAEC_5942_41E5_388A78329396",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03A0F958_09DA_CCA9_4178_CA53E09D93B7, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5D0513_FAEC_5942_41E5_388A78329396_camera",
    "id": "PanoramaPlayListItem_03A0F958_09DA_CCA9_4178_CA53E09D93B7",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03A17958_09DA_CCA9_419D_4195F1736B66, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_camera",
    "id": "PanoramaPlayListItem_03A17958_09DA_CCA9_419D_4195F1736B66",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03A1D958_09DA_CCA9_41A0_B993C15F6C8A, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_camera",
    "id": "PanoramaPlayListItem_03A1D958_09DA_CCA9_41A0_B993C15F6C8A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03A60958_09DA_CCA9_4178_0332EC902114, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_camera",
    "id": "PanoramaPlayListItem_03A60958_09DA_CCA9_4178_0332EC902114",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "media": "this.panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03A6B959_09DA_CCAB_418B_BD1F93ED3487, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_camera",
    "id": "PanoramaPlayListItem_03A6B959_09DA_CCAB_418B_BD1F93ED3487",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "media": "this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03A71959_09DA_CCAB_41A3_4ED98DEEED1D, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5C34C4_FAEC_F8C6_41E3_F20A2FBDFFD4_camera",
    "id": "PanoramaPlayListItem_03A71959_09DA_CCAB_41A3_4ED98DEEED1D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "media": "this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03A76959_09DA_CCAB_4178_FDE1DF43C627, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5D30CE_FAEC_D8C2_41B1_505EAEF9FC03_camera",
    "id": "PanoramaPlayListItem_03A76959_09DA_CCAB_4178_FDE1DF43C627",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "media": "this.panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03A7C959_09DA_CCAB_4194_381018FF07AE, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5D1D4A_FAEC_69C2_41C3_B87C709DF9F4_camera",
    "id": "PanoramaPlayListItem_03A7C959_09DA_CCAB_4194_381018FF07AE",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "media": "this.panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03A4595A_09DA_CCA9_41A3_9C3A774DC824, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5DDA0D_FAEF_AB46_41C2_EAF63B411BC2_camera",
    "id": "PanoramaPlayListItem_03A4595A_09DA_CCA9_41A3_9C3A774DC824",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "media": "this.panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03A4A95A_09DA_CCA9_416F_0B617DE082A0, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5D269D_FAEF_BB46_41E1_DFC6710A2540_camera",
    "id": "PanoramaPlayListItem_03A4A95A_09DA_CCA9_416F_0B617DE082A0",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "media": "this.panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03A5095A_09DA_CCA9_4175_E0B6E065B797, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5D52DB_FAEF_D8C2_41DC_17E70B520A3E_camera",
    "id": "PanoramaPlayListItem_03A5095A_09DA_CCA9_4175_E0B6E065B797",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "media": "this.panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03A5995B_09DA_CCAF_417A_1F566564D5F5, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5D4435_FAEF_BF46_41E8_1B47205B404C_camera",
    "id": "PanoramaPlayListItem_03A5995B_09DA_CCAF_417A_1F566564D5F5",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "media": "this.panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03A5C95B_09DA_CCAF_418C_4C2DE9A3C8E6, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5EB060_FAEC_57FE_41CA_748805E2A442_camera",
    "id": "PanoramaPlayListItem_03A5C95B_09DA_CCAF_418C_4C2DE9A3C8E6",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "media": "this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03A4E95B_09DA_CCAF_4182_42AFECBFE2EC, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5EBC08_FAEC_6F4E_41A2_5C1F913B984A_camera",
    "id": "PanoramaPlayListItem_03A4E95B_09DA_CCAF_4182_42AFECBFE2EC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "media": "this.panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03A5495B_09DA_CCAF_419A_7BB7B069663D, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5ED6D6_FAEC_78C2_41BB_27C966172ABD_camera",
    "id": "PanoramaPlayListItem_03A5495B_09DA_CCAF_419A_7BB7B069663D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "media": "this.panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_03A5C95C_09DA_CCA9_419E_E559A24A7268, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5EE2B0_FAEC_5B5E_41D0_8AC5CB3A1956_camera",
    "id": "PanoramaPlayListItem_03A5C95C_09DA_CCA9_419E_E559A24A7268",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "media": "this.panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_035A295C_09DA_CCA9_417F_F35EE2D15D8E, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5EFE6A_FAEC_ABC2_41DE_3A7E25A5CC16_camera",
    "id": "PanoramaPlayListItem_035A295C_09DA_CCA9_417F_F35EE2D15D8E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "media": "this.panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_035AB95C_09DA_CCA9_415B_78F65619D054, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5EF99A_FAEC_A942_41A6_90D6FE8E9E9E_camera",
    "id": "PanoramaPlayListItem_035AB95C_09DA_CCA9_415B_78F65619D054",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "media": "this.panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_035B595D_09DA_CCAB_419B_89BEB52579C7, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5E94FF_FAEC_D8C2_41D7_29C71EE0E0DF_camera",
    "id": "PanoramaPlayListItem_035B595D_09DA_CCAB_419B_89BEB52579C7",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "media": "this.panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_035BB95D_09DA_CCAB_4196_BBC58109E64D, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD5E80D8_FAEC_F8CE_41EE_E6802C0EACF8_camera",
    "id": "PanoramaPlayListItem_035BB95D_09DA_CCAB_4196_BBC58109E64D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 0)"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 0, 1)",
    "camera": "this.panorama_0E1439EE_0569_1C74_4193_EC09469B0B8C_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_FD5D0513_FAEC_5942_41E5_388A78329396",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 1, 2)",
    "camera": "this.panorama_FD5D0513_FAEC_5942_41E5_388A78329396_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 2, 3)",
    "camera": "this.panorama_FD5D0CDB_FAEC_A8C2_41EC_DC2812816B42_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 3, 4)",
    "camera": "this.panorama_FD5D08C4_FAEC_A8C6_41C6_BA4B19B3B94A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 4, 5)",
    "camera": "this.panorama_FD5DE13F_FAEC_7942_41EA_EE771BFE333A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 5, 0)",
    "camera": "this.panorama_FD5D6F8D_FAEF_E946_41E0_C9654FBE52A2_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "class": "PlayList",
  "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist"
 },
 "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
 {
  "items": [
   {
    "media": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "class": "PlayList",
  "id": "playList_03AC2951_09DA_CCBB_4191_D5C0AD6C1107"
 },
 "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
 {
  "items": [
   {
    "media": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "class": "PlayList",
  "id": "playList_03AC7951_09DA_CCBB_4180_FDE563DB5911"
 },
 "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
 {
  "items": [
   {
    "media": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "class": "PlayList",
  "id": "playList_03AC6951_09DA_CCBB_418B_FD9406FA5F39"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42",
  "duration": 1000,
  "easing": "linear"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_D3728F7A_DF8C_960C_417C_830810DD2653",
  "duration": 1000,
  "easing": "linear"
 },
 "this.popup_F03B81DB_FAF4_B8C2_41C4_C08345CF767C",
 {
  "class": "ImageResource",
  "id": "ImageResource_EA3A8206_FB3B_FB42_41EE_D3E5B37820C9",
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
 "this.popup_EB21489D_FB2C_B746_41D8_3A0D763EA5AF",
 {
  "class": "ImageResource",
  "id": "ImageResource_EA3E620C_FB3B_FB46_41DB_4A6CBC3FC317",
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
  "class": "ImageResource",
  "id": "ImageResource_EA38020B_FB3B_FB42_41ED_4428E852F1CC",
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
  "class": "ImageResource",
  "id": "ImageResource_EA224210_FB3B_FB5E_41B8_D5A45B002493",
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
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 146.15
  },
  "id": "camera_03477980_09DA_CF99_41A2_7F8883A3765C"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -95.75
  },
  "id": "camera_0379398B_09DA_CFAF_419A_6827E7C43FF3"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -169.26
  },
  "id": "camera_0372D995_09DA_CFBB_41A3_B33394B7D756"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -159.07
  },
  "id": "camera_0374E99F_09DA_CFA7_41A1_F6160754B073"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 105.73
  },
  "id": "camera_036C09A9_09DA_CFEB_41A0_F0963B1AC5E8"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -50.69
  },
  "id": "camera_036479B3_09DA_CFFF_41A1_C7C23F5B2F96"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 9.91
  },
  "id": "camera_031C79BD_09DA_CFEB_41A2_DB874229A241"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -95.28
  },
  "id": "camera_0317E9C7_09DA_CFA7_419A_17D3CE58E7E4"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -51.63
  },
  "id": "camera_030FE9D1_09DA_CFBB_4192_3AC1165B781E"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -156.32
  },
  "id": "camera_0307C9DB_09DA_CFAF_41A0_ACB91DE26B3A"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -2.85
  },
  "id": "camera_033D59EF_09DA_CF67_41A2_C78D819B8DDB"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 161.76
  },
  "id": "camera_033579FA_09DA_CF69_4194_2093984872BE"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -177.36
  },
  "id": "camera_032DBA0A_09DA_CCA9_418E_A923953FF757"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -171.44
  },
  "id": "camera_02DA5A1C_09DA_CCA9_4196_616A127EF97E"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -145.8
  },
  "id": "camera_02D20A2C_09DA_CCE9_4199_125C40C25506"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -2.44
  },
  "id": "camera_02CACA39_09DA_CCEB_4199_E847E1F4D94E"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -34.86
  },
  "id": "camera_02C2DA49_09DA_CCAB_4197_8D0190752CF8"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -81.34
  },
  "id": "camera_02FB2A59_09DA_CCAB_4174_E9536AC2E24F"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -93.2
  },
  "id": "camera_02F38A69_09DA_CD6B_41A1_BD8461D7F0EE"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 90,
   "yaw": -138.63
  },
  "id": "camera_02EBBA7A_09DA_CD68_41A0_8DC577E59F94"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -13.34
  },
  "id": "camera_02E00A84_09DA_CD98_4181_396427DF8CB2"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 173.85
  },
  "id": "camera_02986A94_09DA_CDB8_419A_8DE1F38D794E"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -115.77
  },
  "id": "camera_02911AA3_09DA_CD9F_41A2_50F14BC48977"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 16.15
  },
  "id": "camera_02894AB3_09DA_CDFF_41A0_933EF11BEFDC"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 39.99
  },
  "id": "camera_0281AAC3_09DA_CD9F_4190_240960C1B325"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 113.96
  },
  "id": "camera_02BE9AD3_09DA_CDB8_41A3_A70F702E6B74"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 84.61
  },
  "id": "camera_02B6DADE_09DA_CDA8_417F_631285F432DA"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -175.14
  },
  "id": "camera_02AF8AEE_09DA_CD68_418F_E2E7043EB2BA"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 170.43
  },
  "id": "camera_02A7AAFA_09DA_CD68_4192_D4609402985E"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 19.94
  },
  "id": "camera_025C5B04_09DA_CC98_4194_DFB5307831B1"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 137.44
  },
  "id": "camera_02547B0F_09DA_CCA8_4175_CD0DB35757F6"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -32.96
  },
  "id": "camera_024D3B18_09DA_CCA9_41A1_E1EAAB697F98"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -37.78
  },
  "id": "camera_02458B23_09DA_CC98_4181_BB9574C46460"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -46.83
  },
  "id": "camera_027DFB2D_09DA_CCE8_4176_4E85F80D8BF4"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 21.93
  },
  "id": "camera_026A9B38_09DA_CCE8_4195_4CCF4380599C"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -125.26
  },
  "id": "camera_0262DB42_09DA_CC98_4197_41812EEA8CEC"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 91.87
  },
  "id": "camera_021BAB4C_09DA_CCA8_4184_755FAB9FAA52"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 169.25
  },
  "id": "camera_02107B56_09DA_CCB8_4197_2A88E88E57F1"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 1.71
  },
  "id": "camera_02093B60_09DA_CC98_41A3_36C335D722C3"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -19.69
  },
  "id": "camera_02060B6A_09DA_C368_417F_C53F6C3176E9"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -109.84
  },
  "id": "camera_023E1B74_09DA_C378_4190_1CF618E882A2"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 169.46
  },
  "id": "camera_0236CB7D_09DA_C368_4155_1711BC37D678"
 },
 {
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_B64C568F_BD85_29CF_41E2_F9997BF3F5D0.jpg"
    }
   ]
  },
  "class": "Photo",
  "duration": 5000,
  "width": 1500,
  "height": 1500,
  "label": "Planta-de-Distribuci\u00f3n-Nivel-1",
  "thumbnailUrl": "media/photo_B64C568F_BD85_29CF_41E2_F9997BF3F5D0_t.jpg",
  "id": "photo_B64C568F_BD85_29CF_41E2_F9997BF3F5D0"
 },
 {
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_B728384A_BD85_38B1_41E1_33C933E2F91F.jpg"
    }
   ]
  },
  "class": "Photo",
  "duration": 5000,
  "width": 1500,
  "height": 1500,
  "label": "Planta-de-Distribuci\u00f3n-Nivel-2",
  "thumbnailUrl": "media/photo_B728384A_BD85_38B1_41E1_33C933E2F91F_t.jpg",
  "id": "photo_B728384A_BD85_38B1_41E1_33C933E2F91F"
 }
], "children": [
 {
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "top": 0,
  "toolTipOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "paddingLeft": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBorderColor": "#767676",
  "toolTipFontWeight": "normal",
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "progressOpacity": 1,
  "playbackBarHeadShadow": true,
  "progressBackgroundOpacity": 1,
  "toolTipBorderRadius": 3,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadHeight": 15,
  "shadow": false,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowVerticalLength": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBarOpacity": 1,
  "paddingBottom": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "progressHeight": 10,
  "progressBackgroundColorDirection": "vertical",
  "height": "100%",
  "progressBorderSize": 0,
  "id": "MainViewer",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBottom": 5,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeight": 10,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "width": "100%",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "minHeight": 50,
  "toolTipShadowHorizontalLength": 0,
  "progressBarBorderRadius": 0,
  "class": "ViewerArea",
  "progressBarBorderSize": 0,
  "paddingTop": 0,
  "toolTipFontFamily": "Arial",
  "transitionMode": "blending",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderRadius": 0,
  "minWidth": 100,
  "playbackBarHeadShadowHorizontalLength": 0,
  "left": 0,
  "playbackBarBorderRadius": 0,
  "toolTipFontStyle": "normal",
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0
 },
 {
  "horizontalAlign": "center",
  "children": [
   {
    "backgroundOpacity": 0.1,
    "children": [
     {
      "toolTipTextShadowColor": "#000000",
      "horizontalAlign": "center",
      "toolTipShadowBlurRadius": 3,
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "iconURL": "skin/IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9.png",
      "toolTipPaddingRight": 6,
      "toolTipOpacity": 1,
      "borderSize": 0,
      "paddingLeft": 0,
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowBlurRadius": 3,
      "verticalAlign": "middle",
      "mode": "toggle",
      "toolTipShadowHorizontalLength": 0,
      "class": "IconButton",
      "minHeight": 1,
      "toolTipFontColor": "#606060",
      "paddingTop": 0,
      "toolTipBorderRadius": 3,
      "shadow": false,
      "toolTipFontFamily": "Arial",
      "minWidth": 1,
      "toolTipShadowColor": "#333333",
      "transparencyActive": true,
      "toolTipShadowVerticalLength": 0,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "pressedIconURL": "skin/IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9_pressed.png",
      "toolTip": "Info",
      "toolTipPaddingTop": 4,
      "width": 75,
      "height": 50,
      "backgroundOpacity": 0,
      "id": "IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9",
      "borderRadius": 0,
      "visible": false,
      "paddingRight": 0
     },
     {
      "toolTipTextShadowColor": "#000000",
      "horizontalAlign": "center",
      "toolTipShadowBlurRadius": 3,
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "iconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0.png",
      "toolTipPaddingRight": 6,
      "toolTipOpacity": 1,
      "borderSize": 0,
      "paddingLeft": 0,
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowBlurRadius": 3,
      "verticalAlign": "middle",
      "mode": "toggle",
      "toolTipShadowHorizontalLength": 0,
      "class": "IconButton",
      "minHeight": 1,
      "toolTipFontColor": "#606060",
      "paddingTop": 0,
      "toolTipBorderRadius": 3,
      "shadow": false,
      "toolTipFontFamily": "Arial",
      "minWidth": 1,
      "toolTipShadowColor": "#333333",
      "transparencyActive": true,
      "toolTipShadowVerticalLength": 0,
      "click": "this.mainPlayList.set('selectedIndex', 1)",
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "pressedIconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0_pressed.png",
      "toolTip": "Casa Modelo",
      "toolTipPaddingTop": 4,
      "width": 75,
      "height": 50,
      "backgroundOpacity": 0,
      "id": "IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0",
      "borderRadius": 0,
      "paddingRight": 0
     },
     {
      "toolTipTextShadowColor": "#000000",
      "horizontalAlign": "center",
      "toolTipShadowBlurRadius": 3,
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "iconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2.png",
      "toolTipPaddingRight": 6,
      "toolTipOpacity": 1,
      "borderSize": 0,
      "paddingLeft": 0,
      "toolTipShadowOpacity": 1,
      "toolTipPaddingLeft": 6,
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowBlurRadius": 3,
      "verticalAlign": "middle",
      "mode": "toggle",
      "toolTipShadowHorizontalLength": 0,
      "class": "IconButton",
      "minHeight": 1,
      "toolTipFontColor": "#606060",
      "paddingTop": 0,
      "toolTipBorderRadius": 3,
      "shadow": false,
      "toolTipFontFamily": "Arial",
      "minWidth": 1,
      "toolTipShadowColor": "#333333",
      "transparencyActive": true,
      "toolTipShadowVerticalLength": 0,
      "click": "if(!this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, true, 0, this.effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42, 'showEffect', false) } else if(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, false, 0, this.effect_D3728F7A_DF8C_960C_417C_830810DD2653, 'hideEffect', false) }",
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "pressedIconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2_pressed.png",
      "toolTip": "Mapa",
      "toolTipPaddingTop": 4,
      "width": 75,
      "height": 50,
      "backgroundOpacity": 0,
      "id": "IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2",
      "borderRadius": 0,
      "paddingRight": 0
     },
     "this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667"
    ],
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "minHeight": 77,
    "class": "Container",
    "verticalAlign": "middle",
    "overflow": "scroll",
    "paddingTop": 0,
    "shadow": false,
    "minWidth": 334,
    "layout": "horizontal",
    "backgroundColorDirection": "vertical",
    "scrollBarColor": "#000000",
    "gap": 10,
    "width": 334,
    "backgroundColor": [
     "#000000"
    ],
    "paddingBottom": 0,
    "id": "Container_FD43509A_EC70_8CA6_41E8_9E5B7D453FAE",
    "scrollBarOpacity": 0.5,
    "borderRadius": 0,
    "height": 77,
    "contentOpaque": false,
    "backgroundColorRatios": [
     0.8
    ],
    "paddingRight": 0
   }
  ],
  "bottom": "0%",
  "borderSize": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "minHeight": 1,
  "class": "Container",
  "verticalAlign": "middle",
  "overflow": "scroll",
  "paddingTop": 0,
  "shadow": false,
  "minWidth": 1,
  "left": "0%",
  "layout": "horizontal",
  "paddingBottom": 0,
  "scrollBarColor": "#000000",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "height": "18.033%",
  "backgroundOpacity": 0,
  "id": "Container_D19AA380_DE1B_2AF3_41EA_D9B3468B686F",
  "width": "100%",
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingRight": 0
 },
 {
  "horizontalAlign": "center",
  "children": [
   {
    "horizontalAlign": "center",
    "children": [
     "this.MapViewer"
    ],
    "borderSize": 0,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "minHeight": 1,
    "class": "Container",
    "verticalAlign": "middle",
    "overflow": "scroll",
    "paddingTop": 0,
    "shadow": false,
    "minWidth": 1,
    "layout": "vertical",
    "paddingBottom": 0,
    "scrollBarColor": "#000000",
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "backgroundOpacity": 0,
    "id": "Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5",
    "width": "100%",
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingRight": 0
   }
  ],
  "top": "2.05%",
  "borderSize": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "minHeight": 1,
  "class": "Container",
  "verticalAlign": "top",
  "overflow": "scroll",
  "paddingTop": 0,
  "shadow": false,
  "minWidth": 1,
  "layout": "vertical",
  "paddingBottom": 0,
  "right": "0%",
  "scrollBarColor": "#000000",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "height": "77.049%",
  "backgroundOpacity": 0,
  "id": "Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F",
  "width": "29.316%",
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingRight": 0
 },
 {
  "horizontalAlign": "left",
  "children": [
   {
    "fontFamily": "Arial",
    "fontSize": 14,
    "popUpBackgroundOpacity": 0.72,
    "popUpShadowBlurRadius": 6,
    "prompt": "Ubicaciones",
    "selectedPopUpFontColor": "#FFFFFF",
    "popUpShadowSpread": 1,
    "selectedPopUpBackgroundColor": "#0066FF",
    "paddingLeft": 5,
    "fontStyle": "normal",
    "borderSize": 0,
    "popUpShadowColor": "#000000",
    "popUpBorderRadius": 0,
    "fontWeight": "normal",
    "minHeight": 20,
    "class": "DropDown",
    "popUpShadowOpacity": 0,
    "paddingTop": 0,
    "arrowBeforeLabel": false,
    "shadow": false,
    "arrowColor": "#0066FF",
    "minWidth": 200,
    "fontColor": "#333333",
    "backgroundColorDirection": "vertical",
    "popUpFontColor": "#000000",
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "popUpShadow": false,
    "gap": 0,
    "textDecoration": "none",
    "popUpBackgroundColor": "#FFFFFF",
    "backgroundColor": [
     "#00CCFF",
     "#0099FF"
    ],
    "backgroundOpacity": 0.72,
    "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F",
    "width": "20.256%",
    "borderRadius": 4,
    "height": "27.397%",
    "paddingBottom": 0,
    "playList": "this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingRight": 5
   }
  ],
  "top": "0.96%",
  "borderSize": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "minHeight": 1,
  "class": "Container",
  "verticalAlign": "top",
  "overflow": "scroll",
  "paddingTop": 0,
  "shadow": false,
  "minWidth": 1,
  "left": "0%",
  "layout": "horizontal",
  "paddingBottom": 0,
  "scrollBarColor": "#000000",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "height": "10%",
  "backgroundOpacity": 0,
  "id": "Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F",
  "width": "100%",
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingRight": 0
 },
 {
  "fontFamily": "Arial",
  "horizontalAlign": "center",
  "fontSize": 20,
  "textShadowColor": "#000000",
  "textShadowOpacity": 1,
  "top": "0%",
  "borderSize": 0,
  "paddingLeft": 0,
  "fontStyle": "normal",
  "fontWeight": "normal",
  "minHeight": 1,
  "class": "Label",
  "verticalAlign": "middle",
  "textShadowBlurRadius": 3,
  "paddingTop": 0,
  "textShadowHorizontalLength": 1,
  "textShadowVerticalLength": 1,
  "shadow": false,
  "minWidth": 1,
  "fontColor": "#FFFFFF",
  "left": "0%",
  "paddingBottom": 0,
  "text": "La Lima Free Zone",
  "textDecoration": "none",
  "height": "10%",
  "backgroundOpacity": 0,
  "id": "Label_E2D61738_F65E_D8BA_41DD_6888E340C197",
  "width": "100%",
  "borderRadius": 0,
  "visible": false,
  "paddingRight": 0
 },
 {
  "fontFamily": "Arial",
  "horizontalAlign": "center",
  "fontSize": 20,
  "textShadowColor": "#000000",
  "textShadowOpacity": 1,
  "top": "0%",
  "borderSize": 0,
  "paddingLeft": 0,
  "fontStyle": "normal",
  "fontWeight": "normal",
  "minHeight": 1,
  "class": "Label",
  "verticalAlign": "middle",
  "textShadowBlurRadius": 3,
  "paddingTop": 0,
  "textShadowHorizontalLength": 1,
  "textShadowVerticalLength": 1,
  "shadow": false,
  "minWidth": 1,
  "fontColor": "#FFFFFF",
  "left": "0%",
  "paddingBottom": 0,
  "text": "Cartago City",
  "textDecoration": "none",
  "height": "10%",
  "backgroundOpacity": 0,
  "id": "Label_E253EC4C_F622_28DA_41DB_546DF82EE842",
  "width": "100%",
  "borderRadius": 0,
  "visible": false,
  "paddingRight": 0
 },
 {
  "fontFamily": "Arial",
  "horizontalAlign": "center",
  "fontSize": 20,
  "textShadowColor": "#000000",
  "textShadowOpacity": 1,
  "top": "0%",
  "borderSize": 0,
  "paddingLeft": 0,
  "fontStyle": "normal",
  "fontWeight": "normal",
  "minHeight": 1,
  "class": "Label",
  "verticalAlign": "middle",
  "textShadowBlurRadius": 3,
  "paddingTop": 0,
  "textShadowHorizontalLength": 1,
  "textShadowVerticalLength": 1,
  "shadow": false,
  "minWidth": 1,
  "fontColor": "#FFFFFF",
  "left": "0%",
  "paddingBottom": 0,
  "text": "Corporate Center Project",
  "textDecoration": "none",
  "height": "13.108%",
  "backgroundOpacity": 0,
  "id": "Label_E216BE12_F622_684F_41EC_C2D2817E217E",
  "width": "100%",
  "borderRadius": 0,
  "visible": false,
  "paddingRight": 0
 },
 {
  "fontFamily": "Arial",
  "horizontalAlign": "center",
  "fontSize": 20,
  "textShadowColor": "#000000",
  "textShadowOpacity": 1,
  "top": "6%",
  "borderSize": 0,
  "paddingLeft": 0,
  "fontStyle": "normal",
  "fontWeight": "normal",
  "minHeight": 1,
  "class": "Label",
  "verticalAlign": "middle",
  "textShadowBlurRadius": 3,
  "paddingTop": 0,
  "textShadowHorizontalLength": 1,
  "textShadowVerticalLength": 1,
  "shadow": false,
  "minWidth": 1,
  "fontColor": "#FFFFFF",
  "left": "0%",
  "paddingBottom": 0,
  "text": "Corporate Building",
  "textDecoration": "none",
  "height": "3.5%",
  "backgroundOpacity": 0,
  "id": "Label_E2A71E78_F626_28BB_41D8_4EBA7BC90515",
  "width": "100%",
  "borderRadius": 0,
  "visible": false,
  "paddingRight": 0
 },
 {
  "backgroundOpacity": 0.3,
  "children": [
   {
    "backgroundOpacity": 0.3,
    "children": [
     {
      "height": "100%",
      "backgroundOpacity": 1,
      "top": "0%",
      "paddingLeft": 0,
      "borderSize": 0,
      "insetBorder": false,
      "minHeight": 1,
      "class": "WebFrame",
      "paddingTop": 0,
      "scrollEnabled": true,
      "shadow": false,
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "right": "0%",
      "width": "99.907%",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingBottom": 0,
      "id": "WebFrame_9268159B_9CD3_4A54_41D5_A5BA14BE3A21",
      "borderRadius": 0,
      "url": "https://www.xline3d.com/360/lalimav6.html",
      "backgroundColorRatios": [
       0
      ],
      "paddingRight": 0
     },
     {
      "horizontalAlign": "center",
      "maxHeight": 396,
      "maxWidth": 394,
      "top": "0%",
      "borderSize": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "minHeight": 40,
      "scaleMode": "fit_inside",
      "class": "Image",
      "paddingTop": 0,
      "shadow": false,
      "minWidth": 40,
      "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, false, 0, null, null, false)",
      "paddingBottom": 0,
      "right": "0%",
      "width": "6.97%",
      "height": "10.979%",
      "backgroundOpacity": 0,
      "id": "Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418",
      "borderRadius": 0,
      "url": "skin/Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418.png",
      "paddingRight": 0
     }
    ],
    "horizontalAlign": "left",
    "bottom": "3.11%",
    "paddingLeft": 0,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "minHeight": 1,
    "class": "Container",
    "verticalAlign": "top",
    "overflow": "scroll",
    "paddingTop": 0,
    "shadow": false,
    "minWidth": 1,
    "left": "4.32%",
    "layout": "absolute",
    "paddingBottom": 0,
    "scrollBarColor": "#000000",
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "backgroundColorDirection": "vertical",
    "id": "Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41",
    "width": "91.341%",
    "borderRadius": 0,
    "height": "91.081%",
    "contentOpaque": false,
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingRight": 0
   }
  ],
  "top": "0%",
  "horizontalAlign": "left",
  "paddingLeft": 0,
  "borderSize": 0,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "minHeight": 1,
  "class": "Container",
  "verticalAlign": "top",
  "overflow": "scroll",
  "paddingTop": 0,
  "shadow": false,
  "minWidth": 1,
  "left": "0%",
  "layout": "absolute",
  "paddingBottom": 0,
  "scrollBarColor": "#000000",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "backgroundColor": [
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "id": "Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E",
  "width": "100%",
  "borderRadius": 0,
  "height": "100%",
  "visible": false,
  "contentOpaque": false,
  "backgroundColorRatios": [
   0
  ],
  "paddingRight": 0
 },
 {
  "backgroundOpacity": 0.55,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "top": 0,
  "bottom": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 0,
  "class": "UIComponent",
  "paddingTop": 0,
  "shadow": false,
  "minWidth": 0,
  "left": 0,
  "backgroundColorDirection": "vertical",
  "right": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingBottom": 0,
  "id": "veilPopupPanorama",
  "borderRadius": 0,
  "visible": false,
  "backgroundColorRatios": [
   0
  ],
  "paddingRight": 0
 },
 {
  "backgroundOpacity": 1,
  "top": 0,
  "bottom": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 0,
  "scaleMode": "custom",
  "class": "ZoomImage",
  "paddingTop": 0,
  "shadow": false,
  "minWidth": 0,
  "left": 0,
  "backgroundColorDirection": "vertical",
  "right": 0,
  "backgroundColor": [],
  "paddingBottom": 0,
  "id": "zoomImagePopupPanorama",
  "borderRadius": 0,
  "visible": false,
  "backgroundColorRatios": [],
  "paddingRight": 0
 },
 {
  "fontFamily": "Arial",
  "backgroundOpacity": 0.3,
  "fontSize": 12,
  "iconBeforeLabel": true,
  "label": "",
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "layout": "horizontal",
  "top": 10,
  "horizontalAlign": "center",
  "iconHeight": 20,
  "paddingLeft": 5,
  "fontStyle": "normal",
  "rollOverIconColor": "#666666",
  "borderSize": 0,
  "iconWidth": 20,
  "verticalAlign": "middle",
  "minHeight": 0,
  "borderColor": "#000000",
  "class": "CloseButton",
  "fontWeight": "normal",
  "mode": "push",
  "paddingTop": 5,
  "fontColor": "#FFFFFF",
  "shadow": false,
  "iconLineWidth": 5,
  "minWidth": 0,
  "shadowSpread": 1,
  "cursor": "hand",
  "pressedIconColor": "#888888",
  "backgroundColorDirection": "vertical",
  "right": 10,
  "gap": 5,
  "textDecoration": "none",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingBottom": 5,
  "id": "closeButtonPopupPanorama",
  "iconColor": "#000000",
  "borderRadius": 0,
  "shadowBlurRadius": 6,
  "visible": false,
  "shadowColor": "#000000",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingRight": 5
 }
], 
 "horizontalAlign": "left",
 "contentOpaque": false,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_03AC2951_09DA_CCBB_4191_D5C0AD6C1107.set('selectedIndex', 0)",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "minHeight": 20,
 "class": "Player",
 "verticalAlign": "top",
 "overflow": "visible",
 "paddingTop": 0,
 "shadow": false,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scripts": {
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){    var self = this;   this.MainViewer.set('toolTipEnabled', false);   var cardboardEnabled = this.isCardboardViewMode();   if(!cardboardEnabled) {       var zoomImage = this.zoomImagePopupPanorama;       var showDuration = popupPanoramaOverlay.get('showDuration');       var hideDuration = popupPanoramaOverlay.get('hideDuration');       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth');       var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight');       var showEndFunction = function() {           var loadedFunction = function(){               if(!self.isCardboardViewMode())                   popupPanoramaOverlay.set('visible', false);           };           popupPanoramaOverlay.unbind('showEnd', showEndFunction, self);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', 1);           self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null,            closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction);       };       var hideFunction = function() {           var restoreShowDurationFunction = function(){                popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self);                popupPanoramaOverlay.set('visible', false);               popupPanoramaOverlay.set('showDuration', showDuration);               popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup);               popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup);           };           self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio);           var currentWidth = zoomImage.get('imageWidth');           var currentHeight = zoomImage.get('imageHeight');           popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', hideDuration);           popupPanoramaOverlay.set('popupMaxWidth', currentWidth);           popupPanoramaOverlay.set('popupMaxHeight', currentHeight);          if(popupPanoramaOverlay.get('visible'))              restoreShowDurationFunction();          else              popupPanoramaOverlay.set('visible', true);           self.MainViewer.set('toolTipEnabled', true);       };       if(!imageHD){           imageHD = popupPanoramaOverlay.get('image');       }       if(!toggleImageHD && toggleImage){           toggleImageHD = toggleImage;       }       popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   } else {       var hideEndFunction = function() {           self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);           if(audio){               if(stopBackgroundAudio){                   self.resumeGlobalAudios();               }               self.stopGlobalAudio(audio);           }           popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self);           self.MainViewer.set('toolTipEnabled', true);       };       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               this.pauseGlobalAudios();           }           this.playGlobalAudio(audio);       }       popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true);   }   popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "existsKey": function(key){    return key in window; },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "unregisterKey": function(key){    delete window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "getKey": function(key){    return window[key]; },
  "registerKey": function(key, value){    window[key] = value; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); }
 },
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "width": "100%",
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingRight": 0
})