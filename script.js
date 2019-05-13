TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "mapLocations": [
   {
    "y": 690.8,
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
        "x": 351.68,
        "height": 25,
        "y": 678.3
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 678.3,
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
        "x": 351.68
       },
       "id": "overlay_BD09ACE0_AE30_3F13_41BD_5FFF039982FA",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
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
        "x": 340.37,
        "height": 25,
        "y": 639.83
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 639.83,
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
        "x": 340.37
       },
       "id": "overlay_BDD12C0E_AE31_FF2F_41D8_E01744C9245E",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
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
        "x": 350.83,
        "height": 25,
        "y": 596.04
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 596.04,
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
        "x": 350.83
       },
       "id": "overlay_BDD572A2_AE30_EB17_41E2_013B4E1D1816",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
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
           "width": 25
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 25,
        "x": 376.92,
        "height": 25,
        "y": 606.79
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 606.79,
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
           "width": 12
          }
         ]
        },
        "width": 25,
        "x": 376.92
       },
       "id": "overlay_BDFDB098_AE33_E732_41E2_82C9C3FBBDEC",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
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
        "x": 379.58,
        "height": 25,
        "y": 652.28
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 652.28,
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
        "x": 379.58
       },
       "id": "overlay_BAAAD66C_AE30_6B13_41E4_41C4AF787B88",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
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
        "x": 216.46,
        "height": 25,
        "y": 85.09
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 85.09,
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
        "x": 216.46
       },
       "id": "overlay_B85AADD9_AE30_7935_418C_49774A3F1323",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
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
        "x": 264.72,
        "height": 25,
        "y": 658.9
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 658.9,
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
        "x": 264.72
       },
       "id": "overlay_BAF4F184_AE30_2913_41D7_D5320C010656",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 6)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
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
        "x": 182.4,
        "height": 25,
        "y": 638.93
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 638.93,
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
        "x": 182.4
       },
       "id": "overlay_BB8BD87E_AE30_27EF_41CD_3E50E37DC6C9",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 7)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
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
        "x": 86.45,
        "height": 25,
        "y": 241.75
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 241.75,
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
        "x": 86.45
       },
       "id": "overlay_B861AF51_AE50_7935_41D1_7279F4D9342F",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 8)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
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
    "angle": -28.57,
    "x": 364.18
   }
  ],
  "class": "Panorama",
  "partial": false,
  "label": "Panorama (2)",
  "hfovMax": 120,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "panorama": {
     "mapLocations": [
      {
       "y": 652.33,
       "class": "PanoramaMapLocation",
       "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
       "angle": 307.32,
       "x": 352.87
      }
     ],
     "class": "Panorama",
     "partial": false,
     "label": "Acceso Principal",
     "hfovMax": 120,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": {
        "mapLocations": [
         {
          "y": 97.59,
          "class": "PanoramaMapLocation",
          "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
          "angle": 183.01,
          "x": 228.96
         }
        ],
        "class": "Panorama",
        "partial": false,
        "label": "Panorama (7)",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8",
          "class": "AdjacentPanorama",
          "backwardYaw": 54.94,
          "yaw": -15.87,
          "distance": 1
         }
        ],
        "id": "panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_r.jpeg",
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
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_f.jpeg",
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
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_b.jpeg",
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
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_A37D3088_ADD0_2713_41A5_445BA54717A1",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_0_HS_1_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.59,
              "pitch": -1.75,
              "yaw": -15.87
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8, this.camera_A5626DBB_AE5A_A0AD_41D3_B6EE64D8AB51); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_0_HS_1_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ]
              },
              "pitch": -1.75,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -15.87,
              "hfov": 6.59
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_A302923C_ADD0_2B73_41BE_A98745835A75",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_0_HS_0_0.png",
                 "height": 110,
                 "class": "ImageResourceLevel",
                 "width": 110
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.63,
              "pitch": -2.18,
              "yaw": 50.24
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 9)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_0_HS_0_0_0_map.gif",
                 "height": 55,
                 "class": "ImageResourceLevel",
                 "width": 55
                }
               ]
              },
              "pitch": -2.18,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 50.24,
              "hfov": 6.63
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_d.jpeg",
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
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": -15.87,
       "yaw": 54.94,
       "distance": 1
      },
      {
       "panorama": "this.panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E",
       "class": "AdjacentPanorama",
       "backwardYaw": 17.14,
       "yaw": -135.06,
       "distance": 1
      },
      {
       "panorama": {
        "mapLocations": [
         {
          "y": 608.54,
          "class": "PanoramaMapLocation",
          "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
          "angle": 141.72,
          "x": 363.33
         }
        ],
        "class": "Panorama",
        "partial": false,
        "label": "Casa Club",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8",
          "class": "AdjacentPanorama",
          "backwardYaw": 99.94,
          "yaw": 76.8,
          "distance": 1
         },
         {
          "panorama": {
           "mapLocations": [
            {
             "y": 664.78,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "angle": -61.65,
             "x": 392.08
            }
           ],
           "class": "Panorama",
           "partial": false,
           "label": "Piscina",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3",
             "class": "AdjacentPanorama",
             "backwardYaw": 22.95,
             "yaw": 38,
             "distance": 1
            },
            {
             "panorama": {
              "mapLocations": [
               {
                "y": 619.29,
                "class": "PanoramaMapLocation",
                "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                "angle": 108.31,
                "x": 389.42
               }
              ],
              "class": "Panorama",
              "partial": false,
              "label": "Gym",
              "hfovMax": 120,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3",
                "class": "AdjacentPanorama",
                "backwardYaw": -23.03,
                "yaw": -177.59,
                "distance": 1
               },
               {
                "panorama": "this.panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E",
                "class": "AdjacentPanorama",
                "backwardYaw": 57,
                "yaw": 55.42,
                "distance": 1
               }
              ],
              "id": "panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41",
              "hfov": 360,
              "thumbnailUrl": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "frames": [
               {
                "right": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_r.jpeg",
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
                   "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_f.jpeg",
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
                   "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_b.jpeg",
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
                   "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_A0288970_ADD0_19F4_41D8_21DE5722384C",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_0_HS_1_0.png",
                       "height": 109,
                       "class": "ImageResourceLevel",
                       "width": 109
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.26,
                    "pitch": -18.21,
                    "yaw": 55.42
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E, this.camera_A52E1E70_AE5A_A3BB_41D3_89666BB90AF6); this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_0_HS_1_0_0_map.gif",
                       "height": 54,
                       "class": "ImageResourceLevel",
                       "width": 54
                      }
                     ]
                    },
                    "pitch": -18.21,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 55.42,
                    "hfov": 6.26
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_A3D44904_ADD1_F913_4192_DD2302FD4D92",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_0_HS_0_0.png",
                       "height": 109,
                       "class": "ImageResourceLevel",
                       "width": 109
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.29,
                    "pitch": -17.53,
                    "yaw": -177.59
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3, this.camera_A5266E60_AE5A_A3DB_41E0_2A65E258D446); this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_0_HS_0_0_0_map.gif",
                       "height": 54,
                       "class": "ImageResourceLevel",
                       "width": 54
                      }
                     ]
                    },
                    "pitch": -17.53,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -177.59,
                    "hfov": 6.29
                   }
                  ]
                 }
                ],
                "bottom": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_d.jpeg",
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
                   "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_t.jpg"
               }
              ]
             },
             "class": "AdjacentPanorama",
             "backwardYaw": 55.42,
             "yaw": 57,
             "distance": 1
            }
           ],
           "id": "panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_r.jpeg",
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
                "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_f.jpeg",
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
                "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_b.jpeg",
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
                "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_A3CEC6A8_ADD0_2B13_41E2_682BF54827B6",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_0_HS_1_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.53,
                 "pitch": 7.8,
                 "yaw": 38
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3, this.camera_A554CD65_AE5A_A1A5_41D0_475794AD28CE); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_0_HS_1_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ]
                 },
                 "pitch": 7.8,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 38,
                 "hfov": 6.53
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_A3FE2DD9_ADD0_3935_41D4_44D24E2A7CF1",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_0_HS_0_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.44,
                 "pitch": 12.33,
                 "yaw": 57
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41, this.camera_A55FCD71_AE5A_A1BD_41E2_97D4F6FE509A); this.mainPlayList.set('selectedIndex', 3)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_0_HS_0_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ]
                 },
                 "pitch": 12.33,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 57,
                 "hfov": 6.44
                }
               ]
              }
             ],
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_d.jpeg",
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
                "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "thumbnailUrl": "media/panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": 38,
          "yaw": 22.95,
          "distance": 1
         },
         {
          "panorama": "this.panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41",
          "class": "AdjacentPanorama",
          "backwardYaw": -177.59,
          "yaw": -23.03,
          "distance": 1
         }
        ],
        "id": "panorama_A40248C9_ADD0_2715_41C8_E32B862105D3",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_r.jpeg",
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
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_f.jpeg",
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
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_b.jpeg",
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
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_A04D4B25_ADD0_191D_41D7_CAFE4290E592",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_0_HS_3_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.37,
              "pitch": -14.77,
              "yaw": 22.95
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E, this.camera_A4AECD4F_AE5A_A1E5_41DA_F283F44BFDCA); this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_0_HS_3_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ]
              },
              "pitch": -14.77,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 22.95,
              "hfov": 6.37
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_A070BC82_ADD0_1F17_41BC_11B2B63D4D28",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_0_HS_2_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.23,
              "pitch": -19.12,
              "yaw": -23.03
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41, this.camera_A551CD5A_AE5A_A1EF_41AF_74326B1C1F49); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_0_HS_2_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ]
              },
              "pitch": -19.12,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -23.03,
              "hfov": 6.23
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_A074F8C4_ADD0_2713_41D5_491BB22C7D8C",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_0_HS_1_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.57,
              "pitch": -4.77,
              "yaw": 76.8
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8, this.camera_A4ABDD44_AE5A_A1DB_41DC_464EF82039C6); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_0_HS_1_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ]
              },
              "pitch": -4.77,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 76.8,
              "hfov": 6.57
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_A06C7896_ADD0_273F_41DF_3EAEAA91D9EE",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_0_HS_0_0.png",
                 "height": 110,
                 "class": "ImageResourceLevel",
                 "width": 110
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.64,
              "pitch": -0.44,
              "yaw": 121.03
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 9)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_0_HS_0_0_0_map.gif",
                 "height": 55,
                 "class": "ImageResourceLevel",
                 "width": 55
                }
               ]
              },
              "pitch": -0.44,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 121.03,
              "hfov": 6.64
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_d.jpeg",
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
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 76.8,
       "yaw": 99.94,
       "distance": 1
      },
      {
       "panorama": {
        "mapLocations": [
         {
          "y": 671.4,
          "class": "PanoramaMapLocation",
          "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
          "angle": 63.64,
          "x": 277.22
         }
        ],
        "class": "Panorama",
        "partial": false,
        "label": "Panorama (8)",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": {
           "mapLocations": [
            {
             "y": 651.43,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "angle": -14.99,
             "x": 194.9
            }
           ],
           "class": "Panorama",
           "partial": false,
           "label": "Panorama (9)",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": {
              "mapLocations": [
               {
                "y": 254.25,
                "class": "PanoramaMapLocation",
                "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                "angle": 159.52,
                "x": 98.95
               }
              ],
              "class": "Panorama",
              "partial": false,
              "label": "Area Infantil",
              "hfovMax": 120,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7",
                "class": "AdjacentPanorama",
                "backwardYaw": 8.04,
                "yaw": 13.5,
                "distance": 1
               }
              ],
              "id": "panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D",
              "hfov": 360,
              "thumbnailUrl": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "frames": [
               {
                "right": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_r.jpeg",
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
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_f.jpeg",
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
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_b.jpeg",
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
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_A2ECAB90_ADF0_3933_41D9_AA225A1CD59A",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_0_HS_1_0.png",
                       "height": 109,
                       "class": "ImageResourceLevel",
                       "width": 109
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.59,
                    "pitch": -1.79,
                    "yaw": 13.5
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7, this.camera_A575BDA6_AE5A_A0A7_41D9_6A6B284C872F); this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_0_HS_1_0_0_map.gif",
                       "height": 54,
                       "class": "ImageResourceLevel",
                       "width": 54
                      }
                     ]
                    },
                    "pitch": -1.79,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 13.5,
                    "hfov": 6.59
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_A286E94D_ADF0_1912_41E3_EA5E6F6A8D85",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_0_HS_0_0.png",
                       "height": 110,
                       "class": "ImageResourceLevel",
                       "width": 110
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.63,
                    "pitch": -1.78,
                    "yaw": 87.16
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.mainPlayList.set('selectedIndex', 9)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_0_HS_0_0_0_map.gif",
                       "height": 55,
                       "class": "ImageResourceLevel",
                       "width": 55
                      }
                     ]
                    },
                    "pitch": -1.78,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 87.16,
                    "hfov": 6.63
                   }
                  ]
                 }
                ],
                "bottom": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_d.jpeg",
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
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_t.jpg"
               }
              ]
             },
             "class": "AdjacentPanorama",
             "backwardYaw": 13.5,
             "yaw": 8.04,
             "distance": 1
            },
            {
             "panorama": "this.panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98",
             "class": "AdjacentPanorama",
             "backwardYaw": -130.93,
             "yaw": 143.91,
             "distance": 1
            }
           ],
           "id": "panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_r.jpeg",
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
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_f.jpeg",
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
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_b.jpeg",
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
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_A3067F48_ADD0_1912_41D4_2D501265D899",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_0_HS_3_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.57,
                 "pitch": -4.88,
                 "yaw": 143.91
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98, this.camera_A5489D91_AE5A_A17D_41DF_306637ADEF74); this.mainPlayList.set('selectedIndex', 6)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_0_HS_3_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ]
                 },
                 "pitch": -4.88,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 143.91,
                 "hfov": 6.57
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_A2D3FFF9_ADD0_18F5_41B2_7C6A81D475F8",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_0_HS_2_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.58,
                 "pitch": -4.09,
                 "yaw": 120.78
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 1)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_0_HS_2_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ]
                 },
                 "pitch": -4.09,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 120.78,
                 "hfov": 6.58
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_A2FFF394_ADD0_6933_41BA_5382066DED4B",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_0_HS_1_0.png",
                    "height": 110,
                    "class": "ImageResourceLevel",
                    "width": 110
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.63,
                 "pitch": -1.85,
                 "yaw": -61.08
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.mainPlayList.set('selectedIndex', 9)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_0_HS_1_0_0_map.gif",
                    "height": 55,
                    "class": "ImageResourceLevel",
                    "width": 55
                   }
                  ]
                 },
                 "pitch": -1.85,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -61.08,
                 "hfov": 6.63
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_A2D7654E_ADEF_E92F_41D1_79CBD4B6BBD8",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_0_HS_0_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.58,
                 "pitch": -3.03,
                 "yaw": 8.04
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D, this.camera_A545ED86_AE5A_A167_41D6_1387161A1A32); this.mainPlayList.set('selectedIndex', 8)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_0_HS_0_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ]
                 },
                 "pitch": -3.03,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 8.04,
                 "hfov": 6.58
                }
               ]
              }
             ],
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_d.jpeg",
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
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "thumbnailUrl": "media/panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": 143.91,
          "yaw": -130.93,
          "distance": 1
         },
         {
          "panorama": "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8",
          "class": "AdjacentPanorama",
          "backwardYaw": -34.51,
          "yaw": 17,
          "distance": 1
         }
        ],
        "id": "panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_r.jpeg",
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
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_f.jpeg",
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
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_b.jpeg",
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
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_A3677146_ADD0_291F_41CC_B51DFDF675DE",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_0_HS_1_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.56,
              "pitch": -5.91,
              "yaw": 17
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8, this.camera_A5B25F1B_AE5A_A16D_41DA_FA362C1237D0); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_0_HS_1_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ]
              },
              "pitch": -5.91,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 17,
              "hfov": 6.56
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_A329FE89_ADD0_1B15_41D2_E8A9679EC7AE",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_0_HS_0_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.57,
              "pitch": -4.97,
              "yaw": -130.93
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7, this.camera_A58ACF11_AE5A_A17A_41E2_F9A847258D40); this.mainPlayList.set('selectedIndex', 7)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_0_HS_0_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ]
              },
              "pitch": -4.97,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -130.93,
              "hfov": 6.57
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_d.jpeg",
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
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 17,
       "yaw": -34.51,
       "distance": 1
      },
      {
       "panorama": {
        "mapLocations": [
         {
          "y": 400.62,
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
              "x": 56.52,
              "height": 25,
              "y": 388.12
             },
             "class": "AreaHotspotMapOverlay",
             "rollOverDisplay": true,
             "useHandCursor": true,
             "map": {
              "height": 25,
              "y": 388.12,
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
              "x": 56.52
             },
             "id": "overlay_B8AFC1F0_AE70_E8F3_41DF_4DA851E12770",
             "areas": [
              {
               "click": "this.mainPlayList.set('selectedIndex', 9)",
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000"
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
              "x": 237.57,
              "height": 25,
              "y": 252.33
             },
             "class": "AreaHotspotMapOverlay",
             "rollOverDisplay": true,
             "useHandCursor": true,
             "map": {
              "height": 25,
              "y": 252.33,
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
              "x": 237.57
             },
             "id": "overlay_B942F424_AE70_2F13_4182_5C003BEE434A",
             "areas": [
              {
               "click": "this.mainPlayList.set('selectedIndex', 10)",
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000"
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
              "x": 291.88,
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
                 "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_2_map.gif",
                 "height": 12,
                 "class": "ImageResourceLevel",
                 "width": 12
                }
               ]
              },
              "width": 25,
              "x": 291.88
             },
             "id": "overlay_B925714F_AE70_692D_4194_4B98DAECC533",
             "areas": [
              {
               "click": "this.mainPlayList.set('selectedIndex', 11)",
               "class": "HotspotMapOverlayArea",
               "mapColor": "#FF0000"
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
          "angle": 14.84,
          "x": 69.02
         }
        ],
        "class": "Panorama",
        "partial": false,
        "label": "Casa Modelo",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8",
          "class": "AdjacentPanorama",
          "backwardYaw": 24.46,
          "yaw": 127.26,
          "distance": 1
         },
         {
          "panorama": {
           "mapLocations": [
            {
             "y": 264.83,
             "class": "PanoramaMapLocation",
             "map": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
             "angle": 245.29,
             "x": 250.07
            }
           ],
           "class": "Panorama",
           "partial": false,
           "label": "Panorama (12)",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD",
             "class": "AdjacentPanorama",
             "backwardYaw": 26.4,
             "yaw": -23.47,
             "distance": 1
            }
           ],
           "id": "panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_r.jpeg",
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
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_f.jpeg",
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
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_b.jpeg",
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
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_A2986A60_ADF0_1B13_41D5_B73F52762C3B",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_0_HS_0_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.43,
                 "pitch": -12.71,
                 "yaw": -23.47
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD, this.camera_A542BD7C_AE5A_A1AB_41DD_AFA5C9835730); this.mainPlayList.set('selectedIndex', 9)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_0_HS_0_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ]
                 },
                 "pitch": -12.71,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -23.47,
                 "hfov": 6.43
                }
               ]
              }
             ],
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_d.jpeg",
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
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "thumbnailUrl": "media/panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": -23.47,
          "yaw": 26.4,
          "distance": 1
         }
        ],
        "id": "panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_r.jpeg",
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
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_f.jpeg",
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
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_b.jpeg",
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
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_A2A00329_ADF0_2915_41E0_65961AAA139C",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_0_HS_2_0.png",
                 "height": 110,
                 "class": "ImageResourceLevel",
                 "width": 110
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.55,
              "pitch": -9.44,
              "yaw": 127.26
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8, this.camera_A59B7EFC_AE5A_A0AA_41B5_7DB85A233B0A); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_0_HS_2_0_0_map.gif",
                 "height": 55,
                 "class": "ImageResourceLevel",
                 "width": 55
                }
               ]
              },
              "pitch": -9.44,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 127.26,
              "hfov": 6.55
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_A261678B_ADF0_2915_41CF_2C70B2285780",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_0_HS_1_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.53,
              "pitch": -7.84,
              "yaw": 26.4
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415, this.camera_A5832F06_AE5A_A166_41D7_64CC42515DB4); this.mainPlayList.set('selectedIndex', 10)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_0_HS_1_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ]
              },
              "pitch": -7.84,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 26.4,
              "hfov": 6.53
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_A276EFB4_ADF0_1972_41DA_F12EEA5D8FBB",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_0_HS_0_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.55,
              "pitch": 6.29,
              "yaw": 76.96
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.mainPlayList.set('selectedIndex', 11)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_0_HS_0_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ]
              },
              "pitch": 6.29,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 76.96,
              "hfov": 6.55
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_d.jpeg",
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
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 127.26,
       "yaw": 24.46,
       "distance": 1
      }
     ],
     "id": "panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8",
     "hfov": 360,
     "thumbnailUrl": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_t.jpg",
     "vfov": 180,
     "pitch": 0,
     "frames": [
      {
       "right": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_r_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_r.jpeg",
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
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_f_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_f.jpeg",
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
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_b_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_b.jpeg",
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
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_u_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_A1282E93_ADD3_FB35_41D4_1017567C5590",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_4_0.png",
              "height": 109,
              "class": "ImageResourceLevel",
              "width": 109
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.4,
           "pitch": -13.71,
           "yaw": -135.06
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E, this.camera_A5CD2EBD_AE5A_A0A5_41DC_34E908073323); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_4_0_0_map.gif",
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 54
             }
            ]
           },
           "pitch": -13.71,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -135.06,
           "hfov": 6.4
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_A094A325_ADD0_2912_41DA_3775A88D338E",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_3_0.png",
              "height": 109,
              "class": "ImageResourceLevel",
              "width": 109
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.56,
           "pitch": -6.02,
           "yaw": -34.51
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98, this.camera_A5FC6EDD_AE5A_A0E5_41D9_ABA24A38F3BA); this.mainPlayList.set('selectedIndex', 6)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_3_0_0_map.gif",
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 54
             }
            ]
           },
           "pitch": -6.02,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -34.51,
           "hfov": 6.56
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_A05CE822_ADD0_2717_41CA_272BFDE30489",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_2_0.png",
              "height": 109,
              "class": "ImageResourceLevel",
              "width": 109
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.59,
           "pitch": -2.1,
           "yaw": 99.94
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3, this.camera_A5F49ED2_AE5A_A0FF_41CD_FD0F8F36E652); this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_2_0_0_map.gif",
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 54
             }
            ]
           },
           "pitch": -2.1,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 99.94,
           "hfov": 6.59
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_A0BF80BE_ADD0_276F_41C9_5403F3936E02",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_1_0.png",
              "height": 110,
              "class": "ImageResourceLevel",
              "width": 110
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.63,
           "pitch": -1.59,
           "yaw": 24.46
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD, this.camera_A5E42EE9_AE5A_A0AA_41CC_397812489BD0); this.mainPlayList.set('selectedIndex', 9)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_1_0_0_map.gif",
              "height": 55,
              "class": "ImageResourceLevel",
              "width": 55
             }
            ]
           },
           "pitch": -1.59,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 24.46,
           "hfov": 6.63
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_A3B164A7_ADD0_2F1D_41E2_333AC82E06ED",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_0_0.png",
              "height": 109,
              "class": "ImageResourceLevel",
              "width": 109
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.58,
           "pitch": -2.91,
           "yaw": 54.94
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA, this.camera_A5C4EEAD_AE5A_A0AA_41E2_4E0573555857); this.mainPlayList.set('selectedIndex', 5)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_0_HS_0_0_0_map.gif",
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 54
             }
            ]
           },
           "pitch": -2.91,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 54.94,
           "hfov": 6.58
          }
         ]
        }
       ],
       "bottom": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_d_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_d.jpeg",
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
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_l_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "thumbnailUrl": "media/panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_t.jpg"
      }
     ]
    },
    "class": "AdjacentPanorama",
    "backwardYaw": -135.06,
    "yaw": 17.14,
    "distance": 1
   }
  ],
  "id": "panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_r.jpeg",
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
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_f.jpeg",
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
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_b.jpeg",
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
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A1E06EB1_ADD0_7B75_41C3_986903E63881",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_0_HS_0_0.png",
           "height": 109,
           "class": "ImageResourceLevel",
           "width": 109
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.49,
        "pitch": -10.05,
        "yaw": 17.14
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8, this.camera_A5171DE6_AE5A_A0A7_41C4_437F8E2D0E50); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_0_HS_0_0_0_map.gif",
           "height": 54,
           "class": "ImageResourceLevel",
           "width": 54
          }
         ]
        },
        "pitch": -10.05,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 17.14,
        "hfov": 6.49
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_d.jpeg",
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
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_t.jpg"
   }
  ]
 },
 {
  "touchControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "buttonCardboardView": {
   "toolTipTextShadowColor": "#000000",
   "horizontalAlign": "center",
   "toolTipShadowBlurRadius": 3,
   "toolTipFontSize": 12,
   "toolTipPaddingBottom": 4,
   "minWidth": 1,
   "iconURL": "skin/IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667.png",
   "toolTipPaddingRight": 6,
   "toolTipOpacity": 1,
   "toolTipShadowVerticalLength": 0,
   "borderSize": 0,
   "paddingLeft": 0,
   "toolTipShadowOpacity": 1,
   "toolTipShadowHorizontalLength": 0,
   "toolTipPaddingLeft": 6,
   "minHeight": 1,
   "shadow": false,
   "toolTipFontWeight": "normal",
   "toolTipShadowSpread": 0,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowBlurRadius": 3,
   "verticalAlign": "middle",
   "mode": "push",
   "class": "IconButton",
   "toolTipFontColor": "#606060",
   "paddingTop": 0,
   "toolTipFontFamily": "Arial",
   "toolTip": "VR",
   "toolTipShadowColor": "#333333",
   "transparencyActive": false,
   "toolTipBorderRadius": 3,
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipTextShadowOpacity": 0,
   "toolTipFontStyle": "normal",
   "toolTipBorderSize": 1,
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
   "toolTipShadowHorizontalLength": 0,
   "playbackBarBorderSize": 0,
   "paddingLeft": 0,
   "toolTipShadowOpacity": 1,
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "shadow": false,
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
   "progressBarOpacity": 1,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "progressBackgroundColorRatios": [
    0
   ],
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
   "id": "MapViewer",
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
   "playbackBarBottom": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "paddingRight": 0,
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBorderRadius": 0,
   "minWidth": 1,
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
   "minHeight": 1,
   "playbackBarHeadWidth": 6,
   "toolTipShadowVerticalLength": 0,
   "borderSize": 0,
   "playbackBarProgressBorderSize": 0,
   "width": "99.417%",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "toolTipShadowSpread": 0,
   "progressBarBorderRadius": 0,
   "class": "ViewerArea",
   "progressBarBorderSize": 0,
   "toolTipFontColor": "#606060",
   "paddingTop": 0,
   "toolTipFontFamily": "Arial",
   "transitionMode": "blending",
   "playbackBarProgressBorderRadius": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarBorderRadius": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipFontStyle": "normal",
   "toolTipBorderSize": 1,
   "toolTipPaddingTop": 4,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBorderRadius": 0
  },
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained"
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
   "yaw": 0
  },
  "id": "panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_camera"
 },
 "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8",
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
  "id": "panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_camera"
 },
 "this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3",
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
  "id": "panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_camera"
 },
 "this.panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41",
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
  "id": "panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_camera"
 },
 "this.panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E",
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
  "id": "panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_camera"
 },
 "this.panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA",
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
  "id": "panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_camera"
 },
 "this.panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98",
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
  "id": "panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_camera"
 },
 "this.panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7",
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
  "id": "panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_camera"
 },
 "this.panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D",
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
  "id": "panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_camera"
 },
 "this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD",
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
  "id": "panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_camera"
 },
 "this.panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415",
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
  "id": "panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_camera"
 },
 {
  "mapLocations": [
   {
    "y": 436.83,
    "class": "PanoramaMapLocation",
    "map": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
    "angle": 258.29,
    "x": 304.38
   },
   {
    "y": 440.22,
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
        "x": 282.89,
        "height": 25,
        "y": 427.72
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 427.72,
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
        "x": 282.89
       },
       "id": "overlay_B8F85CB0_AE70_3F73_41C3_DC7B01FC0984",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 11)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
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
        "x": 54.31,
        "height": 25,
        "y": 478.64
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 478.64,
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
        "x": 54.31
       },
       "id": "overlay_B9A37DAA_AE70_1917_41C7_01122E6A0AED",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 15)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
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
        "x": 87.13,
        "height": 25,
        "y": 640.45
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 640.45,
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
        "x": 87.13
       },
       "id": "overlay_B9B931CA_AE70_6916_41D9_A5584E238A36",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 14)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
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
        "x": 245.54,
        "height": 25,
        "y": 594.06
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 594.06,
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
        "x": 245.54
       },
       "id": "overlay_B98B7224_AE70_2B13_41D2_E4AA8B59B901",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 13)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
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
        "x": 76.94,
        "height": 25,
        "y": 286.28
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 286.28,
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
        "x": 76.94
       },
       "id": "overlay_B8C7E95D_AE70_192D_41E1_11DAC171E4FE",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 16)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
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
        "x": 239.89,
        "height": 25,
        "y": 221.78
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 221.78,
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
        "x": 239.89
       },
       "id": "overlay_B93268DD_AE71_E72D_41D4_1633A180488E",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 18)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
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
        "x": 171.99,
        "height": 25,
        "y": 323.62
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 323.62,
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
        "x": 171.99
       },
       "id": "overlay_B902B875_AE71_E7FD_41E1_C80DD5F6AC12",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 17)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
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
        "x": 133.52,
        "height": 25,
        "y": 484.3
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 484.3,
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
        "x": 133.52
       },
       "id": "overlay_B8C2A774_AE70_69FC_41E1_7E3B506459F7",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 12)",
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
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
    "angle": 265.42,
    "x": 295.39
   }
  ],
  "class": "Panorama",
  "partial": false,
  "label": "Panorama (13)",
  "hfovMax": 120,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "panorama": {
     "mapLocations": [
      {
       "y": 496.8,
       "class": "PanoramaMapLocation",
       "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
       "angle": 14.97,
       "x": 146.02
      }
     ],
     "class": "Panorama",
     "partial": false,
     "label": "Panorama (14)",
     "hfovMax": 120,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": {
        "mapLocations": [
         {
          "y": 298.78,
          "class": "PanoramaMapLocation",
          "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
          "angle": 150.98,
          "x": 89.44
         }
        ],
        "class": "Panorama",
        "partial": false,
        "label": "Panorama (18)",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": {
           "mapLocations": [
            {
             "y": 336.12,
             "class": "PanoramaMapLocation",
             "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
             "angle": 86.84,
             "x": 184.49
            }
           ],
           "class": "Panorama",
           "partial": false,
           "label": "Panorama (19)",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8",
             "class": "AdjacentPanorama",
             "backwardYaw": -64.59,
             "yaw": -159.2,
             "distance": 1
            },
            {
             "panorama": {
              "mapLocations": [
               {
                "y": 234.28,
                "class": "PanoramaMapLocation",
                "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                "angle": 128.72,
                "x": 252.39
               }
              ],
              "class": "Panorama",
              "partial": false,
              "label": "Panorama (20)",
              "hfovMax": 120,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9",
                "class": "AdjacentPanorama",
                "backwardYaw": -62.32,
                "yaw": 108.38,
                "distance": 1
               }
              ],
              "id": "panorama_A401831D_ADD3_E932_41C4_911CB7E01D01",
              "hfov": 360,
              "thumbnailUrl": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "frames": [
               {
                "right": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_r.jpeg",
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
                   "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_f.jpeg",
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
                   "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_b.jpeg",
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
                   "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_BC8C16CD_ADF0_EB2D_41C5_20A00E46E646",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_0_HS_0_0.png",
                       "height": 109,
                       "class": "ImageResourceLevel",
                       "width": 109
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.49,
                    "pitch": -33.64,
                    "yaw": 108.38
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9, this.camera_A5BA5F25_AE5A_A1A5_41BB_29F62F82B2C5); this.mainPlayList.set('selectedIndex', 17)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_0_HS_0_0_0_map.gif",
                       "height": 54,
                       "class": "ImageResourceLevel",
                       "width": 54
                      }
                     ]
                    },
                    "pitch": -33.64,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 108.38,
                    "hfov": 5.49
                   }
                  ]
                 }
                ],
                "bottom": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_d.jpeg",
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
                   "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_t.jpg"
               }
              ]
             },
             "class": "AdjacentPanorama",
             "backwardYaw": 108.38,
             "yaw": -62.32,
             "distance": 1
            }
           ],
           "id": "panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_r.jpeg",
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
                "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_f.jpeg",
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
                "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_b.jpeg",
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
                "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_BCC0F5E6_ADF0_291F_41B4_306E7EB4ABFF",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_0_HS_1_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.11,
                 "pitch": -39.16,
                 "yaw": -62.32
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_A401831D_ADD3_E932_41C4_911CB7E01D01, this.camera_A5DD4E97_AE5A_A365_41DB_F951641B536D); this.mainPlayList.set('selectedIndex', 18)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_0_HS_1_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ]
                 },
                 "pitch": -39.16,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -62.32,
                 "hfov": 5.11
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_BC7C5A18_ADF0_3B33_41E3_247D1C5F9555",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_0_HS_0_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.98,
                 "pitch": -24.9,
                 "yaw": -159.2
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8, this.camera_A5D5CE86_AE5A_A367_41E0_F263F2F3788B); this.mainPlayList.set('selectedIndex', 16)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_0_HS_0_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ]
                 },
                 "pitch": -24.9,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -159.2,
                 "hfov": 5.98
                }
               ]
              }
             ],
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_d.jpeg",
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
                "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "thumbnailUrl": "media/panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": -159.2,
          "yaw": -64.59,
          "distance": 1
         },
         {
          "panorama": "this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8",
          "class": "AdjacentPanorama",
          "backwardYaw": -15.4,
          "yaw": -8.86,
          "distance": 1
         }
        ],
        "id": "panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_r.jpeg",
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
             "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_f.jpeg",
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
             "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_b.jpeg",
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
             "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_BCCFE3CF_ADF0_292D_41E4_9F7157466BA3",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_0_HS_1_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.05,
              "pitch": -23.43,
              "yaw": -8.86
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8, this.camera_A56EADD0_AE5A_A0FB_41C3_0EA1ADE4E521); this.mainPlayList.set('selectedIndex', 12)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_0_HS_1_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ]
              },
              "pitch": -23.43,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -8.86,
              "hfov": 6.05
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_BCBDDD92_ADF0_1937_4197_459058B21A8F",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_0_HS_0_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.62,
              "pitch": -31.47,
              "yaw": -64.59
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9, this.camera_A5646DC5_AE5A_A0E5_4181_15E53E9A1912); this.mainPlayList.set('selectedIndex', 17)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_0_HS_0_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ]
              },
              "pitch": -31.47,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -64.59,
              "hfov": 5.62
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_d.jpeg",
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
             "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": -8.86,
       "yaw": -15.4,
       "distance": 1
      },
      {
       "panorama": {
        "mapLocations": [
         {
          "y": 652.95,
          "class": "PanoramaMapLocation",
          "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
          "angle": 0,
          "x": 99.63
         }
        ],
        "class": "Panorama",
        "partial": false,
        "label": "Panorama (16)",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8",
          "class": "AdjacentPanorama",
          "backwardYaw": -174.97,
          "yaw": 21.12,
          "distance": 1
         }
        ],
        "id": "panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_r.jpeg",
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
             "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_f.jpeg",
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
             "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_b.jpeg",
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
             "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_BDD075DD_ADF0_692D_41E2_D46334009310",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_0_HS_0_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.05,
              "pitch": -23.44,
              "yaw": 21.12
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8, this.camera_A5736D9B_AE5A_A16D_41DE_F448A66DB13F); this.mainPlayList.set('selectedIndex', 12)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_0_HS_0_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ]
              },
              "pitch": -23.44,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 21.12,
              "hfov": 6.05
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_d.jpeg",
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
             "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 21.12,
       "yaw": -174.97,
       "distance": 1
      },
      {
       "panorama": {
        "mapLocations": [
         {
          "y": 491.14,
          "class": "PanoramaMapLocation",
          "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
          "angle": 0,
          "x": 66.81
         }
        ],
        "class": "Panorama",
        "partial": false,
        "label": "Panorama (17)",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8",
          "class": "AdjacentPanorama",
          "backwardYaw": -115.94,
          "yaw": 104.01,
          "distance": 1
         }
        ],
        "id": "panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_r.jpeg",
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
             "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_f.jpeg",
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
             "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_b.jpeg",
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
             "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_BD6FA9E1_ADF0_1915_41D6_903092E6EF3C",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_0_HS_0_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5,
              "pitch": -40.69,
              "yaw": 104.01
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8, this.camera_A4A10D38_AE5A_A1AB_41E1_F853194B363B); this.mainPlayList.set('selectedIndex', 12)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_0_HS_0_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ]
              },
              "pitch": -40.69,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 104.01,
              "hfov": 5
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_d.jpeg",
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
             "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 104.01,
       "yaw": -115.94,
       "distance": 1
      },
      {
       "panorama": {
        "mapLocations": [
         {
          "y": 606.56,
          "class": "PanoramaMapLocation",
          "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
          "angle": -33.15,
          "x": 258.04
         }
        ],
        "class": "Panorama",
        "partial": false,
        "label": "Panorama (15)",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8",
          "class": "AdjacentPanorama",
          "backwardYaw": 120.8,
          "yaw": -3.73,
          "distance": 1
         }
        ],
        "id": "panorama_A4025470_ADD0_6FF2_41B4_35877723A01B",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_r.jpeg",
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
             "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_f.jpeg",
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
             "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_b.jpeg",
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
             "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_BDE9F0F1_ADF0_68F2_41E2_69D1B2B49561",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_0_HS_0_0.png",
                 "height": 109,
                 "class": "ImageResourceLevel",
                 "width": 109
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6,
              "pitch": -24.54,
              "yaw": -3.73
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8, this.camera_A593DEF3_AE5A_A0BE_41E4_8B2E0A8A8B50); this.mainPlayList.set('selectedIndex', 12)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_0_HS_0_0_0_map.gif",
                 "height": 54,
                 "class": "ImageResourceLevel",
                 "width": 54
                }
               ]
              },
              "pitch": -24.54,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -3.73,
              "hfov": 6
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_d.jpeg",
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
             "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": -3.73,
       "yaw": 120.8,
       "distance": 1
      },
      {
       "panorama": "this.panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5",
       "class": "AdjacentPanorama",
       "backwardYaw": -3.75,
       "yaw": 62.05,
       "distance": 1
      }
     ],
     "id": "panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8",
     "hfov": 360,
     "thumbnailUrl": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_t.jpg",
     "vfov": 180,
     "pitch": 0,
     "frames": [
      {
       "right": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_r_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_r.jpeg",
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
          "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_f_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_f.jpeg",
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
          "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_b_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_b.jpeg",
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
          "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_u_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_A23D4101_ADF0_2915_41E5_5FCF6097293F",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_4_0.png",
              "height": 109,
              "class": "ImageResourceLevel",
              "width": 109
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.9,
           "pitch": -26.5,
           "yaw": 62.05
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5, this.camera_A53E9E4A_AE5A_A3EF_41BE_D753BDD1460C); this.mainPlayList.set('selectedIndex', 11)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_4_0_0_map.gif",
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 54
             }
            ]
           },
           "pitch": -26.5,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 62.05,
           "hfov": 5.9
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_A21B873D_ADF0_6972_41CB_D6BD2832AE47",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_3_0.png",
              "height": 109,
              "class": "ImageResourceLevel",
              "width": 109
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.21,
           "pitch": -19.66,
           "yaw": 120.8
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A4025470_ADD0_6FF2_41B4_35877723A01B, this.camera_A536AE39_AE5A_A3AD_41D9_8F1CC7860ECC); this.mainPlayList.set('selectedIndex', 13)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_3_0_0_map.gif",
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 54
             }
            ]
           },
           "pitch": -19.66,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 120.8,
           "hfov": 6.21
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_BD87E0F2_ADF0_28F6_41CF_AD1C04045013",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_2_0.png",
              "height": 109,
              "class": "ImageResourceLevel",
              "width": 109
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.25,
           "pitch": -18.42,
           "yaw": -174.97
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B, this.camera_A506BE0D_AE5A_A365_41D9_3AFD3A0B512B); this.mainPlayList.set('selectedIndex', 14)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_2_0_0_map.gif",
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 54
             }
            ]
           },
           "pitch": -18.42,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -174.97,
           "hfov": 6.25
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_BD5B4E5D_ADF0_3B2D_41C8_62B60C37CD41",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_1_0.png",
              "height": 109,
              "class": "ImageResourceLevel",
              "width": 109
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.08,
           "pitch": -39.62,
           "yaw": -115.94
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2, this.camera_A50E8E23_AE5A_A35D_41D0_BC14DCAD7DA7); this.mainPlayList.set('selectedIndex', 15)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_1_0_0_map.gif",
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 54
             }
            ]
           },
           "pitch": -39.62,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -115.94,
           "hfov": 5.08
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_BD4F71DC_ADF0_E933_41D3_E6A5ECDAB743",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_0_0.png",
              "height": 109,
              "class": "ImageResourceLevel",
              "width": 109
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.44,
           "pitch": -12.18,
           "yaw": -15.4
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8, this.camera_A51F4DFB_AE5A_A0AD_41C5_F52FDB853ACF); this.mainPlayList.set('selectedIndex', 16)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_0_HS_0_0_0_map.gif",
              "height": 54,
              "class": "ImageResourceLevel",
              "width": 54
             }
            ]
           },
           "pitch": -12.18,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -15.4,
           "hfov": 6.44
          }
         ]
        }
       ],
       "bottom": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_d_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_d.jpeg",
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
          "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_l_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "thumbnailUrl": "media/panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_t.jpg"
      }
     ]
    },
    "class": "AdjacentPanorama",
    "backwardYaw": 62.05,
    "yaw": -3.75,
    "distance": 1
   }
  ],
  "id": "panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_r.jpeg",
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
       "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_f.jpeg",
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
       "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_b.jpeg",
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
       "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A2380F1E_ADF0_192E_41B3_1E031AFB6C98",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_0_HS_1_0.png",
           "height": 109,
           "class": "ImageResourceLevel",
           "width": 109
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.06,
        "pitch": -23.11,
        "yaw": 19.41
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_0_HS_1_0_0_map.gif",
           "height": 54,
           "class": "ImageResourceLevel",
           "width": 54
          }
         ]
        },
        "pitch": -23.11,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 19.41,
        "hfov": 6.06
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A22D5C70_ADF0_1FF2_41C2_9E2A5EF5646B",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_0_HS_0_0.png",
           "height": 109,
           "class": "ImageResourceLevel",
           "width": 109
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.58,
        "pitch": 3.22,
        "yaw": -3.75
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8, this.camera_A5782DB0_AE5A_A0BB_41DD_3F54F7D9375E); this.mainPlayList.set('selectedIndex', 12)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_0_HS_0_0_0_map.gif",
           "height": 54,
           "class": "ImageResourceLevel",
           "width": 54
          }
         ]
        },
        "pitch": 3.22,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -3.75,
        "hfov": 6.58
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_d.jpeg",
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
       "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_t.jpg"
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
   "yaw": 0
  },
  "id": "panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_camera"
 },
 "this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8",
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
  "id": "panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_camera"
 },
 "this.panorama_A4025470_ADD0_6FF2_41B4_35877723A01B",
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
  "id": "panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_camera"
 },
 "this.panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B",
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
  "id": "panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_camera"
 },
 "this.panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2",
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
  "id": "panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_camera"
 },
 "this.panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8",
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
  "id": "panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_camera"
 },
 "this.panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9",
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
  "id": "panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_camera"
 },
 "this.panorama_A401831D_ADD3_E932_41C4_911CB7E01D01",
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
  "id": "panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_camera"
 },
 {
  "items": [
   {
    "media": "this.panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A48DCD1E_AE5A_A167_41D9_CDE2E01EE8FC, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A7141E4A_ADD0_1B17_41D0_C61DD9643A2E_camera",
    "id": "PanoramaPlayListItem_A48DCD1E_AE5A_A167_41D9_CDE2E01EE8FC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A48D6D1E_AE5A_A167_41CB_B61BCCB3022A, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_camera",
    "end": "if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, 0, this.effect_A4524D31_AE5B_A1BD_41E0_B77AE6DF6F18, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, 0, this.effect_A5B9BF26_AE5A_A1A7_41D4_9D0A84CA7480, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')",
    "id": "PanoramaPlayListItem_A48D6D1E_AE5A_A167_41CB_B61BCCB3022A",
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, 0, this.effect_A4524D31_AE5B_A1BD_41E0_B77AE6DF6F18, 'showEffect', false)"
   },
   {
    "media": "this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A48CDD1F_AE5A_A165_41D9_D71A873E7BE4, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_camera",
    "id": "PanoramaPlayListItem_A48CDD1F_AE5A_A165_41D9_D71A873E7BE4",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A48C7D1F_AE5A_A165_41DC_7F3BD99EC9D2, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_camera",
    "id": "PanoramaPlayListItem_A48C7D1F_AE5A_A165_41DC_7F3BD99EC9D2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A48C0D1F_AE5A_A165_41E5_AC7028064BE5, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_camera",
    "id": "PanoramaPlayListItem_A48C0D1F_AE5A_A165_41E5_AC7028064BE5",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A4B39D20_AE5A_A15B_41E2_8C6A2D350E24, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A402DF11_ADD0_1932_41AC_1D2DD813F2BA_camera",
    "id": "PanoramaPlayListItem_A4B39D20_AE5A_A15B_41E2_8C6A2D350E24",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "media": "this.panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A4B32D20_AE5A_A15B_41DA_F5045BD33F51, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A4020CA1_ADD0_3F15_41A3_66A2ED2ECD98_camera",
    "id": "PanoramaPlayListItem_A4B32D20_AE5A_A15B_41DA_F5045BD33F51",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "media": "this.panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A4B2AD20_AE5A_A15B_41A1_D9D57AD97196, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A402F995_ADD0_1932_41DA_BBD3092A9ED7_camera",
    "id": "PanoramaPlayListItem_A4B2AD20_AE5A_A15B_41A1_D9D57AD97196",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "media": "this.panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A4B22D21_AE5A_A15D_41DA_54BEB85A061C, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A402E6CD_ADD0_EB12_41D9_2B9E7C4FF92D_camera",
    "id": "PanoramaPlayListItem_A4B22D21_AE5A_A15D_41DA_54BEB85A061C",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "media": "this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A4B1BD21_AE5A_A15D_4181_C09790092506, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_camera",
    "end": "if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, 0, this.effect_A5B8BF27_AE5A_A1A5_41E0_0D4D0C668CEB, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, 0, this.effect_A46CAFB3_AE5A_E0BD_41E3_4AE80F15CCE2, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')",
    "id": "PanoramaPlayListItem_A4B1BD21_AE5A_A15D_4181_C09790092506",
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, 0, this.effect_A46CAFB3_AE5A_E0BD_41E3_4AE80F15CCE2, 'hideEffect', false)"
   },
   {
    "media": "this.panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A4B15D21_AE5A_A15D_41D2_C9E38951DE7F, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A402D07A_ADD0_27F7_41B6_480DB6AD0415_camera",
    "id": "PanoramaPlayListItem_A4B15D21_AE5A_A15D_41D2_C9E38951DE7F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "media": "this.panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A4B0ED22_AE5A_A15F_41E3_51A02C619356, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A4022C5C_ADD0_3F33_41E0_487448C7E0B5_camera",
    "id": "PanoramaPlayListItem_A4B0ED22_AE5A_A15F_41E3_51A02C619356",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "media": "this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A4B07D22_AE5A_A15F_41CD_6D96EE6116FA, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A402D7F7_ADD0_28FD_4161_59D3CF51C0E8_camera",
    "id": "PanoramaPlayListItem_A4B07D22_AE5A_A15F_41CD_6D96EE6116FA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "media": "this.panorama_A4025470_ADD0_6FF2_41B4_35877723A01B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A4B00D22_AE5A_A15F_41C6_B1BB6FCE0EF4, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A4025470_ADD0_6FF2_41B4_35877723A01B_camera",
    "id": "PanoramaPlayListItem_A4B00D22_AE5A_A15F_41C6_B1BB6FCE0EF4",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "media": "this.panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A4B7AD23_AE5A_A15D_414B_6B8FE91CBCD6, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A402B116_ADD0_693F_41C5_17FC300AAE9B_camera",
    "id": "PanoramaPlayListItem_A4B7AD23_AE5A_A15D_414B_6B8FE91CBCD6",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "media": "this.panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A4B72D23_AE5A_A15D_41C1_02D947714180, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A4025D80_ADD0_1913_41D5_87F6140DE3E2_camera",
    "id": "PanoramaPlayListItem_A4B72D23_AE5A_A15D_41C1_02D947714180",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "media": "this.panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A4B6BD23_AE5A_A15D_41E0_6E4B97B2DC84, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A4029A2C_ADD0_3B13_4173_640A0CE1CEC8_camera",
    "id": "PanoramaPlayListItem_A4B6BD23_AE5A_A15D_41E0_6E4B97B2DC84",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "media": "this.panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A4B65D24_AE5A_A15B_41E4_DF0D062EBAE0, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A402667E_ADD0_2BEF_41C4_BDC9B8EA53B9_camera",
    "id": "PanoramaPlayListItem_A4B65D24_AE5A_A15B_41E4_DF0D062EBAE0",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "media": "this.panorama_A401831D_ADD3_E932_41C4_911CB7E01D01",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_A4B5FD24_AE5A_A15B_41A7_1BBD28076F5E, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A401831D_ADD3_E932_41C4_911CB7E01D01_camera",
    "id": "PanoramaPlayListItem_A4B5FD24_AE5A_A15B_41A7_1BBD28076F5E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 0)"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 0, 1); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, 0, this.effect_A4524D31_AE5B_A1BD_41E0_B77AE6DF6F18, 'showEffect', false)",
    "camera": "this.panorama_A4059B14_ADD0_3933_41AC_472B0F8D33A8_camera",
    "end": "if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, 0, this.effect_A4524D31_AE5B_A1BD_41E0_B77AE6DF6F18, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, 0, this.effect_A5BF2F28_AE5A_A1AB_41E1_DA9CEEBB4C8C, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 1, 2)",
    "camera": "this.panorama_A40248C9_ADD0_2715_41C8_E32B862105D3_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 2, 3)",
    "camera": "this.panorama_A402D5A7_ADD0_691D_41DB_FDDFAEE1DF41_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 3, 4)",
    "camera": "this.panorama_A40231A0_ADD0_6913_41CB_9A74F3E3674E_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD",
    "class": "PanoramaPlayListItem",
    "begin": "this.registerKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F', this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F.get('visible')); this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 4, 0); this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, 0, this.effect_A46CAFB3_AE5A_E0BD_41E3_4AE80F15CCE2, 'hideEffect', false)",
    "camera": "this.panorama_A40213C0_ADD0_E913_41D1_4368DF61B7DD_camera",
    "end": "if(this.existsKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')){ if(this.getKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')) { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, true, 0, this.effect_A5BE8F28_AE5A_A1AB_41CD_519417B64C45, 'showEffect', false); } else { this.setComponentVisibility(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F, false, 0, this.effect_A46CAFB3_AE5A_E0BD_41E3_4AE80F15CCE2, 'hideEffect', false); } }; this.unregisterKey('visibility_DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F')",
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
  "id": "playList_A48ECD1D_AE5A_A165_41CF_1E16C2A5D39E"
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
  "id": "playList_A48EAD1D_AE5A_A165_41DB_E32357D4BBB3"
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
  "id": "playList_A48E7D1D_AE5A_A165_41C7_5BC5AA8C56AA"
 },
 {
  "duration": 1000,
  "class": "FadeInEffect",
  "id": "effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42",
  "easing": "linear"
 },
 {
  "duration": 1000,
  "class": "FadeOutEffect",
  "id": "effect_D3728F7A_DF8C_960C_417C_830810DD2653",
  "easing": "linear"
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
   "yaw": 64.06
  },
  "id": "camera_A4A10D38_AE5A_A1AB_41E1_F853194B363B"
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
   "yaw": -80.06
  },
  "id": "camera_A4ABDD44_AE5A_A1DB_41DC_464EF82039C6"
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
   "yaw": -142
  },
  "id": "camera_A4AECD4F_AE5A_A1E5_41DA_F283F44BFDCA"
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
   "yaw": 2.41
  },
  "id": "camera_A551CD5A_AE5A_A1EF_41AF_74326B1C1F49"
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
   "yaw": -157.05
  },
  "id": "camera_A554CD65_AE5A_A1A5_41D0_475794AD28CE"
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
   "yaw": -124.58
  },
  "id": "camera_A55FCD71_AE5A_A1BD_41E2_97D4F6FE509A"
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
   "yaw": -153.6
  },
  "id": "camera_A542BD7C_AE5A_A1AB_41DD_AFA5C9835730"
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
   "yaw": -166.5
  },
  "id": "camera_A545ED86_AE5A_A167_41D6_1387161A1A32"
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
   "yaw": 49.07
  },
  "id": "camera_A5489D91_AE5A_A17D_41DF_306637ADEF74"
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
   "yaw": 5.03
  },
  "id": "camera_A5736D9B_AE5A_A16D_41DE_F448A66DB13F"
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
   "yaw": -171.96
  },
  "id": "camera_A575BDA6_AE5A_A0A7_41D9_6A6B284C872F"
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
   "yaw": -117.95
  },
  "id": "camera_A5782DB0_AE5A_A0BB_41DD_3F54F7D9375E"
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
   "yaw": -125.06
  },
  "id": "camera_A5626DBB_AE5A_A0AD_41D3_B6EE64D8AB51"
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
   "yaw": 20.8
  },
  "id": "camera_A5646DC5_AE5A_A0E5_4181_15E53E9A1912"
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
   "yaw": 164.6
  },
  "id": "camera_A56EADD0_AE5A_A0FB_41C3_0EA1ADE4E521"
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
   "yaw": 44.94
  },
  "id": "camera_A5171DE6_AE5A_A0A7_41C4_437F8E2D0E50"
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
   "yaw": 171.14
  },
  "id": "camera_A51F4DFB_AE5A_A0AD_41C5_F52FDB853ACF"
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
   "yaw": -158.88
  },
  "id": "camera_A506BE0D_AE5A_A365_41D9_3AFD3A0B512B"
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
   "yaw": -75.99
  },
  "id": "camera_A50E8E23_AE5A_A35D_41D0_BC14DCAD7DA7"
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
   "yaw": 176.27
  },
  "id": "camera_A536AE39_AE5A_A3AD_41D9_8F1CC7860ECC"
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
   "yaw": 176.25
  },
  "id": "camera_A53E9E4A_AE5A_A3EF_41BE_D753BDD1460C"
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
   "yaw": 156.97
  },
  "id": "camera_A5266E60_AE5A_A3DB_41E0_2A65E258D446"
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
   "yaw": -123
  },
  "id": "camera_A52E1E70_AE5A_A3BB_41D3_89666BB90AF6"
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
   "yaw": 115.41
  },
  "id": "camera_A5D5CE86_AE5A_A367_41E0_F263F2F3788B"
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
   "yaw": -71.62
  },
  "id": "camera_A5DD4E97_AE5A_A365_41DB_F951641B536D"
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
   "yaw": 164.13
  },
  "id": "camera_A5C4EEAD_AE5A_A0AA_41E2_4E0573555857"
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
   "yaw": -162.86
  },
  "id": "camera_A5CD2EBD_AE5A_A0A5_41DC_34E908073323"
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
   "yaw": -103.2
  },
  "id": "camera_A5F49ED2_AE5A_A0FF_41CD_FD0F8F36E652"
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
   "yaw": -163
  },
  "id": "camera_A5FC6EDD_AE5A_A0E5_41D9_ABA24A38F3BA"
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
   "yaw": -52.74
  },
  "id": "camera_A5E42EE9_AE5A_A0AA_41CC_397812489BD0"
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
   "yaw": -59.2
  },
  "id": "camera_A593DEF3_AE5A_A0BE_41E4_8B2E0A8A8B50"
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
   "yaw": -155.54
  },
  "id": "camera_A59B7EFC_AE5A_A0AA_41B5_7DB85A233B0A"
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
   "yaw": 156.53
  },
  "id": "camera_A5832F06_AE5A_A166_41D7_64CC42515DB4"
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
   "yaw": -36.09
  },
  "id": "camera_A58ACF11_AE5A_A17A_41E2_F9A847258D40"
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
   "yaw": 145.49
  },
  "id": "camera_A5B25F1B_AE5A_A16D_41DA_FA362C1237D0"
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
   "yaw": 117.68
  },
  "id": "camera_A5BA5F25_AE5A_A1A5_41BB_29F62F82B2C5"
 },
 {
  "duration": 1000,
  "class": "FadeInEffect",
  "id": "effect_A4524D31_AE5B_A1BD_41E0_B77AE6DF6F18",
  "easing": "cubic_in_out"
 },
 "this.effect_A4524D31_AE5B_A1BD_41E0_B77AE6DF6F18",
 {
  "duration": 1000,
  "class": "FadeOutEffect",
  "id": "effect_A5B9BF26_AE5A_A1A7_41D4_9D0A84CA7480",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "class": "FadeOutEffect",
  "id": "effect_A46CAFB3_AE5A_E0BD_41E3_4AE80F15CCE2",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "class": "FadeInEffect",
  "id": "effect_A5B8BF27_AE5A_A1A5_41E0_0D4D0C668CEB",
  "easing": "cubic_in_out"
 },
 "this.effect_A46CAFB3_AE5A_E0BD_41E3_4AE80F15CCE2",
 "this.effect_A4524D31_AE5B_A1BD_41E0_B77AE6DF6F18",
 "this.effect_A4524D31_AE5B_A1BD_41E0_B77AE6DF6F18",
 {
  "duration": 1000,
  "class": "FadeOutEffect",
  "id": "effect_A5BF2F28_AE5A_A1AB_41E1_DA9CEEBB4C8C",
  "easing": "cubic_in_out"
 },
 "this.effect_A46CAFB3_AE5A_E0BD_41E3_4AE80F15CCE2",
 {
  "duration": 1000,
  "class": "FadeInEffect",
  "id": "effect_A5BE8F28_AE5A_A1AB_41CD_519417B64C45",
  "easing": "cubic_in_out"
 },
 "this.effect_A46CAFB3_AE5A_E0BD_41E3_4AE80F15CCE2"
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
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "shadow": false,
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
  "progressBarOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 0,
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
  "minWidth": 100,
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
  "minHeight": 50,
  "playbackBarHeadWidth": 6,
  "toolTipShadowVerticalLength": 0,
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "width": "100%",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "progressBarBorderRadius": 0,
  "class": "ViewerArea",
  "progressBarBorderSize": 0,
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "toolTipFontFamily": "Arial",
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "left": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
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
      "minWidth": 1,
      "iconURL": "skin/IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9.png",
      "toolTipPaddingRight": 6,
      "toolTipOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "borderSize": 0,
      "paddingLeft": 0,
      "toolTipShadowOpacity": 1,
      "toolTipShadowHorizontalLength": 0,
      "toolTipPaddingLeft": 6,
      "minHeight": 1,
      "shadow": false,
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowBlurRadius": 3,
      "verticalAlign": "middle",
      "mode": "toggle",
      "class": "IconButton",
      "toolTipFontColor": "#606060",
      "paddingTop": 0,
      "toolTipFontFamily": "Arial",
      "toolTip": "Info",
      "toolTipShadowColor": "#333333",
      "transparencyActive": true,
      "toolTipBorderRadius": 3,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "pressedIconURL": "skin/IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9_pressed.png",
      "toolTipPaddingTop": 4,
      "width": 75,
      "height": 50,
      "backgroundOpacity": 0,
      "id": "IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9",
      "borderRadius": 0,
      "paddingRight": 0
     },
     {
      "toolTipTextShadowColor": "#000000",
      "horizontalAlign": "center",
      "toolTipShadowBlurRadius": 3,
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "minWidth": 1,
      "iconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0.png",
      "toolTipPaddingRight": 6,
      "toolTipOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "borderSize": 0,
      "paddingLeft": 0,
      "toolTipShadowOpacity": 1,
      "toolTipShadowHorizontalLength": 0,
      "toolTipPaddingLeft": 6,
      "minHeight": 1,
      "shadow": false,
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowBlurRadius": 3,
      "verticalAlign": "middle",
      "mode": "toggle",
      "class": "IconButton",
      "toolTipFontColor": "#606060",
      "paddingTop": 0,
      "toolTipFontFamily": "Arial",
      "toolTip": "Casa Modelo",
      "toolTipShadowColor": "#333333",
      "transparencyActive": true,
      "toolTipBorderRadius": 3,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "click": "this.mainPlayList.set('selectedIndex', 9)",
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "pressedIconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0_pressed.png",
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
      "minWidth": 1,
      "iconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2.png",
      "toolTipPaddingRight": 6,
      "toolTipOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "borderSize": 0,
      "paddingLeft": 0,
      "toolTipShadowOpacity": 1,
      "toolTipShadowHorizontalLength": 0,
      "toolTipPaddingLeft": 6,
      "minHeight": 1,
      "shadow": false,
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowBlurRadius": 3,
      "verticalAlign": "middle",
      "mode": "toggle",
      "class": "IconButton",
      "toolTipFontColor": "#606060",
      "paddingTop": 0,
      "toolTipFontFamily": "Arial",
      "toolTip": "Map",
      "toolTipShadowColor": "#333333",
      "transparencyActive": true,
      "toolTipBorderRadius": 3,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "click": "if(!this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, true, 0, this.effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42, 'showEffect', false) } else if(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, false, 0, this.effect_D3728F7A_DF8C_960C_417C_830810DD2653, 'hideEffect', false) }",
      "toolTipTextShadowOpacity": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "pressedIconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2_pressed.png",
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
    "layout": "horizontal",
    "minWidth": 334,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "borderSize": 0,
    "minHeight": 77,
    "scrollBarWidth": 10,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "class": "Container",
    "verticalAlign": "middle",
    "overflow": "scroll",
    "paddingTop": 0,
    "backgroundColorDirection": "vertical",
    "scrollBarColor": "#000000",
    "backgroundColor": [
     "#000000"
    ],
    "gap": 10,
    "width": 334,
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
  "layout": "horizontal",
  "minWidth": 1,
  "bottom": "0%",
  "borderSize": 0,
  "paddingLeft": 0,
  "minHeight": 1,
  "scrollBarWidth": 10,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "class": "Container",
  "verticalAlign": "middle",
  "overflow": "scroll",
  "paddingTop": 0,
  "left": "0%",
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
    "layout": "vertical",
    "minWidth": 1,
    "borderSize": 0,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "shadow": false,
    "scrollBarMargin": 2,
    "class": "Container",
    "verticalAlign": "middle",
    "overflow": "scroll",
    "paddingTop": 0,
    "paddingBottom": 0,
    "scrollBarColor": "#000000",
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "height": "81.45%",
    "backgroundOpacity": 0,
    "id": "Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5",
    "width": "100%",
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingRight": 0
   }
  ],
  "layout": "vertical",
  "minWidth": 1,
  "top": "2.05%",
  "borderSize": 0,
  "paddingLeft": 0,
  "minHeight": 1,
  "scrollBarWidth": 10,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "class": "Container",
  "verticalAlign": "top",
  "overflow": "scroll",
  "paddingTop": 0,
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
    "backgroundOpacity": 0.72,
    "fontSize": 14,
    "popUpBackgroundOpacity": 0.72,
    "popUpShadowBlurRadius": 6,
    "minWidth": 200,
    "selectedPopUpFontColor": "#FFFFFF",
    "popUpShadowSpread": 1,
    "prompt": "Location List",
    "selectedPopUpBackgroundColor": "#0066FF",
    "paddingLeft": 5,
    "fontStyle": "normal",
    "borderSize": 0,
    "minHeight": 20,
    "popUpShadowColor": "#000000",
    "shadow": false,
    "popUpBorderRadius": 0,
    "fontWeight": "normal",
    "arrowColor": "#0066FF",
    "arrowBeforeLabel": false,
    "class": "DropDown",
    "popUpShadowOpacity": 0,
    "paddingTop": 0,
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
    "paddingBottom": 0,
    "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F",
    "width": "20.256%",
    "borderRadius": 4,
    "height": "27.397%",
    "playList": "this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingRight": 5
   }
  ],
  "layout": "horizontal",
  "minWidth": 1,
  "top": "0.96%",
  "borderSize": 0,
  "paddingLeft": 0,
  "minHeight": 1,
  "scrollBarWidth": 10,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "class": "Container",
  "verticalAlign": "top",
  "overflow": "scroll",
  "paddingTop": 0,
  "left": "0%",
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
  "minWidth": 1,
  "textShadowOpacity": 1,
  "top": "0%",
  "borderSize": 0,
  "paddingLeft": 0,
  "fontStyle": "normal",
  "minHeight": 1,
  "shadow": false,
  "fontWeight": "normal",
  "textShadowHorizontalLength": 1,
  "class": "Label",
  "verticalAlign": "middle",
  "textShadowBlurRadius": 3,
  "paddingTop": 0,
  "textShadowVerticalLength": 1,
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
  "minWidth": 1,
  "textShadowOpacity": 1,
  "top": "0%",
  "borderSize": 0,
  "paddingLeft": 0,
  "fontStyle": "normal",
  "minHeight": 1,
  "shadow": false,
  "fontWeight": "normal",
  "textShadowHorizontalLength": 1,
  "class": "Label",
  "verticalAlign": "middle",
  "textShadowBlurRadius": 3,
  "paddingTop": 0,
  "textShadowVerticalLength": 1,
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
  "minWidth": 1,
  "textShadowOpacity": 1,
  "top": "0%",
  "borderSize": 0,
  "paddingLeft": 0,
  "fontStyle": "normal",
  "minHeight": 1,
  "shadow": false,
  "fontWeight": "normal",
  "textShadowHorizontalLength": 1,
  "class": "Label",
  "verticalAlign": "middle",
  "textShadowBlurRadius": 3,
  "paddingTop": 0,
  "textShadowVerticalLength": 1,
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
  "minWidth": 1,
  "textShadowOpacity": 1,
  "top": "6%",
  "borderSize": 0,
  "paddingLeft": 0,
  "fontStyle": "normal",
  "minHeight": 1,
  "shadow": false,
  "fontWeight": "normal",
  "textShadowHorizontalLength": 1,
  "class": "Label",
  "verticalAlign": "middle",
  "textShadowBlurRadius": 3,
  "paddingTop": 0,
  "textShadowVerticalLength": 1,
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
      "minWidth": 1,
      "top": "0%",
      "paddingLeft": 0,
      "borderSize": 0,
      "minHeight": 1,
      "shadow": false,
      "insetBorder": false,
      "class": "WebFrame",
      "paddingTop": 0,
      "scrollEnabled": true,
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
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0
      ],
      "paddingRight": 0
     },
     {
      "horizontalAlign": "center",
      "minWidth": 40,
      "top": "0%",
      "borderSize": 0,
      "paddingLeft": 0,
      "minHeight": 40,
      "shadow": false,
      "verticalAlign": "middle",
      "scaleMode": "fit_inside",
      "class": "Image",
      "maxWidth": 394,
      "paddingTop": 0,
      "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, false, 0, null, null, false)",
      "maxHeight": 396,
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
    "layout": "absolute",
    "minWidth": 1,
    "horizontalAlign": "left",
    "bottom": "3.11%",
    "minHeight": 1,
    "borderSize": 0,
    "paddingLeft": 0,
    "scrollBarWidth": 10,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "class": "Container",
    "verticalAlign": "top",
    "overflow": "scroll",
    "paddingTop": 0,
    "left": "4.32%",
    "backgroundColorDirection": "vertical",
    "scrollBarColor": "#000000",
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingBottom": 0,
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
  "layout": "absolute",
  "minWidth": 1,
  "top": "0%",
  "horizontalAlign": "left",
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 1,
  "scrollBarWidth": 10,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "class": "Container",
  "verticalAlign": "top",
  "overflow": "scroll",
  "paddingTop": 0,
  "left": "0%",
  "backgroundColorDirection": "vertical",
  "scrollBarColor": "#000000",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "backgroundColor": [
   "#000000"
  ],
  "paddingBottom": 0,
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
 }
], 
 "layout": "absolute",
 "minWidth": 20,
 "horizontalAlign": "left",
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_A48ECD1D_AE5A_A165_41CF_1E16C2A5D39E.set('selectedIndex', 0)",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "Player",
 "verticalAlign": "top",
 "overflow": "visible",
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scripts": {
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "registerKey": function(key, value){    window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getKey": function(key){    return window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "existsKey": function(key){    return key in window; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "unregisterKey": function(key){    delete window[key]; },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); }
 },
 "scrollBarColor": "#000000",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "id": "rootPlayer",
 "width": "100%",
 "borderRadius": 0,
 "height": "100%",
 "contentOpaque": false,
 "paddingRight": 0
})