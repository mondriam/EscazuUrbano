TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "mapLocations": [
   {
    "y": 690.63,
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
        "x": 351.4,
        "height": 25,
        "y": 678.13
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 678.13,
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
        "x": 351.4
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
        "x": 340.03,
        "height": 25,
        "y": 639.66
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 639.66,
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
        "x": 340.03
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
        "x": 350.61,
        "height": 25,
        "y": 595.87
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 595.87,
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
        "x": 350.61
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
        "x": 374.43,
        "height": 25,
        "y": 612.28
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 612.28,
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
        "x": 374.43
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
        "x": 379.29,
        "height": 25,
        "y": 652.11
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 652.11,
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
        "x": 379.29
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
        "x": 216.18,
        "height": 25,
        "y": 84.92
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 84.92,
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
        "x": 216.18
       },
       "id": "overlay_B85AADD9_AE30_7935_418C_49774A3F1323",
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
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_6.png",
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 25,
        "x": 264.44,
        "height": 25,
        "y": 658.67
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 658.67,
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
        "x": 264.44
       },
       "id": "overlay_BAF4F184_AE30_2913_41D7_D5320C010656",
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
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_7.png",
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 25,
        "x": 182.12,
        "height": 25,
        "y": 638.81
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 638.81,
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
        "x": 182.12
       },
       "id": "overlay_BB8BD87E_AE30_27EF_41CD_3E50E37DC6C9",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 8)",
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
        "x": 88.43,
        "height": 25,
        "y": 264.27
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 264.27,
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
        "x": 88.43
       },
       "id": "overlay_B861AF51_AE50_7935_41D1_7279F4D9342F",
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
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_9.png",
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 25,
        "x": 384.5,
        "height": 25,
        "y": 596.15
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 596.15,
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
        "x": 384.5
       },
       "id": "overlay_9B8B69CB_BD7D_6BCF_41D2_C3E1DE217D96",
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
           "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_10.png",
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "class": "HotspotMapOverlayImage",
        "width": 25,
        "x": 126.51,
        "height": 25,
        "y": 216.01
       },
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true,
       "map": {
        "height": 25,
        "y": 216.01,
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
        "x": 126.51
       },
       "id": "overlay_9A15731C_BD7D_D84A_41E0_DA389A2E262F",
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 10)",
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
    "angle": -27.49,
    "x": 363.9
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
       "y": 652.16,
       "class": "PanoramaMapLocation",
       "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
       "angle": -45.98,
       "x": 352.53
      }
     ],
     "class": "Panorama",
     "partial": false,
     "label": "Acceso Principal",
     "hfovMax": 120,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB",
       "class": "AdjacentPanorama",
       "backwardYaw": 14.06,
       "yaw": -127.04,
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
              "x": 49.62,
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
              "x": 49.62
             },
             "id": "overlay_B8AFC1F0_AE70_E8F3_41DF_4DA851E12770",
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
                 "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_1.png",
                 "height": 25,
                 "class": "ImageResourceLevel",
                 "width": 25
                }
               ]
              },
              "class": "HotspotMapOverlayImage",
              "width": 25,
              "x": 227.27,
              "height": 25,
              "y": 230.83
             },
             "class": "AreaHotspotMapOverlay",
             "rollOverDisplay": true,
             "useHandCursor": true,
             "map": {
              "height": 25,
              "y": 230.83,
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
              "x": 227.27
             },
             "id": "overlay_B942F424_AE70_2F13_4182_5C003BEE434A",
             "areas": [
              {
               "click": "this.mainPlayList.set('selectedIndex', 12)",
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
              "x": 290.64,
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
              "x": 290.64
             },
             "id": "overlay_B925714F_AE70_692D_4194_4B98DAECC533",
             "areas": [
              {
               "click": "this.mainPlayList.set('selectedIndex', 20)",
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
          "angle": 53.41,
          "x": 62.12
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
             "y": 433.43,
             "class": "PanoramaMapLocation",
             "map": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
             "angle": -85.51,
             "x": 303.14
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
                  "click": "this.mainPlayList.set('selectedIndex', 20)",
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
                 "y": 641.58
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "useHandCursor": true,
                "map": {
                 "height": 25,
                 "y": 641.58,
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
                    "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_4.png",
                    "height": 25,
                    "class": "ImageResourceLevel",
                    "width": 25
                   }
                  ]
                 },
                 "class": "HotspotMapOverlayImage",
                 "width": 25,
                 "x": 81.47,
                 "height": 25,
                 "y": 287.41
                },
                "class": "AreaHotspotMapOverlay",
                "rollOverDisplay": true,
                "useHandCursor": true,
                "map": {
                 "height": 25,
                 "y": 287.41,
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
                 "x": 81.47
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
                 "x": 229.7,
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
                 "x": 229.7
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
                  "click": "this.mainPlayList.set('selectedIndex', 19)",
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
             "angle": 267.01,
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
             "panorama": "this.panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9",
             "class": "AdjacentPanorama",
             "backwardYaw": 44.7,
             "yaw": 8.6,
             "distance": 1
            },
            {
             "panorama": {
              "mapLocations": [
               {
                "y": 496.8,
                "class": "PanoramaMapLocation",
                "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                "angle": -85.36,
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
                   "y": 491.14,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                   "angle": 6.84,
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
                   "panorama": "this.panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174",
                   "class": "AdjacentPanorama",
                   "backwardYaw": -5.74,
                   "yaw": 104.96,
                   "distance": 1
                  }
                 ],
                 "id": "panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16",
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_t.jpg",
                 "vfov": 180,
                 "pitch": 0,
                 "frames": [
                  {
                   "right": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_r.jpeg",
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
                      "url": "media/panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_f.jpeg",
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
                      "url": "media/panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_b.jpeg",
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
                      "url": "media/panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_u.jpeg",
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
                     "id": "overlay_A89B85FA_BD35_5BC9_41D5_A2794ED24286",
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_0_HS_0_0.png",
                          "height": 88,
                          "class": "ImageResourceLevel",
                          "width": 87
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 4.15,
                       "pitch": -37.56,
                       "yaw": 104.96
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174, this.camera_B3FA864D_BD91_2D58_41E5_A983EE4BAD37); this.mainPlayList.set('selectedIndex', 19)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_0_HS_0_0_0_map.gif",
                          "height": 44,
                          "class": "ImageResourceLevel",
                          "width": 43
                         }
                        ]
                       },
                       "pitch": -37.56,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 104.96,
                       "hfov": 4.15
                      }
                     ]
                    }
                   ],
                   "bottom": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_d.jpeg",
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
                      "url": "media/panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_t.jpg"
                  }
                 ]
                },
                "class": "AdjacentPanorama",
                "backwardYaw": 104.96,
                "yaw": -5.74,
                "distance": 1
               },
               {
                "panorama": {
                 "mapLocations": [
                  {
                   "y": 299.91,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                   "angle": -21.1,
                   "x": 93.97
                  }
                 ],
                 "class": "Panorama",
                 "partial": false,
                 "label": "Panorama (18)",
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174",
                   "class": "AdjacentPanorama",
                   "backwardYaw": 83.26,
                   "yaw": -168.85,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "mapLocations": [
                     {
                      "y": 336.12,
                      "class": "PanoramaMapLocation",
                      "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                      "angle": 103.29,
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
                      "panorama": "this.panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0",
                      "class": "AdjacentPanorama",
                      "backwardYaw": 137.61,
                      "yaw": 175.91,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "mapLocations": [
                        {
                         "y": 234.28,
                         "class": "PanoramaMapLocation",
                         "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                         "angle": 73.75,
                         "x": 242.2
                        }
                       ],
                       "class": "Panorama",
                       "partial": false,
                       "label": "Panorama (20)",
                       "hfovMax": 120,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED",
                         "class": "AdjacentPanorama",
                         "backwardYaw": -87.95,
                         "yaw": 146.36,
                         "distance": 1
                        }
                       ],
                       "id": "panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113",
                       "hfov": 360,
                       "thumbnailUrl": "media/panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_t.jpg",
                       "vfov": 180,
                       "pitch": 0,
                       "frames": [
                        {
                         "right": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_r_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_r.jpeg",
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
                            "url": "media/panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_f_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_f.jpeg",
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
                            "url": "media/panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_b_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_b.jpeg",
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
                            "url": "media/panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_u_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_u.jpeg",
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
                           "id": "overlay_AB4ED511_BD3B_585D_41BA_79D1963F93D0",
                           "useHandCursor": true,
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_0_HS_0_0.png",
                                "height": 92,
                                "class": "ImageResourceLevel",
                                "width": 91
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 4.69,
                             "pitch": -31.51,
                             "yaw": 146.36
                            }
                           ],
                           "rollOverDisplay": false,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED, this.camera_B37A1703_BD91_2CC8_41DD_E61420CF1778); this.mainPlayList.set('selectedIndex', 17)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "url": "media/panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_0_HS_0_0_0_map.gif",
                                "height": 46,
                                "class": "ImageResourceLevel",
                                "width": 45
                               }
                              ]
                             },
                             "pitch": -31.51,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 146.36,
                             "hfov": 4.69
                            }
                           ]
                          }
                         ],
                         "bottom": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "url": "media/panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_d_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_d.jpeg",
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
                            "url": "media/panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_l_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_t.jpg"
                        }
                       ]
                      },
                      "class": "AdjacentPanorama",
                      "backwardYaw": 146.36,
                      "yaw": -87.95,
                      "distance": 1
                     }
                    ],
                    "id": "panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED",
                    "hfov": 360,
                    "thumbnailUrl": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_t.jpg",
                    "vfov": 180,
                    "pitch": 0,
                    "frames": [
                     {
                      "right": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_r_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_r.jpeg",
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
                         "url": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_f_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_f.jpeg",
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
                         "url": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_b_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_b.jpeg",
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
                         "url": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_u_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_u.jpeg",
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
                        "id": "overlay_AB5C2E45_BD3D_683B_41D7_0A5C0E5D3BEE",
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_0_HS_1_0.png",
                             "height": 105,
                             "class": "ImageResourceLevel",
                             "width": 105
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 4.92,
                          "pitch": -38.64,
                          "yaw": -87.95
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113, this.camera_B3E2F678_BD91_2D38_41D5_06E31748EA71); this.mainPlayList.set('selectedIndex', 18)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_0_HS_1_0_0_map.gif",
                             "height": 52,
                             "class": "ImageResourceLevel",
                             "width": 52
                            }
                           ]
                          },
                          "pitch": -38.64,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -87.95,
                          "hfov": 4.92
                         }
                        ]
                       },
                       {
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "id": "overlay_AB7CD1D7_BD3C_FBC7_41D9_0A2A612B8585",
                        "useHandCursor": true,
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_0_HS_0_0.png",
                             "height": 87,
                             "class": "ImageResourceLevel",
                             "width": 87
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 5.01,
                          "pitch": -18.35,
                          "yaw": 175.91
                         }
                        ],
                        "rollOverDisplay": false,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0, this.camera_B3E8A66D_BD91_2D58_41E3_55939EC169FE); this.mainPlayList.set('selectedIndex', 16)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "url": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_0_HS_0_0_0_map.gif",
                             "height": 43,
                             "class": "ImageResourceLevel",
                             "width": 43
                            }
                           ]
                          },
                          "pitch": -18.35,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 175.91,
                          "hfov": 5.01
                         }
                        ]
                       }
                      ],
                      "bottom": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "url": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_d_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_d.jpeg",
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
                         "url": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_l_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_t.jpg"
                     }
                    ]
                   },
                   "class": "AdjacentPanorama",
                   "backwardYaw": 175.91,
                   "yaw": 137.61,
                   "distance": 1
                  }
                 ],
                 "id": "panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0",
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_t.jpg",
                 "vfov": 180,
                 "pitch": 0,
                 "frames": [
                  {
                   "right": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_r.jpeg",
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
                      "url": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_f.jpeg",
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
                      "url": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_b.jpeg",
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
                      "url": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_u.jpeg",
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
                     "id": "overlay_A8B60F5D_BD3F_68CB_4177_CCF7620CAA3D",
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_0_HS_1_0.png",
                          "height": 87,
                          "class": "ImageResourceLevel",
                          "width": 87
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 4.92,
                       "pitch": -19.79,
                       "yaw": -168.85
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174, this.camera_B34AE6ED_BD91_2D58_41AB_96F484BEF120); this.mainPlayList.set('selectedIndex', 19)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_0_HS_1_0_0_map.gif",
                          "height": 43,
                          "class": "ImageResourceLevel",
                          "width": 43
                         }
                        ]
                       },
                       "pitch": -19.79,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -168.85,
                       "hfov": 4.92
                      }
                     ]
                    },
                    {
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_AB134552_BD3D_B8D9_41A1_798A04BBDE87",
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_0_HS_0_0.png",
                          "height": 87,
                          "class": "ImageResourceLevel",
                          "width": 87
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 4.67,
                       "pitch": -27.71,
                       "yaw": 137.61
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED, this.camera_B34286F8_BD91_2D38_41A9_C21B8291C03D); this.mainPlayList.set('selectedIndex', 17)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_0_HS_0_0_0_map.gif",
                          "height": 43,
                          "class": "ImageResourceLevel",
                          "width": 43
                         }
                        ]
                       },
                       "pitch": -27.71,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 137.61,
                       "hfov": 4.67
                      }
                     ]
                    }
                   ],
                   "bottom": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_d.jpeg",
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
                      "url": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_t.jpg"
                  }
                 ]
                },
                "class": "AdjacentPanorama",
                "backwardYaw": -168.85,
                "yaw": 83.26,
                "distance": 1
               },
               {
                "panorama": "this.panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1",
                "class": "AdjacentPanorama",
                "backwardYaw": -12.96,
                "yaw": 159.1,
                "distance": 1
               },
               {
                "panorama": {
                 "mapLocations": [
                  {
                   "y": 606.56,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                   "angle": -193.01,
                   "x": 258.04
                  }
                 ],
                 "class": "Panorama",
                 "partial": false,
                 "label": "Panorama (16)",
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174",
                   "class": "AdjacentPanorama",
                   "backwardYaw": -136.08,
                   "yaw": 159.93,
                   "distance": 1
                  }
                 ],
                 "id": "panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715",
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_t.jpg",
                 "vfov": 180,
                 "pitch": 0,
                 "frames": [
                  {
                   "right": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_r.jpeg",
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
                      "url": "media/panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_f.jpeg",
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
                      "url": "media/panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_b.jpeg",
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
                      "url": "media/panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_u.jpeg",
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
                     "id": "overlay_A51773CF_BD34_FFC7_41E6_31058656A290",
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_0_HS_0_0.png",
                          "height": 92,
                          "class": "ImageResourceLevel",
                          "width": 91
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 4.67,
                       "pitch": -31.49,
                       "yaw": 159.93
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174, this.camera_B3A8F5B9_BD91_2F38_41E4_CDE11B299295); this.mainPlayList.set('selectedIndex', 19)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_0_HS_0_0_0_map.gif",
                          "height": 46,
                          "class": "ImageResourceLevel",
                          "width": 45
                         }
                        ]
                       },
                       "pitch": -31.49,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 159.93,
                       "hfov": 4.67
                      }
                     ]
                    }
                   ],
                   "bottom": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_d.jpeg",
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
                      "url": "media/panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_t.jpg"
                  }
                 ]
                },
                "class": "AdjacentPanorama",
                "backwardYaw": 159.93,
                "yaw": -136.08,
                "distance": 1
               },
               {
                "panorama": {
                 "mapLocations": [
                  {
                   "y": 654.08,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                   "angle": 14.53,
                   "x": 99.63
                  }
                 ],
                 "class": "Panorama",
                 "partial": false,
                 "label": "Panorama (15)",
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174",
                   "class": "AdjacentPanorama",
                   "backwardYaw": -72.43,
                   "yaw": 9.56,
                   "distance": 1
                  }
                 ],
                 "id": "panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B",
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_t.jpg",
                 "vfov": 180,
                 "pitch": 0,
                 "frames": [
                  {
                   "right": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_r.jpeg",
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
                      "url": "media/panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_f.jpeg",
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
                      "url": "media/panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_b.jpeg",
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
                      "url": "media/panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_u.jpeg",
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
                     "id": "overlay_AB63E8A4_BD3B_A879_41C1_514B1C234179",
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_0_HS_0_0.png",
                          "height": 105,
                          "class": "ImageResourceLevel",
                          "width": 105
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.82,
                       "pitch": -22.67,
                       "yaw": 9.56
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174, this.camera_B2880742_BD91_2B48_41E4_E9B900F09FCD); this.mainPlayList.set('selectedIndex', 19)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_0_HS_0_0_0_map.gif",
                          "height": 52,
                          "class": "ImageResourceLevel",
                          "width": 52
                         }
                        ]
                       },
                       "pitch": -22.67,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 9.56,
                       "hfov": 5.82
                      }
                     ]
                    }
                   ],
                   "bottom": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_d.jpeg",
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
                      "url": "media/panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_t.jpg"
                  }
                 ]
                },
                "class": "AdjacentPanorama",
                "backwardYaw": 9.56,
                "yaw": -72.43,
                "distance": 1
               }
              ],
              "id": "panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174",
              "hfov": 360,
              "thumbnailUrl": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "frames": [
               {
                "right": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_r.jpeg",
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
                   "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_f.jpeg",
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
                   "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_b.jpeg",
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
                   "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_u.jpeg",
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
                  "id": "overlay_A9B97DDB_BD34_EBCE_41C1_A677B888CBE0",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_0_HS_4_0.png",
                       "height": 87,
                       "class": "ImageResourceLevel",
                       "width": 87
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 4.52,
                    "pitch": -31.08,
                    "yaw": 159.1
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1, this.camera_B32C36CD_BD91_2D58_41E5_A3F71583055F); this.mainPlayList.set('selectedIndex', 20)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_0_HS_4_0_0_map.gif",
                       "height": 43,
                       "class": "ImageResourceLevel",
                       "width": 43
                      }
                     ]
                    },
                    "pitch": -31.08,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 159.1,
                    "hfov": 4.52
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_A9D07CC7_BD35_A9C7_41DE_C22F9D4BB806",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_0_HS_3_0.png",
                       "height": 87,
                       "class": "ImageResourceLevel",
                       "width": 86
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.1,
                    "pitch": -10.2,
                    "yaw": 83.26
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0, this.camera_B334F6C3_BD91_2D48_41E0_F8B5A3605109); this.mainPlayList.set('selectedIndex', 16)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_0_HS_3_0_0_map.gif",
                       "height": 43,
                       "class": "ImageResourceLevel",
                       "width": 43
                      }
                     ]
                    },
                    "pitch": -10.2,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 83.26,
                    "hfov": 5.1
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_A9DA98F0_BD35_A9DA_41E4_3EF1AE7AB1A1",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_0_HS_2_0.png",
                       "height": 87,
                       "class": "ImageResourceLevel",
                       "width": 86
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 4.56,
                    "pitch": -28.42,
                    "yaw": -5.74
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16, this.camera_B33CA6B8_BD91_2D38_4196_89069017C380); this.mainPlayList.set('selectedIndex', 15)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_0_HS_2_0_0_map.gif",
                       "height": 43,
                       "class": "ImageResourceLevel",
                       "width": 43
                      }
                     ]
                    },
                    "pitch": -28.42,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -5.74,
                    "hfov": 4.56
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_A9D3F3E1_BD35_7FFB_41C8_F698BB0F9D3B",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_0_HS_1_0.png",
                       "height": 87,
                       "class": "ImageResourceLevel",
                       "width": 86
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 4.98,
                    "pitch": -16.27,
                    "yaw": -72.43
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B, this.camera_B35396E3_BD91_2D48_41E3_31E93FAC5411); this.mainPlayList.set('selectedIndex', 13)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_0_HS_1_0_0_map.gif",
                       "height": 43,
                       "class": "ImageResourceLevel",
                       "width": 43
                      }
                     ]
                    },
                    "pitch": -16.27,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -72.43,
                    "hfov": 4.98
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_A9D91BDA_BD34_AFC9_41E4_7AEA72B88B3E",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_0_HS_0_0.png",
                       "height": 87,
                       "class": "ImageResourceLevel",
                       "width": 86
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 4.95,
                    "pitch": -17.33,
                    "yaw": -136.08
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715, this.camera_B35BF6D8_BD91_2D78_419B_D27E36F180BF); this.mainPlayList.set('selectedIndex', 14)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_0_HS_0_0_0_map.gif",
                       "height": 43,
                       "class": "ImageResourceLevel",
                       "width": 43
                      }
                     ]
                    },
                    "pitch": -17.33,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -136.08,
                    "hfov": 4.95
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_B7B7F234_BD7F_68D0_41E0_94D4D7281218",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_0_HS_5_0.png",
                       "height": 190,
                       "class": "ImageResourceLevel",
                       "width": 190
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 11.42,
                    "pitch": 1.62,
                    "yaw": 20
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.showPopupPanoramaOverlay(this.popup_B6323F09_BD87_18B3_41E7_571F72A5907F, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_B61CAACE_BD87_19B0_41D4_6C84D7C8C53B, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_0_HS_5_0_0_map.gif",
                       "height": 95,
                       "class": "ImageResourceLevel",
                       "width": 95
                      }
                     ]
                    },
                    "pitch": 1.62,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 20,
                    "hfov": 11.42
                   }
                  ]
                 },
                 {
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "url": "media/popup_B6323F09_BD87_18B3_41E7_571F72A5907F_0_2.jpg",
                     "height": 512,
                     "class": "ImageResourceLevel",
                     "width": 512
                    },
                    {
                     "url": "media/popup_B6323F09_BD87_18B3_41E7_571F72A5907F_0_1.jpg",
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
                  "id": "popup_B6323F09_BD87_18B3_41E7_571F72A5907F",
                  "hideDuration": 500,
                  "hfov": 11.42,
                  "pitch": 1.62,
                  "showEasing": "cubic_in",
                  "yaw": 20
                 }
                ],
                "bottom": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_d.jpeg",
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
                   "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_t.jpg"
               }
              ]
             },
             "class": "AdjacentPanorama",
             "backwardYaw": 159.1,
             "yaw": -12.96,
             "distance": 1
            }
           ],
           "id": "panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_r.jpeg",
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
                "url": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_f.jpeg",
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
                "url": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_b.jpeg",
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
                "url": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_u.jpeg",
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
               "id": "overlay_A9688BA6_BD0B_6879_41E6_4E729B9685C5",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_0_HS_1_0.png",
                    "height": 87,
                    "class": "ImageResourceLevel",
                    "width": 87
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 4.76,
                 "pitch": -25.48,
                 "yaw": 8.6
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9, this.camera_B3FD4657_BD91_2D48_41AE_61A0D18E87AE); this.mainPlayList.set('selectedIndex', 11)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_0_HS_1_0_0_map.gif",
                    "height": 43,
                    "class": "ImageResourceLevel",
                    "width": 43
                   }
                  ]
                 },
                 "pitch": -25.48,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 8.6,
                 "hfov": 4.76
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_A9A30C71_BD0B_A8DB_41E1_D5FFBE873C7D",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_0_HS_0_0.png",
                    "height": 87,
                    "class": "ImageResourceLevel",
                    "width": 86
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.18,
                 "pitch": 2.24,
                 "yaw": -12.96
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174, this.camera_B3F71663_BD91_2D48_41C2_B6A5510B1945); this.mainPlayList.set('selectedIndex', 19)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_0_HS_0_0_0_map.gif",
                    "height": 43,
                    "class": "ImageResourceLevel",
                    "width": 43
                   }
                  ]
                 },
                 "pitch": 2.24,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -12.96,
                 "hfov": 5.18
                }
               ]
              }
             ],
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_d.jpeg",
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
                "url": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "thumbnailUrl": "media/panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": 8.6,
          "yaw": 44.7,
          "distance": 1
         },
         {
          "panorama": {
           "mapLocations": [
            {
             "y": 243.33,
             "class": "PanoramaMapLocation",
             "map": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
             "angle": 221.71,
             "x": 239.77
            }
           ],
           "class": "Panorama",
           "partial": false,
           "label": "Panorama (12)",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9",
             "class": "AdjacentPanorama",
             "backwardYaw": -3.85,
             "yaw": -8.77,
             "distance": 1
            }
           ],
           "id": "panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_r.jpeg",
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
                "url": "media/panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_f.jpeg",
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
                "url": "media/panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_b.jpeg",
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
                "url": "media/panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_u.jpeg",
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
               "id": "overlay_9FE212A4_BD75_F87A_41C8_6CC21D091D06",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_0_HS_0_0.png",
                    "height": 87,
                    "class": "ImageResourceLevel",
                    "width": 86
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.09,
                 "pitch": -11,
                 "yaw": -8.77
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9, this.camera_B38CB559_BD91_2F78_41AB_63A31D20F1DA); this.mainPlayList.set('selectedIndex', 11)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_0_HS_0_0_0_map.gif",
                    "height": 43,
                    "class": "ImageResourceLevel",
                    "width": 43
                   }
                  ]
                 },
                 "pitch": -11,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -8.77,
                 "hfov": 5.09
                }
               ]
              }
             ],
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_d.jpeg",
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
                "url": "media/panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "thumbnailUrl": "media/panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": -8.77,
          "yaw": -3.85,
          "distance": 1
         },
         {
          "panorama": "this.panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55",
          "class": "AdjacentPanorama",
          "backwardYaw": 11.34,
          "yaw": 82.6,
          "distance": 1
         }
        ],
        "id": "panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_r.jpeg",
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
             "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_f.jpeg",
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
             "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_b.jpeg",
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
             "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_u.jpeg",
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
            "id": "overlay_9FA8B357_BD74_D8C6_418A_A9417046CFBB",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_0_HS_2_0.png",
                 "height": 110,
                 "class": "ImageResourceLevel",
                 "width": 110
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.56,
              "pitch": -8.93,
              "yaw": 82.6
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55, this.camera_B360A722_BD91_2CC8_41E5_2DC817D354E0); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_0_HS_2_0_0_map.gif",
                 "height": 55,
                 "class": "ImageResourceLevel",
                 "width": 55
                }
               ]
              },
              "pitch": -8.93,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 82.6,
              "hfov": 6.56
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_9FFA7E42_BD74_A839_41DF_E1373E8A7F5E",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_0_HS_1_0.png",
                 "height": 87,
                 "class": "ImageResourceLevel",
                 "width": 86
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.15,
              "pitch": -6.23,
              "yaw": -3.85
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6, this.camera_B369F718_BD91_2CF8_41DE_AD281521417C); this.mainPlayList.set('selectedIndex', 12)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_0_HS_1_0_0_map.gif",
                 "height": 43,
                 "class": "ImageResourceLevel",
                 "width": 43
                }
               ]
              },
              "pitch": -6.23,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -3.85,
              "hfov": 5.15
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_9E6DE360_BD74_D8FA_41DC_875E7EFEFC35",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_0_HS_0_0.png",
                 "height": 87,
                 "class": "ImageResourceLevel",
                 "width": 86
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.17,
              "pitch": 4.19,
              "yaw": 44.7
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1, this.camera_B372570D_BD91_2CD8_41CE_CFC323B1DB3C); this.mainPlayList.set('selectedIndex', 20)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_0_HS_0_0_0_map.gif",
                 "height": 43,
                 "class": "ImageResourceLevel",
                 "width": 43
                }
               ]
              },
              "pitch": 4.19,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 44.7,
              "hfov": 5.17
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_B7B2FD02_BD7F_F8B0_41CE_EB9C9B9F238C",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_0_HS_3_0.png",
                 "height": 87,
                 "class": "ImageResourceLevel",
                 "width": 87
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.23,
              "pitch": 0.06,
              "yaw": -14.45
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.showPopupPanoramaOverlay(this.popup_B63D4858_BD87_3951_41E0_29F7243BA61C, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_B61D0ACB_BD87_19B0_41E4_FED876F7C96C, null, null, null, null, false)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_0_HS_3_0_0_map.gif",
                 "height": 43,
                 "class": "ImageResourceLevel",
                 "width": 43
                }
               ]
              },
              "pitch": 0.06,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -14.45,
              "hfov": 5.23
             }
            ]
           },
           {
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "url": "media/popup_B63D4858_BD87_3951_41E0_29F7243BA61C_0_2.jpg",
               "height": 512,
               "class": "ImageResourceLevel",
               "width": 512
              },
              {
               "url": "media/popup_B63D4858_BD87_3951_41E0_29F7243BA61C_0_1.jpg",
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
            "id": "popup_B63D4858_BD87_3951_41E0_29F7243BA61C",
            "hideDuration": 500,
            "hfov": 5.23,
            "pitch": 0.06,
            "showEasing": "cubic_in",
            "yaw": -14.45
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_d.jpeg",
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
             "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 82.6,
       "yaw": 11.34,
       "distance": 1
      },
      {
       "panorama": {
        "mapLocations": [
         {
          "y": 608.37,
          "class": "PanoramaMapLocation",
          "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
          "angle": 194.29,
          "x": 363.11
         }
        ],
        "class": "Panorama",
        "partial": false,
        "label": "Casa Club",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": {
           "mapLocations": [
            {
             "y": 624.78,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "angle": 144.92,
             "x": 386.93
            }
           ],
           "class": "Panorama",
           "partial": false,
           "label": "Gym",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_B0ADF307_BCF5_5847_4158_35195B49CA72",
             "class": "AdjacentPanorama",
             "backwardYaw": -89.05,
             "yaw": 152.65,
             "distance": 1
            }
           ],
           "id": "panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_r.jpeg",
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
                "url": "media/panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_f.jpeg",
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
                "url": "media/panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_b.jpeg",
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
                "url": "media/panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_u.jpeg",
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
               "id": "overlay_A6ED4935_BD15_685A_41E5_3C9B4E19E03F",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_0_HS_0_0.png",
                    "height": 87,
                    "class": "ImageResourceLevel",
                    "width": 87
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 4.96,
                 "pitch": -19.91,
                 "yaw": 152.65
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_B0ADF307_BCF5_5847_4158_35195B49CA72, this.camera_B3806564_BD91_2F48_41C7_B218448C09D0); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_0_HS_0_0_0_map.gif",
                    "height": 43,
                    "class": "ImageResourceLevel",
                    "width": 43
                   }
                  ]
                 },
                 "pitch": -19.91,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 152.65,
                 "hfov": 4.96
                }
               ]
              }
             ],
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_d.jpeg",
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
                "url": "media/panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "thumbnailUrl": "media/panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": 152.65,
          "yaw": -89.05,
          "distance": 1
         },
         {
          "panorama": {
           "mapLocations": [
            {
             "y": 664.61,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "angle": -11.57,
             "x": 391.79
            }
           ],
           "class": "Panorama",
           "partial": false,
           "label": "Piscina",
           "hfovMax": 120,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "panorama": {
              "mapLocations": [
               {
                "y": 608.65,
                "class": "PanoramaMapLocation",
                "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                "angle": 147.81,
                "x": 397
               }
              ],
              "class": "Panorama",
              "partial": false,
              "label": "Eventos",
              "hfovMax": 120,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA",
                "class": "AdjacentPanorama",
                "backwardYaw": 22.07,
                "yaw": 38.66,
                "distance": 1
               }
              ],
              "id": "panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243",
              "hfov": 360,
              "thumbnailUrl": "media/panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "frames": [
               {
                "right": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_r.jpeg",
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
                   "url": "media/panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_f.jpeg",
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
                   "url": "media/panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_b.jpeg",
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
                   "url": "media/panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_u.jpeg",
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
                  "id": "overlay_B370BAE6_BD0D_69C6_41B7_AAE18CFC1BBD",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_0_HS_0_0.png",
                       "height": 87,
                       "class": "ImageResourceLevel",
                       "width": 86
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.15,
                    "pitch": -6.58,
                    "yaw": 38.66
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA, this.camera_B3AC55CE_BD91_2F58_41D1_DF03CB698B45); this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_0_HS_0_0_0_map.gif",
                       "height": 43,
                       "class": "ImageResourceLevel",
                       "width": 43
                      }
                     ]
                    },
                    "pitch": -6.58,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 38.66,
                    "hfov": 5.15
                   }
                  ]
                 }
                ],
                "bottom": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_d.jpeg",
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
                   "url": "media/panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_t.jpg"
               }
              ]
             },
             "class": "AdjacentPanorama",
             "backwardYaw": 38.66,
             "yaw": 22.07,
             "distance": 1
            },
            {
             "panorama": "this.panorama_B0ADF307_BCF5_5847_4158_35195B49CA72",
             "class": "AdjacentPanorama",
             "backwardYaw": -44.49,
             "yaw": -0.14,
             "distance": 1
            }
           ],
           "id": "panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_r.jpeg",
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
                "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_f.jpeg",
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
                "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_b.jpeg",
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
                "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_u.jpeg",
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
               "id": "overlay_B2D3EE60_BCF7_A8F9_41D0_6D02410899A3",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_0_HS_1_0.png",
                    "height": 87,
                    "class": "ImageResourceLevel",
                    "width": 86
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.16,
                 "pitch": 6.11,
                 "yaw": -0.14
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_B0ADF307_BCF5_5847_4158_35195B49CA72, this.camera_B290D737_BD91_2CC8_41E5_A6F53107C537); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_0_HS_1_0_0_map.gif",
                    "height": 43,
                    "class": "ImageResourceLevel",
                    "width": 43
                   }
                  ]
                 },
                 "pitch": 6.11,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -0.14,
                 "hfov": 5.16
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_B2A12E43_BCF4_A83F_41D9_70FFA8EE4D96",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_0_HS_0_0.png",
                    "height": 87,
                    "class": "ImageResourceLevel",
                    "width": 86
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.17,
                 "pitch": -3.94,
                 "yaw": 22.07
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243, this.camera_B299472D_BD91_2CD8_41C2_6F63E1DC9FFA); this.mainPlayList.set('selectedIndex', 5)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_0_HS_0_0_0_map.gif",
                    "height": 43,
                    "class": "ImageResourceLevel",
                    "width": 43
                   }
                  ]
                 },
                 "pitch": -3.94,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 22.07,
                 "hfov": 5.17
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_B73D6F71_BD7D_1753_41E5_02BF03BEF640",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_0_HS_2_0.png",
                    "height": 109,
                    "class": "ImageResourceLevel",
                    "width": 109
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.42,
                 "pitch": -13.01,
                 "yaw": -0.81
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.showPopupPanoramaOverlay(this.popup_B7A246E3_BD7D_E977_41DB_09A2B9C4D218, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_B61B9AC9_BD87_19B0_41E1_540099D879D9, null, null, null, null, false)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_0_HS_2_0_0_map.gif",
                    "height": 54,
                    "class": "ImageResourceLevel",
                    "width": 54
                   }
                  ]
                 },
                 "pitch": -13.01,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -0.81,
                 "hfov": 6.42
                }
               ]
              },
              {
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "url": "media/popup_B7A246E3_BD7D_E977_41DB_09A2B9C4D218_0_3.jpg",
                  "height": 288,
                  "class": "ImageResourceLevel",
                  "width": 512
                 },
                 {
                  "url": "media/popup_B7A246E3_BD7D_E977_41DB_09A2B9C4D218_0_2.jpg",
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
               "id": "popup_B7A246E3_BD7D_E977_41DB_09A2B9C4D218",
               "hideDuration": 500,
               "hfov": 6.42,
               "pitch": -13.01,
               "showEasing": "cubic_in",
               "yaw": -0.81
              }
             ],
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_d.jpeg",
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
                "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "thumbnailUrl": "media/panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": -0.14,
          "yaw": -44.49,
          "distance": 1
         },
         {
          "panorama": "this.panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55",
          "class": "AdjacentPanorama",
          "backwardYaw": 89.8,
          "yaw": 14.93,
          "distance": 1
         }
        ],
        "id": "panorama_B0ADF307_BCF5_5847_4158_35195B49CA72",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_r.jpeg",
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
             "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_f.jpeg",
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
             "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_b.jpeg",
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
             "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_u.jpeg",
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
            "id": "overlay_B11A842D_BCF5_784B_41CB_59F71934A73D",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_0_HS_3_0.png",
                 "height": 87,
                 "class": "ImageResourceLevel",
                 "width": 86
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 4.95,
              "pitch": -17.45,
              "yaw": -44.49
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA, this.camera_B31D968D_BD91_2DD8_41E1_31DA1D66BADF); this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_0_HS_3_0_0_map.gif",
                 "height": 43,
                 "class": "ImageResourceLevel",
                 "width": 43
                }
               ]
              },
              "pitch": -17.45,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -44.49,
              "hfov": 4.95
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_B10B91D6_BCF5_BBD9_41E3_A47222A54866",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_0_HS_2_0.png",
                 "height": 87,
                 "class": "ImageResourceLevel",
                 "width": 86
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 4.87,
              "pitch": -20.04,
              "yaw": -89.05
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A, this.camera_B3E46683_BD91_2DC8_41D2_4D934BE87D13); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_0_HS_2_0_0_map.gif",
                 "height": 43,
                 "class": "ImageResourceLevel",
                 "width": 43
                }
               ]
              },
              "pitch": -20.04,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -89.05,
              "hfov": 4.87
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_B11461F0_BCF5_BBD9_41BF_B5E63576CC99",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_0_HS_1_0.png",
                 "height": 87,
                 "class": "ImageResourceLevel",
                 "width": 86
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.17,
              "pitch": -5.1,
              "yaw": 14.93
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55, this.camera_B3159698_BD91_2DF8_41E4_A55F79D14BE3); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_0_HS_1_0_0_map.gif",
                 "height": 43,
                 "class": "ImageResourceLevel",
                 "width": 43
                }
               ]
              },
              "pitch": -5.1,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 14.93,
              "hfov": 5.17
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_B10BF731_BCF5_785A_41D0_78AB62763C12",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_0_HS_0_0.png",
                 "height": 110,
                 "class": "ImageResourceLevel",
                 "width": 110
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.64,
              "pitch": -0.23,
              "yaw": 51.41
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
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_0_HS_0_0_0_map.gif",
                 "height": 55,
                 "class": "ImageResourceLevel",
                 "width": 55
                }
               ]
              },
              "pitch": -0.23,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 51.41,
              "hfov": 6.64
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_d.jpeg",
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
             "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 14.93,
       "yaw": 89.8,
       "distance": 1
      },
      {
       "panorama": {
        "mapLocations": [
         {
          "y": 97.42,
          "class": "PanoramaMapLocation",
          "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
          "angle": 8.53,
          "x": 228.68
         }
        ],
        "class": "Panorama",
        "partial": false,
        "label": "Panorama (7)",
        "hfovMax": 120,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55",
          "class": "AdjacentPanorama",
          "backwardYaw": 46.68,
          "yaw": 155.9,
          "distance": 1
         }
        ],
        "id": "panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_r.jpeg",
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
             "url": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_f.jpeg",
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
             "url": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_b.jpeg",
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
             "url": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_u.jpeg",
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
            "id": "overlay_B3AFF5B1_BD0C_B85A_41DB_C69B215FB9B2",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_0_HS_0_0.png",
                 "height": 87,
                 "class": "ImageResourceLevel",
                 "width": 87
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.27,
              "pitch": -1.41,
              "yaw": 155.9
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55, this.camera_B3BB5573_BD91_2F48_41C1_8DBB4C6EBD37); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_0_HS_0_0_0_map.gif",
                 "height": 43,
                 "class": "ImageResourceLevel",
                 "width": 43
                }
               ]
              },
              "pitch": -1.41,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 155.9,
              "hfov": 5.27
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_9F548CBC_BD77_A849_41E4_C0C2265B9BD0",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_0_HS_1_0.png",
                 "height": 110,
                 "class": "ImageResourceLevel",
                 "width": 110
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.64,
              "pitch": -0.4,
              "yaw": -136.66
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
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_0_HS_1_0_0_map.gif",
                 "height": 55,
                 "class": "ImageResourceLevel",
                 "width": 55
                }
               ]
              },
              "pitch": -0.4,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -136.66,
              "hfov": 6.64
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_d.jpeg",
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
             "url": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 155.9,
       "yaw": 46.68,
       "distance": 1
      },
      {
       "panorama": {
        "mapLocations": [
         {
          "y": 671.17,
          "class": "PanoramaMapLocation",
          "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
          "angle": -25.41,
          "x": 276.94
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
             "y": 651.31,
             "class": "PanoramaMapLocation",
             "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
             "angle": -11.05,
             "x": 194.62
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
                "y": 276.77,
                "class": "PanoramaMapLocation",
                "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                "angle": 161.85,
                "x": 100.93
               }
              ],
              "class": "Panorama",
              "partial": false,
              "label": "Panorama (10)",
              "hfovMax": 120,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599",
                "class": "AdjacentPanorama",
                "backwardYaw": 0.63,
                "yaw": 8.5,
                "distance": 1
               },
               {
                "panorama": {
                 "mapLocations": [
                  {
                   "y": 228.51,
                   "class": "PanoramaMapLocation",
                   "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                   "angle": 206.1,
                   "x": 139.01
                  }
                 ],
                 "class": "Panorama",
                 "partial": false,
                 "label": "Playground",
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC",
                   "class": "AdjacentPanorama",
                   "backwardYaw": -122.66,
                   "yaw": -3.7,
                   "distance": 1
                  }
                 ],
                 "id": "panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4",
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_t.jpg",
                 "vfov": 180,
                 "pitch": 0,
                 "frames": [
                  {
                   "right": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_r.jpeg",
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
                      "url": "media/panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_f.jpeg",
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
                      "url": "media/panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_b.jpeg",
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
                      "url": "media/panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_u.jpeg",
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
                     "id": "overlay_B24F9C3D_BD0B_684A_41E1_C64CC10EB3F8",
                     "useHandCursor": true,
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_0_HS_0_0.png",
                          "height": 87,
                          "class": "ImageResourceLevel",
                          "width": 86
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 5.18,
                       "pitch": -2.91,
                       "yaw": -3.7
                      }
                     ],
                     "rollOverDisplay": false,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC, this.camera_B389754F_BD91_2F58_41DB_CBEEB0E5209F); this.mainPlayList.set('selectedIndex', 9)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "url": "media/panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_0_HS_0_0_0_map.gif",
                          "height": 43,
                          "class": "ImageResourceLevel",
                          "width": 43
                         }
                        ]
                       },
                       "pitch": -2.91,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -3.7,
                       "hfov": 5.18
                      }
                     ]
                    }
                   ],
                   "bottom": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "url": "media/panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_d.jpeg",
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
                      "url": "media/panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_t.jpg"
                  }
                 ]
                },
                "class": "AdjacentPanorama",
                "backwardYaw": -3.7,
                "yaw": -122.66,
                "distance": 1
               }
              ],
              "id": "panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC",
              "hfov": 360,
              "thumbnailUrl": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_t.jpg",
              "vfov": 180,
              "pitch": 0,
              "frames": [
               {
                "right": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_r.jpeg",
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
                   "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_f.jpeg",
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
                   "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_b.jpeg",
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
                   "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_u.jpeg",
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
                  "id": "overlay_B3F833F8_BD0D_BFC9_41C4_379056F5DEC8",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_0_HS_2_0.png",
                       "height": 87,
                       "class": "ImageResourceLevel",
                       "width": 87
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.27,
                    "pitch": 1.03,
                    "yaw": 8.5
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599, this.camera_B3B27599_BD91_2FF8_41BE_494429E36531); this.mainPlayList.set('selectedIndex', 8)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_0_HS_2_0_0_map.gif",
                       "height": 43,
                       "class": "ImageResourceLevel",
                       "width": 43
                      }
                     ]
                    },
                    "pitch": 1.03,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 8.5,
                    "hfov": 5.27
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_B26F88F2_BD0C_E9D9_41DA_9EE614F94809",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_0_HS_1_0.png",
                       "height": 87,
                       "class": "ImageResourceLevel",
                       "width": 86
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 5.17,
                    "pitch": -4.32,
                    "yaw": -122.66
                   }
                  ],
                  "rollOverDisplay": false,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4, this.camera_B3B5D5A9_BD91_2FD8_41BA_ABFB99AD24E8); this.mainPlayList.set('selectedIndex', 10)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_0_HS_1_0_0_map.gif",
                       "height": 43,
                       "class": "ImageResourceLevel",
                       "width": 43
                      }
                     ]
                    },
                    "pitch": -4.32,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -122.66,
                    "hfov": 5.17
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_B273D3AF_BD0B_D846_41E3_ED24AB672BC5",
                  "useHandCursor": true,
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_0_HS_0_0.png",
                       "height": 110,
                       "class": "ImageResourceLevel",
                       "width": 110
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 6.63,
                    "pitch": -1.86,
                    "yaw": 102.28
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
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_0_HS_0_0_0_map.gif",
                       "height": 55,
                       "class": "ImageResourceLevel",
                       "width": 55
                      }
                     ]
                    },
                    "pitch": -1.86,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 102.28,
                    "hfov": 6.63
                   }
                  ]
                 }
                ],
                "bottom": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_d.jpeg",
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
                   "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_t.jpg"
               }
              ]
             },
             "class": "AdjacentPanorama",
             "backwardYaw": 8.5,
             "yaw": 0.63,
             "distance": 1
            },
            {
             "panorama": "this.panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468",
             "class": "AdjacentPanorama",
             "backwardYaw": -30.81,
             "yaw": 132.62,
             "distance": 1
            }
           ],
           "id": "panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599",
           "hfov": 360,
           "thumbnailUrl": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_t.jpg",
           "vfov": 180,
           "pitch": 0,
           "frames": [
            {
             "right": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_r.jpeg",
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
                "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_f.jpeg",
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
                "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_b.jpeg",
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
                "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_u.jpeg",
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
               "id": "overlay_B3D9469D_BD0D_584B_41C9_DFB7624AD9EC",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_0_HS_0_0.png",
                    "height": 87,
                    "class": "ImageResourceLevel",
                    "width": 86
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.18,
                 "pitch": -2.91,
                 "yaw": 0.63
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC, this.camera_B3CD1634_BD91_2CC8_41D7_BF419651829A); this.mainPlayList.set('selectedIndex', 9)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_0_HS_0_0_0_map.gif",
                    "height": 43,
                    "class": "ImageResourceLevel",
                    "width": 43
                   }
                  ]
                 },
                 "pitch": -2.91,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 0.63,
                 "hfov": 5.18
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_A6DC65F3_BD15_5BDF_41A0_20B8D62278D1",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_0_HS_1_0.png",
                    "height": 92,
                    "class": "ImageResourceLevel",
                    "width": 91
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 5.46,
                 "pitch": -4.59,
                 "yaw": 132.62
                }
               ],
               "rollOverDisplay": false,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468, this.camera_B3C7B642_BD91_2D48_41E1_EFC905DCDF32); this.mainPlayList.set('selectedIndex', 7)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_0_HS_1_0_0_map.gif",
                    "height": 46,
                    "class": "ImageResourceLevel",
                    "width": 45
                   }
                  ]
                 },
                 "pitch": -4.59,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 132.62,
                 "hfov": 5.46
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_A0A041E9_BD1F_5BCA_41D4_5A037BB25CEA",
               "useHandCursor": true,
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_0_HS_2_0.png",
                    "height": 110,
                    "class": "ImageResourceLevel",
                    "width": 110
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.63,
                 "pitch": -2.59,
                 "yaw": -71.01
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
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_0_HS_2_0_0_map.gif",
                    "height": 55,
                    "class": "ImageResourceLevel",
                    "width": 55
                   }
                  ]
                 },
                 "pitch": -2.59,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -71.01,
                 "hfov": 6.63
                }
               ]
              }
             ],
             "bottom": {
              "class": "ImageResource",
              "levels": [
               {
                "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_d.jpeg",
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
                "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ]
             },
             "thumbnailUrl": "media/panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_t.jpg"
            }
           ]
          },
          "class": "AdjacentPanorama",
          "backwardYaw": 132.62,
          "yaw": -30.81,
          "distance": 1
         },
         {
          "panorama": "this.panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55",
          "class": "AdjacentPanorama",
          "backwardYaw": -43.96,
          "yaw": 99.28,
          "distance": 1
         }
        ],
        "id": "panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468",
        "hfov": 360,
        "thumbnailUrl": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_t.jpg",
        "vfov": 180,
        "pitch": 0,
        "frames": [
         {
          "right": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_r.jpeg",
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
             "url": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_f.jpeg",
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
             "url": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_b.jpeg",
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
             "url": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_u.jpeg",
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
            "id": "overlay_B3B0CE2C_BD0F_A84A_41DD_41347C9FC154",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_0_HS_1_0.png",
                 "height": 87,
                 "class": "ImageResourceLevel",
                 "width": 86
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.15,
              "pitch": -6.61,
              "yaw": 99.28
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55, this.camera_B30556AE_BD91_2DD8_41DB_4BCD37BC6ECD); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_0_HS_1_0_0_map.gif",
                 "height": 43,
                 "class": "ImageResourceLevel",
                 "width": 43
                }
               ]
              },
              "pitch": -6.61,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 99.28,
              "hfov": 5.15
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_B3F3DB5D_BD0F_A8CB_41DC_A3EF8D0F6DBB",
            "useHandCursor": true,
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_0_HS_0_0.png",
                 "height": 87,
                 "class": "ImageResourceLevel",
                 "width": 86
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.17,
              "pitch": -4.34,
              "yaw": -30.81
             }
            ],
            "rollOverDisplay": false,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599, this.camera_B30D36A3_BD91_2DC8_41D8_7B15FE12763F); this.mainPlayList.set('selectedIndex', 8)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "url": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_0_HS_0_0_0_map.gif",
                 "height": 43,
                 "class": "ImageResourceLevel",
                 "width": 43
                }
               ]
              },
              "pitch": -4.34,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -30.81,
              "hfov": 5.17
             }
            ]
           }
          ],
          "bottom": {
           "class": "ImageResource",
           "levels": [
            {
             "url": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_d.jpeg",
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
             "url": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ]
          },
          "thumbnailUrl": "media/panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_t.jpg"
         }
        ]
       },
       "class": "AdjacentPanorama",
       "backwardYaw": 99.28,
       "yaw": -43.96,
       "distance": 1
      }
     ],
     "id": "panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55",
     "hfov": 360,
     "thumbnailUrl": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_t.jpg",
     "vfov": 180,
     "pitch": 0,
     "frames": [
      {
       "right": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_r_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_r.jpeg",
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
          "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_f_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_f.jpeg",
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
          "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_b_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_b.jpeg",
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
          "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_u_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_u.jpeg",
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
         "id": "overlay_B189FC40_BCFD_683A_41CE_4EAD07F63236",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_0_HS_3_0.png",
              "height": 87,
              "class": "ImageResourceLevel",
              "width": 86
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.16,
           "pitch": -5.23,
           "yaw": -43.96
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468, this.camera_B3CA2624_BD91_2CC8_41D5_4A32B5A11778); this.mainPlayList.set('selectedIndex', 7)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_0_HS_3_0_0_map.gif",
              "height": 43,
              "class": "ImageResourceLevel",
              "width": 43
             }
            ]
           },
           "pitch": -5.23,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -43.96,
           "hfov": 5.16
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_B1293304_BCFB_5839_41D9_E7EB640921EA",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_0_HS_2_0.png",
              "height": 87,
              "class": "ImageResourceLevel",
              "width": 86
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.18,
           "pitch": -1.9,
           "yaw": 89.8
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_B0ADF307_BCF5_5847_4158_35195B49CA72, this.camera_B3DD45FF_BD91_2F38_41DF_7C9C99F8F796); this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_0_HS_2_0_0_map.gif",
              "height": 43,
              "class": "ImageResourceLevel",
              "width": 43
             }
            ]
           },
           "pitch": -1.9,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 89.8,
           "hfov": 5.18
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_B129A436_BCFB_F846_41DC_C2AC2596D4C1",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_0_HS_1_0.png",
              "height": 87,
              "class": "ImageResourceLevel",
              "width": 86
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.18,
           "pitch": -2.48,
           "yaw": 46.68
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996, this.camera_B3D7D614_BD91_2CC8_41D2_E7CA935C6FD0); this.mainPlayList.set('selectedIndex', 6)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_0_HS_1_0_0_map.gif",
              "height": 43,
              "class": "ImageResourceLevel",
              "width": 43
             }
            ]
           },
           "pitch": -2.48,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 46.68,
           "hfov": 5.18
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_B1091ACA_BCF4_A9C9_41E5_43A4128039DC",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_0_HS_0_0.png",
              "height": 110,
              "class": "ImageResourceLevel",
              "width": 110
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.63,
           "pitch": -1.11,
           "yaw": 11.34
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9, this.camera_B3D9B5EF_BD91_2F58_41D6_8D6BF7564D3C); this.mainPlayList.set('selectedIndex', 11)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_0_HS_0_0_0_map.gif",
              "height": 55,
              "class": "ImageResourceLevel",
              "width": 55
             }
            ]
           },
           "pitch": -1.11,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 11.34,
           "hfov": 6.63
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_A3C6E1FE_BD1D_7BC6_41C6_AA5D9417B310",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_0_HS_4_0.png",
              "height": 87,
              "class": "ImageResourceLevel",
              "width": 86
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.05,
           "pitch": -13.12,
           "yaw": -127.04
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB, this.camera_B3A685DE_BD91_2F78_41E1_50EB5C2EDCED); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_0_HS_4_0_0_map.gif",
              "height": 43,
              "class": "ImageResourceLevel",
              "width": 43
             }
            ]
           },
           "pitch": -13.12,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -127.04,
           "hfov": 5.05
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_B71EB5E6_BD7C_EB70_41C1_BCE5FD8CE7C3",
         "useHandCursor": true,
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_0_HS_6_0.png",
              "height": 87,
              "class": "ImageResourceLevel",
              "width": 87
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 4.94,
           "pitch": 19.02,
           "yaw": 23.9
          }
         ],
         "rollOverDisplay": false,
         "areas": [
          {
           "click": "this.showPopupPanoramaOverlay(this.popup_B7C5DF4F_BD7F_374F_41DF_029CC9EDFDEE, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_B61B5AC8_BD87_19B0_41CB_57FF08A138B8, null, null, null, null, false)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_0_HS_6_0_0_map.gif",
              "height": 43,
              "class": "ImageResourceLevel",
              "width": 43
             }
            ]
           },
           "pitch": 19.02,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 23.9,
           "hfov": 4.94
          }
         ]
        },
        {
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "url": "media/popup_B7C5DF4F_BD7F_374F_41DF_029CC9EDFDEE_0_3.jpg",
            "height": 288,
            "class": "ImageResourceLevel",
            "width": 512
           },
           {
            "url": "media/popup_B7C5DF4F_BD7F_374F_41DF_029CC9EDFDEE_0_2.jpg",
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
         "id": "popup_B7C5DF4F_BD7F_374F_41DF_029CC9EDFDEE",
         "hideDuration": 500,
         "hfov": 4.94,
         "pitch": 19.02,
         "showEasing": "cubic_in",
         "yaw": 23.9
        }
       ],
       "bottom": {
        "class": "ImageResource",
        "levels": [
         {
          "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_d_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_d.jpeg",
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
          "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_l_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ]
       },
       "thumbnailUrl": "media/panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_t.jpg"
      }
     ]
    },
    "class": "AdjacentPanorama",
    "backwardYaw": -127.04,
    "yaw": 14.06,
    "distance": 1
   }
  ],
  "id": "panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_r.jpeg",
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
       "url": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_f.jpeg",
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
       "url": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_b.jpeg",
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
       "url": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_u.jpeg",
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
      "id": "overlay_B1DEDFBA_BCFD_E84E_41E2_4AA2775EF03E",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_0_HS_0_0.png",
           "height": 192,
           "class": "ImageResourceLevel",
           "width": 190
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.09,
        "pitch": -14.08,
        "yaw": 14.06
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55, this.camera_B3BE8589_BD91_2FD8_41B2_47FB1D94757F); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_0_HS_0_0_0_map.gif",
           "height": 96,
           "class": "ImageResourceLevel",
           "width": 95
          }
         ]
        },
        "pitch": -14.08,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 14.06,
        "hfov": 11.09
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_92700A58_BDFF_A8CA_41D4_ECECEFC6007A",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_0_HS_1_0.png",
           "height": 366,
           "class": "ImageResourceLevel",
           "width": 366
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.41,
        "pitch": -49.02,
        "yaw": 7.84
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_B4966D55_BD7B_FB50_419A_6768DB8A7813, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':5,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5}, this.ImageResource_B4BC0A5E_BD7B_3951_41E7_2CF7E3AD3491, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_0_HS_1_0_0_map.gif",
           "height": 183,
           "class": "ImageResourceLevel",
           "width": 183
          }
         ]
        },
        "pitch": -49.02,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 7.84,
        "hfov": 14.41
       }
      ]
     },
     {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/popup_B4966D55_BD7B_FB50_419A_6768DB8A7813_0_3.jpg",
         "height": 288,
         "class": "ImageResourceLevel",
         "width": 512
        },
        {
         "url": "media/popup_B4966D55_BD7B_FB50_419A_6768DB8A7813_0_2.jpg",
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
      "id": "popup_B4966D55_BD7B_FB50_419A_6768DB8A7813",
      "hideDuration": 500,
      "hfov": 14.41,
      "pitch": -49.02,
      "showEasing": "cubic_in",
      "yaw": 7.84
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_d.jpeg",
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
       "url": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_t.jpg"
   }
  ]
 },
 {
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "preloadEnabled": false,
  "touchControlMode": "drag_acceleration",
  "displayPlaybackBar": true,
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
   "toolTipShadowVerticalLength": 0,
   "toolTipPaddingLeft": 6,
   "toolTipFontWeight": "normal",
   "toolTipShadowSpread": 0,
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowBlurRadius": 3,
   "verticalAlign": "middle",
   "minHeight": 1,
   "class": "IconButton",
   "mode": "push",
   "toolTipFontColor": "#606060",
   "paddingTop": 0,
   "toolTipBorderRadius": 3,
   "shadow": false,
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontFamily": "Arial",
   "minWidth": 1,
   "toolTipShadowColor": "#333333",
   "transparencyActive": false,
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
  },
  "gyroscopeVerticalDraggingEnabled": true
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
   "toolTipShadowVerticalLength": 0,
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
   "width": "99.417%",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "toolTipShadowSpread": 0,
   "minHeight": 1,
   "progressBarBorderRadius": 0,
   "class": "ViewerArea",
   "progressBarBorderSize": 0,
   "paddingTop": 0,
   "toolTipFontFamily": "Arial",
   "transitionMode": "blending",
   "toolTipFontColor": "#606060",
   "playbackBarProgressBorderRadius": 0,
   "toolTipShadowHorizontalLength": 0,
   "minWidth": 1,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarBorderRadius": 0,
   "playbackBarHeadShadowVerticalLength": 0,
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
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_camera"
 },
 "this.panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_camera"
 },
 "this.panorama_B0ADF307_BCF5_5847_4158_35195B49CA72",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_camera"
 },
 "this.panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_camera"
 },
 "this.panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_camera"
 },
 "this.panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_camera"
 },
 "this.panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_camera"
 },
 "this.panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_camera"
 },
 "this.panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_camera"
 },
 "this.panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_camera"
 },
 "this.panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_camera"
 },
 "this.panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_camera"
 },
 "this.panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_camera"
 },
 "this.panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_camera"
 },
 "this.panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_camera"
 },
 "this.panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_camera"
 },
 "this.panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_camera"
 },
 "this.panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_camera"
 },
 "this.panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_camera"
 },
 "this.panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_camera"
 },
 "this.panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
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
  "id": "panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_camera"
 },
 {
  "class": "PhotoAlbum",
  "label": "Photo Album Info areas comunes",
  "id": "album_92CB2113_BDFC_F85E_41B7_9D46262CE632",
  "thumbnailUrl": "media/album_92CB2113_BDFC_F85E_41B7_9D46262CE632_t.png",
  "playList": {
   "items": [
    {
     "media": {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_92CB2113_BDFC_F85E_41B7_9D46262CE632_0.jpg"
        }
       ]
      },
      "class": "Photo",
      "duration": 5000,
      "width": 3551,
      "height": 1998,
      "label": "Info areas comunes",
      "thumbnailUrl": "media/album_92CB2113_BDFC_F85E_41B7_9D46262CE632_0_t.jpg",
      "id": "album_92CB2113_BDFC_F85E_41B7_9D46262CE632_0"
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition",
       "x": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "y": "0.65",
       "class": "PhotoCameraPosition",
       "x": "0.73"
      }
     },
     "class": "PhotoPlayListItem"
    },
    {
     "media": {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_92CB2113_BDFC_F85E_41B7_9D46262CE632_1.jpg"
        }
       ]
      },
      "class": "Photo",
      "duration": 5000,
      "width": 3551,
      "height": 1998,
      "label": "Info Principal",
      "thumbnailUrl": "media/album_92CB2113_BDFC_F85E_41B7_9D46262CE632_1_t.jpg",
      "id": "album_92CB2113_BDFC_F85E_41B7_9D46262CE632_1"
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition",
       "x": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "y": "0.51",
       "class": "PhotoCameraPosition",
       "x": "0.46"
      }
     },
     "class": "PhotoPlayListItem"
    },
    {
     "media": {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_92CB2113_BDFC_F85E_41B7_9D46262CE632_2.jpg"
        }
       ]
      },
      "class": "Photo",
      "duration": 5000,
      "width": 3551,
      "height": 1998,
      "label": "info residencias",
      "thumbnailUrl": "media/album_92CB2113_BDFC_F85E_41B7_9D46262CE632_2_t.jpg",
      "id": "album_92CB2113_BDFC_F85E_41B7_9D46262CE632_2"
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition",
       "x": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "y": "0.70",
       "class": "PhotoCameraPosition",
       "x": "0.53"
      }
     },
     "class": "PhotoPlayListItem"
    },
    {
     "media": {
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
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition",
       "x": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "y": "0.33",
       "class": "PhotoCameraPosition",
       "x": "0.52"
      }
     },
     "class": "PhotoPlayListItem"
    },
    {
     "media": {
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
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition",
       "x": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "zoomFactor": 1.1,
       "y": "0.32",
       "class": "PhotoCameraPosition",
       "x": "0.46"
      }
     },
     "class": "PhotoPlayListItem"
    }
   ],
   "class": "PhotoPlayList",
   "id": "album_92CB2113_BDFC_F85E_41B7_9D46262CE632_AlbumPlayList"
  }
 },
 {
  "viewerArea": "this.MainViewer",
  "class": "PhotoAlbumPlayer",
  "id": "MainViewerPhotoAlbumPlayer"
 },
 "this.album_92CB2113_BDFC_F85E_41B7_9D46262CE632_0",
 "this.album_92CB2113_BDFC_F85E_41B7_9D46262CE632_1",
 "this.album_92CB2113_BDFC_F85E_41B7_9D46262CE632_2",
 "this.photo_B64C568F_BD85_29CF_41E2_F9997BF3F5D0",
 "this.photo_B728384A_BD85_38B1_41E1_33C933E2F91F",
 {
  "items": [
   {
    "media": "this.panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B06C5531_BD91_2CC8_41E0_49CD49BDE1CE, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B1C16B5A_BCF5_68C9_41E7_651F721032CB_camera",
    "id": "PanoramaPlayListItem_B06C5531_BD91_2CC8_41E0_49CD49BDE1CE",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B063D531_BD91_2CC8_41E1_DD92702BF7C5, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_camera",
    "id": "PanoramaPlayListItem_B063D531_BD91_2CC8_41E1_DD92702BF7C5",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_B0ADF307_BCF5_5847_4158_35195B49CA72",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B0634532_BD91_2CC8_41D6_19A090BF2DAB, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_camera",
    "id": "PanoramaPlayListItem_B0634532_BD91_2CC8_41D6_19A090BF2DAB",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B062E532_BD91_2CC8_41C1_740427B2E7E9, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_camera",
    "id": "PanoramaPlayListItem_B062E532_BD91_2CC8_41C1_740427B2E7E9",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B0620532_BD91_2CC8_41D7_249E29610407, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_camera",
    "id": "PanoramaPlayListItem_B0620532_BD91_2CC8_41D7_249E29610407",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B061A533_BD91_2CC8_41DD_6F0D95323271, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_camera",
    "id": "PanoramaPlayListItem_B061A533_BD91_2CC8_41DD_6F0D95323271",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "media": "this.panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B0613533_BD91_2CC8_41E3_E08A3E6460E4, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B0ADF729_BCF5_D84B_418E_C188C97D0996_camera",
    "id": "PanoramaPlayListItem_B0613533_BD91_2CC8_41E3_E08A3E6460E4",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "media": "this.panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B060B533_BD91_2CC8_41E7_3E88DFCD2656, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B0AD8304_BCF5_F839_41CD_BCB869FE3468_camera",
    "id": "PanoramaPlayListItem_B060B533_BD91_2CC8_41E7_3E88DFCD2656",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "media": "this.panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B060C534_BD91_2CC8_419C_E73847DFEF89, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B0ADEF61_BCF5_E8FB_41D7_7F9853265599_camera",
    "id": "PanoramaPlayListItem_B060C534_BD91_2CC8_419C_E73847DFEF89",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "media": "this.panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B0606534_BD91_2CC8_41DE_9F4B0A148BB1, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B0ADBCAA_BCF5_A849_41E1_7B2292A6E1EC_camera",
    "id": "PanoramaPlayListItem_B0606534_BD91_2CC8_41DE_9F4B0A148BB1",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "media": "this.panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B0678534_BD91_2CC8_41E2_16BAFC914533, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_camera",
    "id": "PanoramaPlayListItem_B0678534_BD91_2CC8_41E2_16BAFC914533",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "media": "this.panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B0670534_BD91_2CC8_41D4_CF9B512065B5, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_camera",
    "id": "PanoramaPlayListItem_B0670534_BD91_2CC8_41D4_CF9B512065B5",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "media": "this.panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B066A535_BD91_2CC8_41E5_54F1ABBA9FDD, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9CC45526_BD75_D846_41D3_905D8EEC0DC6_camera",
    "id": "PanoramaPlayListItem_B066A535_BD91_2CC8_41E5_54F1ABBA9FDD",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "media": "this.panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B0663535_BD91_2CC8_41D3_1DAE009B0922, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B0AD47E5_BCF4_A7FB_41B6_C4876799A65B_camera",
    "id": "PanoramaPlayListItem_B0663535_BD91_2CC8_41D3_1DAE009B0922",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "media": "this.panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B0664536_BD91_2CC8_41E5_48FDF8608B43, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B0AD635F_BCF4_B8C7_41E4_4B288BE98715_camera",
    "id": "PanoramaPlayListItem_B0664536_BD91_2CC8_41E5_48FDF8608B43",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "media": "this.panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B065E536_BD91_2CC8_41E2_6971668FB8BD, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B0AD0F8B_BCF4_A84F_41E4_4CDB04AB4D16_camera",
    "id": "PanoramaPlayListItem_B065E536_BD91_2CC8_41E2_6971668FB8BD",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "media": "this.panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B0657536_BD91_2CC8_41CF_B9BAE958AD22, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B0AD7AF0_BCF4_E9DA_41A8_E2382CA950E0_camera",
    "id": "PanoramaPlayListItem_B0657536_BD91_2CC8_41CF_B9BAE958AD22",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "media": "this.panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B0649536_BD91_2CC8_41D7_D47BBEDB470F, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B0AD772E_BCF4_F849_4185_88F66C2F57ED_camera",
    "id": "PanoramaPlayListItem_B0649536_BD91_2CC8_41D7_D47BBEDB470F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "media": "this.panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B0642537_BD91_2CC8_41DD_0640C6770193, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B0AD22D5_BCF4_D9DB_41D7_0598AD7BB113_camera",
    "id": "PanoramaPlayListItem_B0642537_BD91_2CC8_41DD_0640C6770193",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "media": "this.panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B0644537_BD91_2CC8_41E2_387C99A04D7A, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_AE0FBA7B_BD0F_68CE_41E0_54905F671174_camera",
    "id": "PanoramaPlayListItem_B0644537_BD91_2CC8_41E2_387C99A04D7A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "media": "this.panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B39BC537_BD91_2CC8_41C8_18A0FCF545EF, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A9E3DE61_BD0D_68FA_4183_34105D7F8FE1_camera",
    "id": "PanoramaPlayListItem_B39BC537_BD91_2CC8_41C8_18A0FCF545EF",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "media": "this.album_92CB2113_BDFC_F85E_41B7_9D46262CE632",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 0)"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 0, 1)",
    "camera": "this.panorama_B0AB174E_BCF5_78C9_41CF_BF6FBB37DC55_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_B0ADF307_BCF5_5847_4158_35195B49CA72",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 1, 2)",
    "camera": "this.panorama_B0ADF307_BCF5_5847_4158_35195B49CA72_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 2, 3)",
    "camera": "this.panorama_B0AD9E3A_BCF5_A84E_4170_EC0FFD77E80A_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 3, 4)",
    "camera": "this.panorama_B0ADCACD_BCF5_A9CB_41DB_E80ABFD8E1CA_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 4, 5)",
    "camera": "this.panorama_B0AD3A12_BCF4_A859_41DC_AC6668FF0243_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 5, 6)",
    "camera": "this.panorama_B0AD3E02_BCF4_A839_41C8_D5B597F93BB4_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 6, 0)",
    "camera": "this.panorama_9E3B28D9_BD75_A9CB_41E0_C0F0EE4405F9_camera",
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
  "id": "playList_B06C8531_BD91_2CC8_41B9_ECEC881BC8D0"
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
  "id": "playList_B06CF531_BD91_2CC8_41E0_3AB8ABD2A6AE"
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
  "id": "playList_B06CC531_BD91_2CC8_41E1_3FF6B0AA0848"
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
 "this.popup_B4966D55_BD7B_FB50_419A_6768DB8A7813",
 {
  "class": "ImageResource",
  "id": "ImageResource_B4BC0A5E_BD7B_3951_41E7_2CF7E3AD3491",
  "levels": [
   {
    "url": "media/popup_B4966D55_BD7B_FB50_419A_6768DB8A7813_0_0.jpg",
    "height": 1998,
    "class": "ImageResourceLevel",
    "width": 3551
   },
   {
    "url": "media/popup_B4966D55_BD7B_FB50_419A_6768DB8A7813_0_1.jpg",
    "height": 1152,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_B4966D55_BD7B_FB50_419A_6768DB8A7813_0_2.jpg",
    "height": 576,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_B4966D55_BD7B_FB50_419A_6768DB8A7813_0_3.jpg",
    "height": 288,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_B7C5DF4F_BD7F_374F_41DF_029CC9EDFDEE",
 {
  "class": "ImageResource",
  "id": "ImageResource_B61B5AC8_BD87_19B0_41CB_57FF08A138B8",
  "levels": [
   {
    "url": "media/popup_B7C5DF4F_BD7F_374F_41DF_029CC9EDFDEE_0_0.jpg",
    "height": 1998,
    "class": "ImageResourceLevel",
    "width": 3551
   },
   {
    "url": "media/popup_B7C5DF4F_BD7F_374F_41DF_029CC9EDFDEE_0_1.jpg",
    "height": 1152,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_B7C5DF4F_BD7F_374F_41DF_029CC9EDFDEE_0_2.jpg",
    "height": 576,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_B7C5DF4F_BD7F_374F_41DF_029CC9EDFDEE_0_3.jpg",
    "height": 288,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_B7A246E3_BD7D_E977_41DB_09A2B9C4D218",
 {
  "class": "ImageResource",
  "id": "ImageResource_B61B9AC9_BD87_19B0_41E1_540099D879D9",
  "levels": [
   {
    "url": "media/popup_B7A246E3_BD7D_E977_41DB_09A2B9C4D218_0_0.jpg",
    "height": 1998,
    "class": "ImageResourceLevel",
    "width": 3551
   },
   {
    "url": "media/popup_B7A246E3_BD7D_E977_41DB_09A2B9C4D218_0_1.jpg",
    "height": 1152,
    "class": "ImageResourceLevel",
    "width": 2048
   },
   {
    "url": "media/popup_B7A246E3_BD7D_E977_41DB_09A2B9C4D218_0_2.jpg",
    "height": 576,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_B7A246E3_BD7D_E977_41DB_09A2B9C4D218_0_3.jpg",
    "height": 288,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_B63D4858_BD87_3951_41E0_29F7243BA61C",
 {
  "class": "ImageResource",
  "id": "ImageResource_B61D0ACB_BD87_19B0_41E4_FED876F7C96C",
  "levels": [
   {
    "url": "media/popup_B63D4858_BD87_3951_41E0_29F7243BA61C_0_0.jpg",
    "height": 1500,
    "class": "ImageResourceLevel",
    "width": 1500
   },
   {
    "url": "media/popup_B63D4858_BD87_3951_41E0_29F7243BA61C_0_1.jpg",
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_B63D4858_BD87_3951_41E0_29F7243BA61C_0_2.jpg",
    "height": 512,
    "class": "ImageResourceLevel",
    "width": 512
   }
  ]
 },
 "this.popup_B6323F09_BD87_18B3_41E7_571F72A5907F",
 {
  "class": "ImageResource",
  "id": "ImageResource_B61CAACE_BD87_19B0_41D4_6C84D7C8C53B",
  "levels": [
   {
    "url": "media/popup_B6323F09_BD87_18B3_41E7_571F72A5907F_0_0.jpg",
    "height": 1500,
    "class": "ImageResourceLevel",
    "width": 1500
   },
   {
    "url": "media/popup_B6323F09_BD87_18B3_41E7_571F72A5907F_0_1.jpg",
    "height": 1024,
    "class": "ImageResourceLevel",
    "width": 1024
   },
   {
    "url": "media/popup_B6323F09_BD87_18B3_41E7_571F72A5907F_0_2.jpg",
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
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 57.34
  },
  "id": "camera_B389754F_BD91_2F58_41DB_CBEEB0E5209F"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 176.15
  },
  "id": "camera_B38CB559_BD91_2F78_41AB_63A31D20F1DA"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 90.95
  },
  "id": "camera_B3806564_BD91_2F48_41C7_B218448C09D0"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -133.32
  },
  "id": "camera_B3BB5573_BD91_2F48_41C1_8DBB4C6EBD37"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 52.96
  },
  "id": "camera_B3BE8589_BD91_2FD8_41B2_47FB1D94757F"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -179.37
  },
  "id": "camera_B3B27599_BD91_2FF8_41BE_494429E36531"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 176.3
  },
  "id": "camera_B3B5D5A9_BD91_2FD8_41BA_ABFB99AD24E8"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 43.92
  },
  "id": "camera_B3A8F5B9_BD91_2F38_41E4_CDE11B299295"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -157.93
  },
  "id": "camera_B3AC55CE_BD91_2F58_41D1_DF03CB698B45"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -165.94
  },
  "id": "camera_B3A685DE_BD91_2F78_41E1_50EB5C2EDCED"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -97.4
  },
  "id": "camera_B3D9B5EF_BD91_2F58_41D6_8D6BF7564D3C"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -165.07
  },
  "id": "camera_B3DD45FF_BD91_2F38_41DF_7C9C99F8F796"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -24.1
  },
  "id": "camera_B3D7D614_BD91_2CC8_41D2_E7CA935C6FD0"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -80.72
  },
  "id": "camera_B3CA2624_BD91_2CC8_41D5_4A32B5A11778"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -171.5
  },
  "id": "camera_B3CD1634_BD91_2CC8_41D7_BF419651829A"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 149.19
  },
  "id": "camera_B3C7B642_BD91_2D48_41E1_EFC905DCDF32"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 174.26
  },
  "id": "camera_B3FA864D_BD91_2D58_41E5_A983EE4BAD37"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -135.3
  },
  "id": "camera_B3FD4657_BD91_2D48_41AE_61A0D18E87AE"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -20.9
  },
  "id": "camera_B3F71663_BD91_2D48_41C2_B6A5510B1945"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -42.39
  },
  "id": "camera_B3E8A66D_BD91_2D58_41E3_55939EC169FE"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -33.64
  },
  "id": "camera_B3E2F678_BD91_2D38_41D5_06E31748EA71"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -27.35
  },
  "id": "camera_B3E46683_BD91_2DC8_41D2_4D934BE87D13"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 179.86
  },
  "id": "camera_B31D968D_BD91_2DD8_41E1_31DA1D66BADF"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -90.2
  },
  "id": "camera_B3159698_BD91_2DF8_41E4_A55F79D14BE3"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -47.38
  },
  "id": "camera_B30D36A3_BD91_2DC8_41D8_7B15FE12763F"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 136.04
  },
  "id": "camera_B30556AE_BD91_2DD8_41DB_4BCD37BC6ECD"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -75.04
  },
  "id": "camera_B33CA6B8_BD91_2D38_4196_89069017C380"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 11.15
  },
  "id": "camera_B334F6C3_BD91_2D48_41E0_F8B5A3605109"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 167.04
  },
  "id": "camera_B32C36CD_BD91_2D58_41E5_A3F71583055F"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -20.07
  },
  "id": "camera_B35BF6D8_BD91_2D78_419B_D27E36F180BF"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -170.44
  },
  "id": "camera_B35396E3_BD91_2D48_41E3_31E93FAC5411"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -96.74
  },
  "id": "camera_B34AE6ED_BD91_2D58_41AB_96F484BEF120"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -4.09
  },
  "id": "camera_B34286F8_BD91_2D38_41A9_C21B8291C03D"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 92.05
  },
  "id": "camera_B37A1703_BD91_2CC8_41DD_E61420CF1778"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -171.4
  },
  "id": "camera_B372570D_BD91_2CD8_41CE_CFC323B1DB3C"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 171.23
  },
  "id": "camera_B369F718_BD91_2CF8_41DE_AD281521417C"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -168.66
  },
  "id": "camera_B360A722_BD91_2CC8_41E5_2DC817D354E0"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -141.34
  },
  "id": "camera_B299472D_BD91_2CD8_41C2_6F63E1DC9FFA"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 135.51
  },
  "id": "camera_B290D737_BD91_2CC8_41E5_A6F53107C537"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 107.57
  },
  "id": "camera_B2880742_BD91_2B48_41E4_E9B900F09FCD"
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
  "toolTipShadowVerticalLength": 0,
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
  "progressBarBorderRadius": 0,
  "class": "ViewerArea",
  "progressBarBorderSize": 0,
  "paddingTop": 0,
  "toolTipFontFamily": "Arial",
  "transitionMode": "blending",
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "minWidth": 100,
  "left": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
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
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowBlurRadius": 3,
      "verticalAlign": "middle",
      "mode": "toggle",
      "class": "IconButton",
      "minHeight": 1,
      "toolTipFontColor": "#606060",
      "paddingTop": 0,
      "toolTipBorderRadius": 3,
      "shadow": false,
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontFamily": "Arial",
      "minWidth": 1,
      "toolTipShadowColor": "#333333",
      "transparencyActive": true,
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
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowBlurRadius": 3,
      "verticalAlign": "middle",
      "mode": "toggle",
      "class": "IconButton",
      "minHeight": 1,
      "toolTipFontColor": "#606060",
      "paddingTop": 0,
      "toolTipBorderRadius": 3,
      "shadow": false,
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontFamily": "Arial",
      "minWidth": 1,
      "toolTipShadowColor": "#333333",
      "transparencyActive": true,
      "click": "this.mainPlayList.set('selectedIndex', 11)",
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
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "toolTipFontWeight": "normal",
      "toolTipShadowSpread": 0,
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowBlurRadius": 3,
      "verticalAlign": "middle",
      "mode": "toggle",
      "class": "IconButton",
      "minHeight": 1,
      "toolTipFontColor": "#606060",
      "paddingTop": 0,
      "toolTipBorderRadius": 3,
      "shadow": false,
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontFamily": "Arial",
      "minWidth": 1,
      "toolTipShadowColor": "#333333",
      "transparencyActive": true,
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
  "textShadowVerticalLength": 1,
  "textShadowHorizontalLength": 1,
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
  "textShadowVerticalLength": 1,
  "textShadowHorizontalLength": 1,
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
  "textShadowVerticalLength": 1,
  "textShadowHorizontalLength": 1,
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
  "textShadowVerticalLength": 1,
  "textShadowHorizontalLength": 1,
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
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_B06C8531_BD91_2CC8_41B9_ECEC881BC8D0.set('selectedIndex', 0)",
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
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "registerKey": function(key, value){    window[key] = value; },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){    var self = this;   this.MainViewer.set('toolTipEnabled', false);   var cardboardEnabled = this.isCardboardViewMode();   if(!cardboardEnabled) {       var zoomImage = this.zoomImagePopupPanorama;       var showDuration = popupPanoramaOverlay.get('showDuration');       var hideDuration = popupPanoramaOverlay.get('hideDuration');       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth');       var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight');       var showEndFunction = function() {           var loadedFunction = function(){               if(!self.isCardboardViewMode())                   popupPanoramaOverlay.set('visible', false);           };           popupPanoramaOverlay.unbind('showEnd', showEndFunction, self);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', 1);           self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null,            closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction);       };       var hideFunction = function() {           var restoreShowDurationFunction = function(){                popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self);                popupPanoramaOverlay.set('visible', false);               popupPanoramaOverlay.set('showDuration', showDuration);               popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup);               popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup);           };           self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio);           var currentWidth = zoomImage.get('imageWidth');           var currentHeight = zoomImage.get('imageHeight');           popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', hideDuration);           popupPanoramaOverlay.set('popupMaxWidth', currentWidth);           popupPanoramaOverlay.set('popupMaxHeight', currentHeight);          if(popupPanoramaOverlay.get('visible'))              restoreShowDurationFunction();          else              popupPanoramaOverlay.set('visible', true);           self.MainViewer.set('toolTipEnabled', true);       };       if(!imageHD){           imageHD = popupPanoramaOverlay.get('image');       }       if(!toggleImageHD && toggleImage){           toggleImageHD = toggleImage;       }       popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   } else {       var hideEndFunction = function() {           self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);           if(audio){               if(stopBackgroundAudio){                   self.resumeGlobalAudios();               }               self.stopGlobalAudio(audio);           }           popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self);           self.MainViewer.set('toolTipEnabled', true);       };       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               this.pauseGlobalAudios();           }           this.playGlobalAudio(audio);       }       popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true);   }   popupPanoramaOverlay.set('visible', true); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "getKey": function(key){    return window[key]; },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "existsKey": function(key){    return key in window; },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "unregisterKey": function(key){    delete window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); }
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