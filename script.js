(function(){
    var script = { "definitions": [
 {
  "class": "Panorama",
  "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.10.56.29",
  "id": "panorama_4F52997B_48E0_51DC_4196_47E37636AA82",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.09.58.87",
     "id": "panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.09.03.78",
        "id": "panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "label": "Sala Extra",
           "id": "panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49"
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "label": "Casa Modelo",
              "id": "panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49"
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "label": "EscazuUrbano-Win64-Shipping 360 2019.06.08 - 23.02.20.11",
                 "id": "panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7",
                   "backwardYaw": -39.79,
                   "yaw": 26.81,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459",
                   "backwardYaw": 21.21,
                   "yaw": -1.63,
                   "distance": 1
                  }
                 ],
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "hfov": 360,
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "overlays": [
                    {
                     "id": "overlay_30E0D2A3_3ADC_2274_41A0_E740519C893E",
                     "pitch": 36.29,
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "bleaching": 0.25,
                     "yaw": 43.62
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459, this.camera_A7CC85BE_B477_4D3B_4195_F2F5EC477006); this.mainPlayList.set('selectedIndex', 1)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.56,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_0_HS_0_0.png",
                          "width": 146,
                          "height": 146
                         }
                        ]
                       },
                       "pitch": -13.14,
                       "yaw": -1.63
                      }
                     ],
                     "id": "overlay_30D5C2E1_3ADC_63F4_41AC_BF468F7BCCAA",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7, this.camera_A7F7B5B4_B477_4DCF_41E6_6359B2CD5F53); this.mainPlayList.set('selectedIndex', 22)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.3,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_0_HS_1_0.png",
                          "width": 146,
                          "height": 146
                         }
                        ]
                       },
                       "pitch": -19.17,
                       "yaw": 26.81
                      }
                     ],
                     "id": "overlay_A72C1251_B478_C749_41AB_D8124D13D459",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    }
                   ],
                   "thumbnailUrl": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_t.jpg",
                   "cube": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_hq.jpeg",
                      "width": 11424,
                      "height": 1904,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ]
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1.jpeg",
                      "width": 6144,
                      "height": 1024
                     }
                    ]
                   }
                  }
                 ],
                 "mapLocations": [
                  {
                   "map": {
                    "minimumZoomFactor": 0.5,
                    "fieldOfViewOverlayInsideColor": "#000000",
                    "class": "Map",
                    "label": "1-piso",
                    "fieldOfViewOverlayRadiusScale": 0.2,
                    "id": "map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
                    "maximumZoomFactor": 1.2,
                    "width": 344,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C.png",
                       "width": 344,
                       "height": 800
                      }
                     ]
                    },
                    "scaleMode": "fit_inside",
                    "overlays": [
                     {
                      "useHandCursor": true,
                      "areas": [
                       {
                        "class": "HotspotMapOverlayArea",
                        "click": "this.mainPlayList.set('selectedIndex', 1)",
                        "mapColor": "#FF0000"
                       }
                      ],
                      "image": {
                       "x": 41.58,
                       "height": 25,
                       "y": 440.17,
                       "class": "HotspotMapOverlayImage",
                       "width": 25,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_0.png",
                          "width": 25,
                          "height": 25
                         }
                        ]
                       }
                      },
                      "map": {
                       "width": 25,
                       "x": 41.58,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_0_map.gif",
                          "width": 12,
                          "height": 12
                         }
                        ]
                       },
                       "y": 440.17,
                       "class": "HotspotMapOverlayMap",
                       "offsetY": 0,
                       "height": 25,
                       "offsetX": 0
                      },
                      "class": "AreaHotspotMapOverlay",
                      "rollOverDisplay": true,
                      "id": "overlay_B8AFC1F0_AE70_E8F3_41DF_4DA851E12770",
                      "data": {
                       "label": "Image"
                      }
                     },
                     {
                      "useHandCursor": true,
                      "areas": [
                       {
                        "class": "HotspotMapOverlayArea",
                        "click": "this.mainPlayList.set('selectedIndex', 9)",
                        "mapColor": "#FF0000"
                       }
                      ],
                      "image": {
                       "x": 222.63,
                       "height": 25,
                       "y": 233.1,
                       "class": "HotspotMapOverlayImage",
                       "width": 25,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_1.png",
                          "width": 25,
                          "height": 25
                         }
                        ]
                       }
                      },
                      "map": {
                       "width": 25,
                       "x": 222.63,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_1_map.gif",
                          "width": 12,
                          "height": 12
                         }
                        ]
                       },
                       "y": 233.1,
                       "class": "HotspotMapOverlayMap",
                       "offsetY": 0,
                       "height": 25,
                       "offsetX": 0
                      },
                      "class": "AreaHotspotMapOverlay",
                      "rollOverDisplay": true,
                      "id": "overlay_B942F424_AE70_2F13_4182_5C003BEE434A",
                      "data": {
                       "label": "Image"
                      }
                     },
                     {
                      "useHandCursor": true,
                      "areas": [
                       {
                        "class": "HotspotMapOverlayArea",
                        "click": "this.mainPlayList.set('selectedIndex', 17)",
                        "mapColor": "#FF0000"
                       }
                      ],
                      "image": {
                       "x": 290.52,
                       "height": 25,
                       "y": 420.93,
                       "class": "HotspotMapOverlayImage",
                       "width": 25,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_2.png",
                          "width": 25,
                          "height": 25
                         }
                        ]
                       }
                      },
                      "map": {
                       "width": 25,
                       "x": 290.52,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_HS_2_map.gif",
                          "width": 12,
                          "height": 12
                         }
                        ]
                       },
                       "y": 420.93,
                       "class": "HotspotMapOverlayMap",
                       "offsetY": 0,
                       "height": 25,
                       "offsetX": 0
                      },
                      "class": "AreaHotspotMapOverlay",
                      "rollOverDisplay": true,
                      "id": "overlay_B925714F_AE70_692D_4194_4B98DAECC533",
                      "data": {
                       "label": "Image"
                      }
                     }
                    ],
                    "fieldOfViewOverlayOutsideOpacity": 0,
                    "initialZoomFactor": 1,
                    "fieldOfViewOverlayInsideOpacity": 0.4,
                    "fieldOfViewOverlayOutsideColor": "#000000",
                    "height": 800,
                    "thumbnailUrl": "media/map_B8CA0598_AE70_6932_41E3_495D3E2D778C_t.png"
                   },
                   "x": 235.13,
                   "angle": 205.47,
                   "y": 245.6,
                   "class": "PanoramaMapLocation"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_t.jpg"
                },
                "backwardYaw": -1.63,
                "yaw": 21.21,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7",
                "backwardYaw": 53.57,
                "yaw": -41.71,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "class": "Panorama",
                 "label": "Entrada",
                 "id": "panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "class": "Panorama",
                    "label": "EscazuUrbano-Win64-Shipping 360 2019.06.09 - 00.31.30.15",
                    "id": "panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "class": "Panorama",
                       "label": "\u00c1rea Social",
                       "id": "panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "class": "Panorama",
                          "label": "Piscina",
                          "id": "panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60",
                            "backwardYaw": 14.33,
                            "yaw": -178.64,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "class": "Panorama",
                             "label": "Eventos",
                             "id": "panorama_3CBB93C8_3B03_135B_4190_D012C0697928",
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45",
                               "backwardYaw": -154.31,
                               "yaw": 18.13,
                               "distance": 1
                              }
                             ],
                             "pitch": 0,
                             "partial": false,
                             "vfov": 180,
                             "hfov": 360,
                             "hfovMax": 120,
                             "hfovMin": 60,
                             "frames": [
                              {
                               "class": "CubicPanoramaFrame",
                               "overlays": [
                                {
                                 "id": "overlay_32D0DD05_3B03_34D5_41C9_2C9D1E72A517",
                                 "pitch": 48.48,
                                 "class": "LensFlarePanoramaOverlay",
                                 "bleachingDistance": 0.4,
                                 "bleaching": 0.7,
                                 "yaw": -88.19
                                },
                                {
                                 "id": "overlay_32DDE104_3B03_2CCB_41C3_6CECAAB1AFD5",
                                 "pitch": 45.43,
                                 "class": "LensFlarePanoramaOverlay",
                                 "bleachingDistance": 0.4,
                                 "bleaching": 0.7,
                                 "yaw": 92
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45, this.camera_A072762E_B477_4EDB_41DB_79D962D84FFD); this.mainPlayList.set('selectedIndex', 2)",
                                   "mapColor": "image"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.66,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_0_HS_0_0.png",
                                      "width": 146,
                                      "height": 146
                                     }
                                    ]
                                   },
                                   "pitch": -9.71,
                                   "yaw": 18.13
                                  }
                                 ],
                                 "id": "overlay_315681B9_3B05_2F3D_4184_61C602721AA5",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                }
                               ],
                               "thumbnailUrl": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_t.jpg",
                               "cube": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_hq.jpeg",
                                  "width": 11424,
                                  "height": 1904,
                                  "tags": [
                                   "oculusgo",
                                   "ipadpro"
                                  ]
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928.jpeg",
                                  "width": 6144,
                                  "height": 1024
                                 }
                                ]
                               }
                              }
                             ],
                             "mapLocations": [
                              {
                               "map": {
                                "minimumZoomFactor": 0.5,
                                "fieldOfViewOverlayInsideColor": "#000000",
                                "class": "Map",
                                "label": "Master-Plan-Map",
                                "fieldOfViewOverlayRadiusScale": 0.2,
                                "id": "map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                                "maximumZoomFactor": 1.2,
                                "width": 431,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B.png",
                                   "width": 431,
                                   "height": 800
                                  }
                                 ]
                                },
                                "scaleMode": "fit_inside",
                                "overlays": [
                                 {
                                  "useHandCursor": true,
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "image": {
                                   "x": 350.78,
                                   "height": 25,
                                   "y": 677.57,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 25,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_0.png",
                                      "width": 25,
                                      "height": 24
                                     }
                                    ]
                                   }
                                  },
                                  "map": {
                                   "width": 25,
                                   "x": 350.78,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_0_map.gif",
                                      "width": 12,
                                      "height": 12
                                     }
                                    ]
                                   },
                                   "y": 677.57,
                                   "class": "HotspotMapOverlayMap",
                                   "offsetY": 0,
                                   "height": 25,
                                   "offsetX": 0
                                  },
                                  "class": "AreaHotspotMapOverlay",
                                  "rollOverDisplay": true,
                                  "id": "overlay_BD09ACE0_AE30_3F13_41BD_5FFF039982FA",
                                  "data": {
                                   "label": "Image"
                                  }
                                 },
                                 {
                                  "useHandCursor": true,
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "click": "this.mainPlayList.set('selectedIndex', 7)",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "image": {
                                   "x": 339.52,
                                   "height": 25,
                                   "y": 638.93,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 25,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_1.png",
                                      "width": 25,
                                      "height": 24
                                     }
                                    ]
                                   }
                                  },
                                  "map": {
                                   "width": 25,
                                   "x": 339.52,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_1_map.gif",
                                      "width": 12,
                                      "height": 12
                                     }
                                    ]
                                   },
                                   "y": 638.93,
                                   "class": "HotspotMapOverlayMap",
                                   "offsetY": 0,
                                   "height": 25,
                                   "offsetX": 0
                                  },
                                  "class": "AreaHotspotMapOverlay",
                                  "rollOverDisplay": true,
                                  "id": "overlay_BDD12C0E_AE31_FF2F_41D8_E01744C9245E",
                                  "data": {
                                   "label": "Image"
                                  }
                                 },
                                 {
                                  "useHandCursor": true,
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "click": "this.mainPlayList.set('selectedIndex', 8)",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "image": {
                                   "x": 350.04,
                                   "height": 25,
                                   "y": 595.19,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 25,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_2.png",
                                      "width": 25,
                                      "height": 24
                                     }
                                    ]
                                   }
                                  },
                                  "map": {
                                   "width": 25,
                                   "x": 350.04,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_2_map.gif",
                                      "width": 12,
                                      "height": 12
                                     }
                                    ]
                                   },
                                   "y": 595.19,
                                   "class": "HotspotMapOverlayMap",
                                   "offsetY": 0,
                                   "height": 25,
                                   "offsetX": 0
                                  },
                                  "class": "AreaHotspotMapOverlay",
                                  "rollOverDisplay": true,
                                  "id": "overlay_BDD572A2_AE30_EB17_41E2_013B4E1D1816",
                                  "data": {
                                   "label": "Image"
                                  }
                                 },
                                 {
                                  "useHandCursor": true,
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "click": "this.mainPlayList.set('selectedIndex', 3)",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "image": {
                                   "x": 377.14,
                                   "height": 25,
                                   "y": 600.4,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 28.39,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_3.png",
                                      "width": 28,
                                      "height": 24
                                     }
                                    ]
                                   }
                                  },
                                  "map": {
                                   "width": 28.39,
                                   "x": 377.14,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_3_map.gif",
                                      "width": 14,
                                      "height": 12
                                     }
                                    ]
                                   },
                                   "y": 600.4,
                                   "class": "HotspotMapOverlayMap",
                                   "offsetY": 0,
                                   "height": 25,
                                   "offsetX": 0
                                  },
                                  "class": "AreaHotspotMapOverlay",
                                  "rollOverDisplay": true,
                                  "id": "overlay_BDFDB098_AE33_E732_41E2_82C9C3FBBDEC",
                                  "data": {
                                   "label": "Image"
                                  }
                                 },
                                 {
                                  "useHandCursor": true,
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "click": "this.mainPlayList.set('selectedIndex', 2)",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "image": {
                                   "x": 380.93,
                                   "height": 25,
                                   "y": 647.07,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 25,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_4.png",
                                      "width": 25,
                                      "height": 24
                                     }
                                    ]
                                   }
                                  },
                                  "map": {
                                   "width": 25,
                                   "x": 380.93,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_4_map.gif",
                                      "width": 12,
                                      "height": 12
                                     }
                                    ]
                                   },
                                   "y": 647.07,
                                   "class": "HotspotMapOverlayMap",
                                   "offsetY": 0,
                                   "height": 25,
                                   "offsetX": 0
                                  },
                                  "class": "AreaHotspotMapOverlay",
                                  "rollOverDisplay": true,
                                  "id": "overlay_BAAAD66C_AE30_6B13_41E4_41C4AF787B88",
                                  "data": {
                                   "label": "Image"
                                  }
                                 },
                                 {
                                  "useHandCursor": true,
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "click": "this.mainPlayList.set('selectedIndex', 13)",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "image": {
                                   "x": 209,
                                   "height": 25,
                                   "y": 94.31,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 25,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_5.png",
                                      "width": 25,
                                      "height": 25
                                     }
                                    ]
                                   }
                                  },
                                  "map": {
                                   "width": 25,
                                   "x": 209,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_5_map.gif",
                                      "width": 12,
                                      "height": 12
                                     }
                                    ]
                                   },
                                   "y": 94.31,
                                   "class": "HotspotMapOverlayMap",
                                   "offsetY": 0,
                                   "height": 25,
                                   "offsetX": 0
                                  },
                                  "class": "AreaHotspotMapOverlay",
                                  "rollOverDisplay": true,
                                  "id": "overlay_B85AADD9_AE30_7935_418C_49774A3F1323",
                                  "data": {
                                   "label": "Image"
                                  }
                                 },
                                 {
                                  "useHandCursor": true,
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "click": "this.mainPlayList.set('selectedIndex', 14)",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "image": {
                                   "x": 263.82,
                                   "height": 25,
                                   "y": 658.22,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 25,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_6.png",
                                      "width": 25,
                                      "height": 25
                                     }
                                    ]
                                   }
                                  },
                                  "map": {
                                   "width": 25,
                                   "x": 263.82,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_6_map.gif",
                                      "width": 12,
                                      "height": 12
                                     }
                                    ]
                                   },
                                   "y": 658.22,
                                   "class": "HotspotMapOverlayMap",
                                   "offsetY": 0,
                                   "height": 25,
                                   "offsetX": 0
                                  },
                                  "class": "AreaHotspotMapOverlay",
                                  "rollOverDisplay": true,
                                  "id": "overlay_BAF4F184_AE30_2913_41D7_D5320C010656",
                                  "data": {
                                   "label": "Image"
                                  }
                                 },
                                 {
                                  "useHandCursor": true,
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "click": "this.mainPlayList.set('selectedIndex', 15)",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "image": {
                                   "x": 180.37,
                                   "height": 25,
                                   "y": 638.3,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 25,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_7.png",
                                      "width": 25,
                                      "height": 25
                                     }
                                    ]
                                   }
                                  },
                                  "map": {
                                   "width": 25,
                                   "x": 180.37,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_7_map.gif",
                                      "width": 12,
                                      "height": 12
                                     }
                                    ]
                                   },
                                   "y": 638.3,
                                   "class": "HotspotMapOverlayMap",
                                   "offsetY": 0,
                                   "height": 25,
                                   "offsetX": 0
                                  },
                                  "class": "AreaHotspotMapOverlay",
                                  "rollOverDisplay": true,
                                  "id": "overlay_BB8BD87E_AE30_27EF_41CD_3E50E37DC6C9",
                                  "data": {
                                   "label": "Image"
                                  }
                                 },
                                 {
                                  "useHandCursor": true,
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "click": "this.mainPlayList.set('selectedIndex', 16)",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "image": {
                                   "x": 87.81,
                                   "height": 25,
                                   "y": 263.65,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 25,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_8.png",
                                      "width": 25,
                                      "height": 25
                                     }
                                    ]
                                   }
                                  },
                                  "map": {
                                   "width": 25,
                                   "x": 87.81,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_8_map.gif",
                                      "width": 12,
                                      "height": 12
                                     }
                                    ]
                                   },
                                   "y": 263.65,
                                   "class": "HotspotMapOverlayMap",
                                   "offsetY": 0,
                                   "height": 25,
                                   "offsetX": 0
                                  },
                                  "class": "AreaHotspotMapOverlay",
                                  "rollOverDisplay": true,
                                  "id": "overlay_B861AF51_AE50_7935_41D1_7279F4D9342F",
                                  "data": {
                                   "label": "Image"
                                  }
                                 },
                                 {
                                  "useHandCursor": true,
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "click": "this.mainPlayList.set('selectedIndex', 4)",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "image": {
                                   "x": 372.56,
                                   "height": 25,
                                   "y": 575.28,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 25,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_9.png",
                                      "width": 25,
                                      "height": 25
                                     }
                                    ]
                                   }
                                  },
                                  "map": {
                                   "width": 25,
                                   "x": 372.56,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_9_map.gif",
                                      "width": 12,
                                      "height": 12
                                     }
                                    ]
                                   },
                                   "y": 575.28,
                                   "class": "HotspotMapOverlayMap",
                                   "offsetY": 0,
                                   "height": 25,
                                   "offsetX": 0
                                  },
                                  "class": "AreaHotspotMapOverlay",
                                  "rollOverDisplay": true,
                                  "id": "overlay_9B8B69CB_BD7D_6BCF_41D2_C3E1DE217D96",
                                  "data": {
                                   "label": "Image"
                                  }
                                 },
                                 {
                                  "useHandCursor": true,
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "image": {
                                   "x": 125.83,
                                   "height": 25,
                                   "y": 215.45,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 25,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_10.png",
                                      "width": 25,
                                      "height": 25
                                     }
                                    ]
                                   }
                                  },
                                  "map": {
                                   "width": 25,
                                   "x": 125.83,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_10_map.gif",
                                      "width": 12,
                                      "height": 12
                                     }
                                    ]
                                   },
                                   "y": 215.45,
                                   "class": "HotspotMapOverlayMap",
                                   "offsetY": 0,
                                   "height": 25,
                                   "offsetX": 0
                                  },
                                  "class": "AreaHotspotMapOverlay",
                                  "rollOverDisplay": true,
                                  "id": "overlay_9A15731C_BD7D_D84A_41E0_DA389A2E262F",
                                  "data": {
                                   "label": "Image"
                                  }
                                 },
                                 {
                                  "useHandCursor": true,
                                  "areas": [
                                   {
                                    "class": "HotspotMapOverlayArea",
                                    "click": "this.mainPlayList.set('selectedIndex', 5)",
                                    "mapColor": "#FF0000"
                                   }
                                  ],
                                  "image": {
                                   "x": 385.29,
                                   "height": 25,
                                   "y": 609.45,
                                   "class": "HotspotMapOverlayImage",
                                   "width": 25,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_11.png",
                                      "width": 25,
                                      "height": 25
                                     }
                                    ]
                                   }
                                  },
                                  "map": {
                                   "width": 25,
                                   "x": 385.29,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_HS_11_map.gif",
                                      "width": 12,
                                      "height": 12
                                     }
                                    ]
                                   },
                                   "y": 609.45,
                                   "class": "HotspotMapOverlayMap",
                                   "offsetY": 0,
                                   "height": 25,
                                   "offsetX": 0
                                  },
                                  "class": "AreaHotspotMapOverlay",
                                  "rollOverDisplay": true,
                                  "id": "overlay_E8BB89E7_FB2C_68C2_41EC_D51790EAE183",
                                  "data": {
                                   "label": "Image"
                                  }
                                 }
                                ],
                                "fieldOfViewOverlayOutsideOpacity": 0,
                                "initialZoomFactor": 1,
                                "fieldOfViewOverlayInsideOpacity": 0.4,
                                "fieldOfViewOverlayOutsideColor": "#000000",
                                "height": 800,
                                "thumbnailUrl": "media/map_BACA8E9B_AE30_7B35_41C7_293947DB728B_t.png"
                               },
                               "x": 397.79,
                               "angle": 177.54,
                               "y": 621.95,
                               "class": "PanoramaMapLocation"
                              }
                             ],
                             "thumbnailUrl": "media/panorama_3CBB93C8_3B03_135B_4190_D012C0697928_t.jpg"
                            },
                            "backwardYaw": 18.13,
                            "yaw": -154.31,
                            "distance": 1
                           }
                          ],
                          "pitch": 0,
                          "partial": false,
                          "vfov": 180,
                          "hfov": 360,
                          "hfovMax": 120,
                          "hfovMin": 60,
                          "frames": [
                           {
                            "class": "CubicPanoramaFrame",
                            "overlays": [
                             {
                              "id": "overlay_32DC33C6_3B03_3356_41C3_4CAA4D015C0E",
                              "pitch": 34.76,
                              "class": "LensFlarePanoramaOverlay",
                              "bleachingDistance": 0.4,
                              "bleaching": 0.7,
                              "yaw": -99.24
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60, this.camera_A68DC4CC_B477_435E_41D0_3D8FCBC3C989); this.mainPlayList.set('selectedIndex', 8)",
                                "mapColor": "image"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.78,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_0_HS_2_0.png",
                                   "width": 146,
                                   "height": 146
                                  }
                                 ]
                                },
                                "pitch": 2.81,
                                "yaw": -178.64
                               }
                              ],
                              "id": "overlay_316A0977_3B03_1F36_41B2_B7744DE767EA",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_3CBB93C8_3B03_135B_4190_D012C0697928, this.camera_A687F4D6_B477_434A_41D5_F6702FE25C35); this.mainPlayList.set('selectedIndex', 5)",
                                "mapColor": "image"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.74,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_0_HS_1_0.png",
                                   "width": 146,
                                   "height": 146
                                  }
                                 ]
                                },
                                "pitch": -6.03,
                                "yaw": -154.31
                               }
                              ],
                              "id": "overlay_317CC518_3B03_34FB_4182_8F4B4DED3310",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.showPopupPanoramaOverlay(this.popup_372E31A5_3B1D_6FD5_41C4_BB3430709714, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':60,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconWidth':60,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':60,'iconWidth':60,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconHeight':60,'rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':60,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_2A9628DE_3B07_1D77_41CB_1DF42F7BCCDA, null, null, null, null, false)",
                                "mapColor": "image"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.77,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_0_HS_0_0.png",
                                   "width": 146,
                                   "height": 146
                                  }
                                 ]
                                },
                                "pitch": 4.09,
                                "yaw": 12.57
                               }
                              ],
                              "id": "overlay_30C5EDEB_3B1D_175D_41BC_CE995A65FCD6",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "showEasing": "cubic_in",
                              "showDuration": 500,
                              "popupMaxWidth": "95%",
                              "yaw": 12.57,
                              "rotationZ": 0,
                              "hideDuration": 500,
                              "class": "PopupPanoramaOverlay",
                              "id": "popup_372E31A5_3B1D_6FD5_41C4_BB3430709714",
                              "hfov": 8.77,
                              "rotationX": 0,
                              "rotationY": 0,
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "class": "ImageResourceLevel",
                                 "url": "media/popup_372E31A5_3B1D_6FD5_41C4_BB3430709714_0_2.jpg",
                                 "width": 1024,
                                 "height": 576
                                }
                               ]
                              },
                              "pitch": 4.09,
                              "popupDistance": 100,
                              "hideEasing": "cubic_out",
                              "popupMaxHeight": "95%"
                             }
                            ],
                            "thumbnailUrl": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_t.jpg",
                            "cube": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_hq.jpeg",
                               "width": 11424,
                               "height": 1904,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ]
                              },
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45.jpeg",
                               "width": 6144,
                               "height": 1024
                              }
                             ]
                            }
                           }
                          ],
                          "mapLocations": [
                           {
                            "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                            "x": 393.43,
                            "angle": 149.95,
                            "y": 659.57,
                            "class": "PanoramaMapLocation"
                           }
                          ],
                          "thumbnailUrl": "media/panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_t.jpg"
                         },
                         "backwardYaw": -178.64,
                         "yaw": 14.33,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "class": "Panorama",
                          "label": "Gym",
                          "id": "panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60",
                            "backwardYaw": -32.39,
                            "yaw": 161.46,
                            "distance": 1
                           }
                          ],
                          "pitch": 0,
                          "partial": false,
                          "vfov": 180,
                          "hfov": 360,
                          "hfovMax": 120,
                          "hfovMin": 60,
                          "frames": [
                           {
                            "class": "CubicPanoramaFrame",
                            "overlays": [
                             {
                              "id": "overlay_32CA3D9C_3B03_F7FB_416D_E4CDE06F22EA",
                              "pitch": 43.14,
                              "class": "LensFlarePanoramaOverlay",
                              "bleachingDistance": 0.4,
                              "bleaching": 0.7,
                              "yaw": -139.24
                             },
                             {
                              "id": "overlay_32D7D0CC_3B03_ED5A_4195_FB8AD3C4811B",
                              "pitch": 50.76,
                              "class": "LensFlarePanoramaOverlay",
                              "bleachingDistance": 0.4,
                              "bleaching": 0.7,
                              "yaw": 43.24
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60, this.camera_A029466F_B477_4F59_41C1_A6E1D48C4594); this.mainPlayList.set('selectedIndex', 8)",
                                "mapColor": "image"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.13,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_0_HS_0_0.png",
                                   "width": 146,
                                   "height": 146
                                  }
                                 ]
                                },
                                "pitch": -22.28,
                                "yaw": 161.46
                               }
                              ],
                              "id": "overlay_3157DCBC_3B03_353A_41B5_CAA3B3F45EFF",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             }
                            ],
                            "thumbnailUrl": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_t.jpg",
                            "cube": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_hq.jpeg",
                               "width": 11424,
                               "height": 1904,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ]
                              },
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA.jpeg",
                               "width": 6144,
                               "height": 1024
                              }
                             ]
                            }
                           }
                          ],
                          "mapLocations": [
                           {
                            "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                            "x": 391.34,
                            "angle": 127.78,
                            "y": 612.9,
                            "class": "PanoramaMapLocation"
                           }
                          ],
                          "thumbnailUrl": "media/panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_t.jpg"
                         },
                         "backwardYaw": 161.46,
                         "yaw": -32.39,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D",
                         "backwardYaw": 70.84,
                         "yaw": 87.87,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "class": "Panorama",
                          "label": "Co-Working",
                          "id": "panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60",
                            "backwardYaw": -97.69,
                            "yaw": -14.21,
                            "distance": 1
                           }
                          ],
                          "pitch": 0,
                          "partial": false,
                          "vfov": 180,
                          "hfov": 360,
                          "hfovMax": 120,
                          "hfovMin": 60,
                          "frames": [
                           {
                            "class": "CubicPanoramaFrame",
                            "overlays": [
                             {
                              "id": "overlay_32D75F0B_3B03_14DE_41A0_63656ECA57C1",
                              "pitch": 55.33,
                              "class": "LensFlarePanoramaOverlay",
                              "bleachingDistance": 0.4,
                              "bleaching": 0.7,
                              "yaw": -55.05
                             },
                             {
                              "id": "overlay_32D342FC_3B03_ED3B_41BD_C17D9DE632E6",
                              "pitch": 48.1,
                              "class": "LensFlarePanoramaOverlay",
                              "bleachingDistance": 0.4,
                              "bleaching": 0.7,
                              "yaw": 90.48
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60, this.camera_A7464535_B477_42C9_41C2_B4AF16AE07ED); this.mainPlayList.set('selectedIndex', 8)",
                                "mapColor": "image"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.2,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_0_HS_0_0.png",
                                   "width": 146,
                                   "height": 146
                                  }
                                 ]
                                },
                                "pitch": -21.15,
                                "yaw": -14.21
                               }
                              ],
                              "id": "overlay_315764E9_3B03_155D_41B0_965458EF17D7",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             }
                            ],
                            "thumbnailUrl": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_t.jpg",
                            "cube": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_hq.jpeg",
                               "width": 11424,
                               "height": 1904,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ]
                              },
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC.jpeg",
                               "width": 6144,
                               "height": 1024
                              }
                             ]
                            }
                           }
                          ],
                          "mapLocations": [
                           {
                            "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                            "x": 385.06,
                            "angle": 248.8,
                            "y": 587.78,
                            "class": "PanoramaMapLocation"
                           }
                          ],
                          "thumbnailUrl": "media/panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_t.jpg"
                         },
                         "backwardYaw": -14.21,
                         "yaw": -97.69,
                         "distance": 1
                        }
                       ],
                       "pitch": 0,
                       "partial": false,
                       "vfov": 180,
                       "hfov": 360,
                       "hfovMax": 120,
                       "hfovMin": 60,
                       "frames": [
                        {
                         "class": "CubicPanoramaFrame",
                         "overlays": [
                          {
                           "id": "overlay_32D25143_3B03_2F4D_41C9_FE2847AB5FC5",
                           "pitch": 64.86,
                           "class": "LensFlarePanoramaOverlay",
                           "bleachingDistance": 0.4,
                           "bleaching": 0.7,
                           "yaw": -176.95
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45, this.camera_A75C4541_B477_4D46_41C1_2EDE85E65797); this.mainPlayList.set('selectedIndex', 2)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.32,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_0_HS_2_0.png",
                                "width": 146,
                                "height": 146
                               }
                              ]
                             },
                             "pitch": -18.72,
                             "yaw": 14.33
                            }
                           ],
                           "id": "overlay_315A9EA5_3B0D_35D5_41C8_40B43ADC7C94",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA, this.camera_A752754D_B477_4D59_41AC_8D352AEBFA78); this.mainPlayList.set('selectedIndex', 3)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.29,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_0_HS_1_0.png",
                                "width": 146,
                                "height": 146
                               }
                              ]
                             },
                             "pitch": -19.44,
                             "yaw": -32.39
                            }
                           ],
                           "id": "overlay_31582A88_3B0D_1DDB_41CB_196FFB894908",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC, this.camera_A73DE562_B477_4D4B_41B6_C41270143917); this.mainPlayList.set('selectedIndex', 4)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 7.94,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_0_HS_0_0.png",
                                "width": 146,
                                "height": 146
                               }
                              ]
                             },
                             "pitch": -25.39,
                             "yaw": -97.69
                            }
                           ],
                           "id": "overlay_31642749_3B02_F35A_41C9_8592C1AB835A",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D, this.camera_A7283558_B477_4D46_41E5_378EAED11974); this.mainPlayList.set('selectedIndex', 7)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.73,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_0_HS_3_0.png",
                                "width": 146,
                                "height": 146
                               }
                              ]
                             },
                             "pitch": -6.53,
                             "yaw": 87.87
                            }
                           ],
                           "id": "overlay_2A2DFDDF_3B07_3775_41CB_8737BBD6B4D2",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          }
                         ],
                         "thumbnailUrl": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_t.jpg",
                         "cube": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_hq.jpeg",
                            "width": 11424,
                            "height": 1904,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ]
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60.jpeg",
                            "width": 6144,
                            "height": 1024
                           }
                          ]
                         }
                        }
                       ],
                       "mapLocations": [
                        {
                         "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                         "x": 362.54,
                         "angle": 134.08,
                         "y": 607.69,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_t.jpg"
                      },
                      "backwardYaw": 87.87,
                      "yaw": 70.84,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459"
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "class": "Panorama",
                       "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.05.02.40",
                       "id": "panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D",
                         "backwardYaw": -62.42,
                         "yaw": 119.39,
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "class": "Panorama",
                          "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.06.01.79",
                          "id": "panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6",
                            "backwardYaw": -13.48,
                            "yaw": 148.38,
                            "distance": 1
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "class": "Panorama",
                             "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.07.10.27",
                             "id": "panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75",
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "class": "Panorama",
                                "label": "Parque",
                                "id": "panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003",
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75",
                                  "backwardYaw": 53.24,
                                  "yaw": -167.54,
                                  "distance": 1
                                 }
                                ],
                                "pitch": 0,
                                "partial": false,
                                "vfov": 180,
                                "hfov": 360,
                                "hfovMax": 120,
                                "hfovMin": 60,
                                "frames": [
                                 {
                                  "class": "CubicPanoramaFrame",
                                  "overlays": [
                                   {
                                    "id": "overlay_32D770D7_3B03_2D75_41A0_39E2D331A82B",
                                    "pitch": 40.86,
                                    "class": "LensFlarePanoramaOverlay",
                                    "bleachingDistance": 0.4,
                                    "bleaching": 0.7,
                                    "yaw": 28
                                   },
                                   {
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75, this.camera_A060361F_B477_4EF9_41C0_2BA4F69FD74F); this.mainPlayList.set('selectedIndex', 16)",
                                      "mapColor": "image"
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 8.72,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_0_HS_0_0.png",
                                         "width": 146,
                                         "height": 146
                                        }
                                       ]
                                      },
                                      "pitch": -7.31,
                                      "yaw": -167.54
                                     }
                                    ],
                                    "id": "overlay_317B4F62_3B06_F34F_41C6_D90973CB4D06",
                                    "data": {
                                     "label": "Image"
                                    },
                                    "enabledInCardboard": true
                                   }
                                  ],
                                  "thumbnailUrl": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_t.jpg",
                                  "cube": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_hq.jpeg",
                                     "width": 11424,
                                     "height": 1904,
                                     "tags": [
                                      "oculusgo",
                                      "ipadpro"
                                     ]
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003.jpeg",
                                     "width": 6144,
                                     "height": 1024
                                    }
                                   ]
                                  }
                                 }
                                ],
                                "mapLocations": [
                                 {
                                  "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                                  "x": 138.33,
                                  "angle": 371.07,
                                  "y": 227.95,
                                  "class": "PanoramaMapLocation"
                                 }
                                ],
                                "thumbnailUrl": "media/panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_t.jpg"
                               },
                               "backwardYaw": -167.54,
                               "yaw": 53.24,
                               "distance": 1
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550",
                               "backwardYaw": 1.49,
                               "yaw": -179.2,
                               "distance": 1
                              }
                             ],
                             "pitch": 0,
                             "partial": false,
                             "vfov": 180,
                             "hfov": 360,
                             "hfovMax": 120,
                             "hfovMin": 60,
                             "frames": [
                              {
                               "class": "CubicPanoramaFrame",
                               "overlays": [
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003, this.camera_A00006B1_B477_4FC9_41D9_B3D3C95F89AC); this.mainPlayList.set('selectedIndex', 6)",
                                   "mapColor": "image"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.69,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_0_HS_1_0.png",
                                      "width": 146,
                                      "height": 146
                                     }
                                    ]
                                   },
                                   "pitch": -8.55,
                                   "yaw": 53.24
                                  }
                                 ],
                                 "id": "overlay_428721FE_48E0_50D4_417D_3A83C3A58A61",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                },
                                {
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550, this.camera_A01116CC_B477_4F5E_41E1_3273CD1999DC); this.mainPlayList.set('selectedIndex', 15)",
                                   "mapColor": "image"
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 8.78,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_0_HS_0_0.png",
                                      "width": 146,
                                      "height": 146
                                     }
                                    ]
                                   },
                                   "pitch": -3.13,
                                   "yaw": -179.2
                                  }
                                 ],
                                 "id": "overlay_4208A842_48E0_7F2F_41CF_5B487B782237",
                                 "data": {
                                  "label": "Image"
                                 },
                                 "enabledInCardboard": true
                                }
                               ],
                               "thumbnailUrl": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_t.jpg",
                               "cube": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_hq.jpeg",
                                  "width": 11424,
                                  "height": 1904,
                                  "tags": [
                                   "oculusgo",
                                   "ipadpro"
                                  ]
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75.jpeg",
                                  "width": 6144,
                                  "height": 1024
                                 }
                                ]
                               }
                              }
                             ],
                             "mapLocations": [
                              {
                               "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                               "x": 100.31,
                               "angle": -16.89,
                               "y": 276.15,
                               "class": "PanoramaMapLocation"
                              }
                             ],
                             "thumbnailUrl": "media/panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_t.jpg"
                            },
                            "backwardYaw": -179.2,
                            "yaw": 1.49,
                            "distance": 1
                           }
                          ],
                          "pitch": 0,
                          "partial": false,
                          "vfov": 180,
                          "hfov": 360,
                          "hfovMax": 120,
                          "hfovMin": 60,
                          "frames": [
                           {
                            "class": "CubicPanoramaFrame",
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6, this.camera_A7EBF598_B477_4DC7_41CD_1C9DC469EA8A); this.mainPlayList.set('selectedIndex', 14)",
                                "mapColor": "image"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.72,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_0_HS_1_0.png",
                                   "width": 146,
                                   "height": 146
                                  }
                                 ]
                                },
                                "pitch": -7.42,
                                "yaw": 148.38
                               }
                              ],
                              "id": "overlay_42C48467_48E1_F7F4_41D1_CD747BC626CB",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             },
                             {
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75, this.camera_A7E265A8_B477_4DC7_4181_A9C7360CCCBC); this.mainPlayList.set('selectedIndex', 16)",
                                "mapColor": "image"
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "maps": [],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 8.76,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_0_HS_0_0.png",
                                   "width": 146,
                                   "height": 146
                                  }
                                 ]
                                },
                                "pitch": -4.93,
                                "yaw": 1.49
                               }
                              ],
                              "id": "overlay_428ADD82_48E0_512C_41CE_80FE692B8CB2",
                              "data": {
                               "label": "Image"
                              },
                              "enabledInCardboard": true
                             }
                            ],
                            "thumbnailUrl": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_t.jpg",
                            "cube": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_hq.jpeg",
                               "width": 11424,
                               "height": 1904,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ]
                              },
                              {
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550.jpeg",
                               "width": 6144,
                               "height": 1024
                              }
                             ]
                            }
                           }
                          ],
                          "mapLocations": [
                           {
                            "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                            "x": 192.87,
                            "angle": -15.26,
                            "y": 650.8,
                            "class": "PanoramaMapLocation"
                           }
                          ],
                          "thumbnailUrl": "media/panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_t.jpg"
                         },
                         "backwardYaw": 148.38,
                         "yaw": -13.48,
                         "distance": 1
                        }
                       ],
                       "pitch": 0,
                       "partial": false,
                       "vfov": 180,
                       "hfov": 360,
                       "hfovMax": 120,
                       "hfovMin": 60,
                       "frames": [
                        {
                         "class": "CubicPanoramaFrame",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D, this.camera_A77BA51C_B477_42FF_41A1_D08E73D9D0D4); this.mainPlayList.set('selectedIndex', 7)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.71,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_0_HS_1_0.png",
                                "width": 146,
                                "height": 146
                               }
                              ]
                             },
                             "pitch": -7.87,
                             "yaw": 119.39
                            }
                           ],
                           "id": "overlay_413F14EC_48E0_50F4_41C2_5CFEEC3F21DD",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          },
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550, this.camera_A770852A_B477_42DB_41BA_B0EEA882E936); this.mainPlayList.set('selectedIndex', 15)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.73,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_0_HS_0_0.png",
                                "width": 146,
                                "height": 146
                               }
                              ]
                             },
                             "pitch": -6.37,
                             "yaw": -13.48
                            }
                           ],
                           "id": "overlay_42D2A12C_48E0_D174_41AF_5E77F524E1E3",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          }
                         ],
                         "thumbnailUrl": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_t.jpg",
                         "cube": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_hq.jpeg",
                            "width": 11424,
                            "height": 1904,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ]
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6.jpeg",
                            "width": 6144,
                            "height": 1024
                           }
                          ]
                         }
                        }
                       ],
                       "mapLocations": [
                        {
                         "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                         "x": 276.32,
                         "angle": -47.71,
                         "y": 670.72,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_t.jpg"
                      },
                      "backwardYaw": 119.39,
                      "yaw": -62.42,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "class": "Panorama",
                       "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.03.43.93",
                       "id": "panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D",
                         "backwardYaw": 28.39,
                         "yaw": -176.89,
                         "distance": 1
                        }
                       ],
                       "pitch": 0,
                       "partial": false,
                       "vfov": 180,
                       "hfov": 360,
                       "hfovMax": 120,
                       "hfovMin": 60,
                       "frames": [
                        {
                         "class": "CubicPanoramaFrame",
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D, this.camera_A00E0698_B477_4FC7_41D8_FA73634378D9); this.mainPlayList.set('selectedIndex', 7)",
                             "mapColor": "image"
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 8.77,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_0_HS_0_0.png",
                                "width": 146,
                                "height": 146
                               }
                              ]
                             },
                             "pitch": -3.34,
                             "yaw": -176.89
                            }
                           ],
                           "id": "overlay_4629B93A_48E0_D15C_41A0_D79B5B84268D",
                           "data": {
                            "label": "Image"
                           },
                           "enabledInCardboard": true
                          }
                         ],
                         "thumbnailUrl": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_t.jpg",
                         "cube": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_hq.jpeg",
                            "width": 11424,
                            "height": 1904,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ]
                           },
                           {
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3.jpeg",
                            "width": 6144,
                            "height": 1024
                           }
                          ]
                         }
                        }
                       ],
                       "mapLocations": [
                        {
                         "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                         "x": 221.5,
                         "angle": -14.47,
                         "y": 106.81,
                         "class": "PanoramaMapLocation"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_t.jpg"
                      },
                      "backwardYaw": -176.89,
                      "yaw": 28.39,
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE",
                      "backwardYaw": 32.74,
                      "yaw": -141.97,
                      "distance": 1
                     }
                    ],
                    "pitch": 0,
                    "partial": false,
                    "vfov": 180,
                    "hfov": 360,
                    "hfovMax": 120,
                    "hfovMin": 60,
                    "frames": [
                     {
                      "class": "CubicPanoramaFrame",
                      "overlays": [
                       {
                        "id": "overlay_32D123BA_3B03_133F_41BF_C4FC184B7013",
                        "pitch": 35.9,
                        "class": "LensFlarePanoramaOverlay",
                        "bleachingDistance": 0.4,
                        "bleaching": 0.7,
                        "yaw": 100.76
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6, this.camera_A69364FC_B477_433F_41DB_95C9186ECE86); this.mainPlayList.set('selectedIndex', 14)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.74,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_5_0.png",
                             "width": 146,
                             "height": 146
                            }
                           ]
                          },
                          "pitch": -6.19,
                          "yaw": -62.42
                         }
                        ],
                        "id": "overlay_31517807_3B0E_FCD5_41C9_B83560C5422F",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3, this.camera_A76B4508_B477_42C7_41E3_F5C6100C6EFB); this.mainPlayList.set('selectedIndex', 13)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.76,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_4_0.png",
                             "width": 146,
                             "height": 146
                            }
                           ]
                          },
                          "pitch": -4.65,
                          "yaw": 28.39
                         }
                        ],
                        "id": "overlay_316EF9A1_3B0F_1FCD_41CD_4BC4281DE0B9",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.showPopupPanoramaOverlay(this.popup_30FAB855_3B1D_1D75_41B9_135EDF0BADEF, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':60,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconWidth':60,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':60,'iconWidth':60,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconHeight':60,'rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':60,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_2A9058DC_3B07_1D7B_41C6_531578C00064, null, null, null, null, false)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.49,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_3_0.png",
                             "width": 146,
                             "height": 146
                            }
                           ]
                          },
                          "pitch": 15.01,
                          "yaw": 2.01
                         }
                        ],
                        "id": "overlay_317A9CA3_3B0F_15CD_41C5_A201780DF6C6",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.mainPlayList.set('selectedIndex', 1)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.79,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_2_0.png",
                             "width": 146,
                             "height": 146
                            }
                           ]
                          },
                          "pitch": 0.45,
                          "yaw": -4.18
                         }
                        ],
                        "id": "overlay_31805906_3B0F_7CD7_41AE_C8E56EC36B1F",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60, this.camera_A69B04EF_B477_4359_41D8_2FE6DBA814DF); this.mainPlayList.set('selectedIndex', 8)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.75,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_1_0.png",
                             "width": 146,
                             "height": 146
                            }
                           ]
                          },
                          "pitch": -5.57,
                          "yaw": 70.84
                         }
                        ],
                        "id": "overlay_317428A0_3B0F_1DCB_4188_FB8395B0E77A",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       },
                       {
                        "showEasing": "cubic_in",
                        "showDuration": 500,
                        "popupMaxWidth": "95%",
                        "yaw": 2.01,
                        "rotationZ": 0,
                        "hideDuration": 500,
                        "class": "PopupPanoramaOverlay",
                        "id": "popup_30FAB855_3B1D_1D75_41B9_135EDF0BADEF",
                        "hfov": 8.49,
                        "rotationX": 0,
                        "rotationY": 0,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "class": "ImageResourceLevel",
                           "url": "media/popup_30FAB855_3B1D_1D75_41B9_135EDF0BADEF_0_2.jpg",
                           "width": 1024,
                           "height": 576
                          }
                         ]
                        },
                        "pitch": 15.01,
                        "popupDistance": 100,
                        "hideEasing": "cubic_out",
                        "popupMaxHeight": "95%"
                       },
                       {
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE, this.camera_A7641512_B477_42CB_41D3_6E4F34BC9894); this.mainPlayList.set('selectedIndex', 0)",
                          "mapColor": "image"
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "items": [
                         {
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 8.58,
                          "distance": 50,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_0_HS_0_0.png",
                             "width": 146,
                             "height": 146
                            }
                           ]
                          },
                          "pitch": -12.45,
                          "yaw": -141.97
                         }
                        ],
                        "id": "overlay_3629DD14_3B05_34CB_41C4_66551A75688F",
                        "data": {
                         "label": "Image"
                        },
                        "enabledInCardboard": true
                       }
                      ],
                      "thumbnailUrl": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_t.jpg",
                      "cube": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_hq.jpeg",
                         "width": 11424,
                         "height": 1904,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ]
                        },
                        {
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D.jpeg",
                         "width": 6144,
                         "height": 1024
                        }
                       ]
                      }
                     }
                    ],
                    "mapLocations": [
                     {
                      "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                      "x": 352.02,
                      "angle": -25.09,
                      "y": 651.43,
                      "class": "PanoramaMapLocation"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_t.jpg"
                   },
                   "backwardYaw": -141.97,
                   "yaw": 32.74,
                   "distance": 1
                  }
                 ],
                 "pitch": 0,
                 "partial": false,
                 "vfov": 180,
                 "hfov": 360,
                 "hfovMax": 120,
                 "hfovMin": 60,
                 "frames": [
                  {
                   "class": "CubicPanoramaFrame",
                   "overlays": [
                    {
                     "id": "overlay_31A10C1C_3B03_74FB_41C0_5CB3AC92D3FC",
                     "pitch": 34.76,
                     "class": "LensFlarePanoramaOverlay",
                     "bleachingDistance": 0.4,
                     "bleaching": 0.7,
                     "yaw": 98.48
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D, this.camera_A045F639_B477_4F39_4179_AD2535270A51); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.61,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_0_HS_1_0.png",
                          "width": 146,
                          "height": 146
                         }
                        ]
                       },
                       "pitch": -11.44,
                       "yaw": 32.74
                      }
                     ],
                     "id": "overlay_3137239D_3B0D_13F5_41CA_F947019E0BF9",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.showPopupPanoramaOverlay(this.popup_31E31D06_3B03_14D7_41BC_A7272672761F, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':60,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconWidth':60,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':60,'iconWidth':60,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconHeight':60,'rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':60,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_2A92D8D8_3B07_1D7B_41C8_F30730B9CCB7, null, null, null, null, false)",
                       "mapColor": "image"
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 8.79,
                       "distance": 50,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_0_HS_0_0.png",
                          "width": 146,
                          "height": 146
                         }
                        ]
                       },
                       "pitch": 1.27,
                       "yaw": -128.76
                      }
                     ],
                     "id": "overlay_316838E6_3B0D_7D57_41A0_68FD9A3260AD",
                     "data": {
                      "label": "Image"
                     },
                     "enabledInCardboard": true
                    },
                    {
                     "showEasing": "cubic_in",
                     "showDuration": 500,
                     "popupMaxWidth": "95%",
                     "yaw": -128.76,
                     "rotationZ": 0,
                     "hideDuration": 500,
                     "class": "PopupPanoramaOverlay",
                     "id": "popup_31E31D06_3B03_14D7_41BC_A7272672761F",
                     "hfov": 8.79,
                     "rotationX": 0,
                     "rotationY": 0,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "class": "ImageResourceLevel",
                        "url": "media/popup_31E31D06_3B03_14D7_41BC_A7272672761F_0_2.jpg",
                        "width": 1024,
                        "height": 576
                       }
                      ]
                     },
                     "pitch": 1.27,
                     "popupDistance": 100,
                     "hideEasing": "cubic_out",
                     "popupMaxHeight": "95%"
                    }
                   ],
                   "thumbnailUrl": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_t.jpg",
                   "cube": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_hq.jpeg",
                      "width": 11424,
                      "height": 1904,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ]
                     },
                     {
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE.jpeg",
                      "width": 6144,
                      "height": 1024
                     }
                    ]
                   }
                  }
                 ],
                 "mapLocations": [
                  {
                   "map": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
                   "x": 363.28,
                   "angle": -38.19,
                   "y": 690.07,
                   "class": "PanoramaMapLocation"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_t.jpg"
                }
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "hfov": 360,
              "hfovMax": 120,
              "hfovMin": 60,
              "frames": [
               {
                "class": "CubicPanoramaFrame",
                "overlays": [
                 {
                  "id": "overlay_33E786B2_3AD4_E254_41CB_16877F5108CA",
                  "pitch": 61.43,
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "bleaching": 0.7,
                  "yaw": 25.33
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1, this.camera_A79DF607_B477_4EC9_4169_2DF409292FC3); this.mainPlayList.set('selectedIndex', 9)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.73,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_0_HS_3_0.png",
                       "width": 146,
                       "height": 146
                      }
                     ]
                    },
                    "pitch": -6.51,
                    "yaw": 21.21
                   }
                  ],
                  "id": "overlay_3388DCA1_3AD7_E675_41B0_8E1774713537",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.showPopupPanoramaOverlay(this.popup_28BA60CC_3B05_2D5A_416C_5C114F31F134, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':60,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconWidth':60,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':60,'iconWidth':60,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconHeight':60,'rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':60,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_2EAB1950_3B05_3F4B_41A6_C23121A41D92, null, null, null, null, false)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.79,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_0_HS_2_0.png",
                       "width": 146,
                       "height": 146
                      }
                     ]
                    },
                    "pitch": 1.28,
                    "yaw": 10.44
                   }
                  ],
                  "id": "overlay_3361DD02_3AD4_2634_41CB_39BE9C409A25",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 17)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.47,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_0_HS_1_0.png",
                       "width": 146,
                       "height": 146
                      }
                     ]
                    },
                    "pitch": 15.55,
                    "yaw": 75.05
                   }
                  ],
                  "id": "overlay_3364C9F6_3AD5_E1DC_4194_F15E61A0F278",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 8.55,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_0_HS_0_0.png",
                       "width": 146,
                       "height": 146
                      }
                     ]
                    },
                    "pitch": -13.41,
                    "yaw": 158.67
                   }
                  ],
                  "id": "overlay_3369E4D5_3AD4_27DD_41BC_226048948ABF",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 },
                 {
                  "showEasing": "cubic_in",
                  "showDuration": 500,
                  "popupMaxWidth": "95%",
                  "yaw": 10.44,
                  "rotationZ": 0,
                  "hideDuration": 500,
                  "class": "PopupPanoramaOverlay",
                  "id": "popup_28BA60CC_3B05_2D5A_416C_5C114F31F134",
                  "hfov": 8.79,
                  "rotationX": 0,
                  "rotationY": 0,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "class": "ImageResourceLevel",
                     "url": "media/popup_28BA60CC_3B05_2D5A_416C_5C114F31F134_0_1.jpg",
                     "width": 1024,
                     "height": 1024
                    }
                   ]
                  },
                  "pitch": 1.28,
                  "popupDistance": 100,
                  "hideEasing": "cubic_out",
                  "popupMaxHeight": "95%"
                 },
                 {
                  "id": "overlay_2C5AEDEF_3B02_F755_41B6_E7020FC82DBF",
                  "pitch": 5.43,
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "bleaching": 0.12,
                  "yaw": -5.52
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7, this.camera_A06F2616_B477_4ECA_41E4_63804914367B); this.mainPlayList.set('selectedIndex', 22)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.76,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_0_HS_4_0.png",
                       "width": 146,
                       "height": 146
                      }
                     ]
                    },
                    "pitch": -28.05,
                    "yaw": -41.71
                   }
                  ],
                  "id": "overlay_B9C6E82D_B459_C2D9_41D3_29D539EB1511",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 }
                ],
                "thumbnailUrl": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_t.jpg",
                "cube": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_hq.jpeg",
                   "width": 11424,
                   "height": 1904,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459.jpeg",
                   "width": 6144,
                   "height": 1024
                  }
                 ]
                }
               }
              ],
              "mapLocations": [
               {
                "map": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
                "x": 54.08,
                "angle": 10.22,
                "y": 452.67,
                "class": "PanoramaMapLocation"
               }
              ],
              "thumbnailUrl": "media/panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_t.jpg"
             },
             "backwardYaw": -41.71,
             "yaw": 53.57,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D"
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1",
             "backwardYaw": 26.81,
             "yaw": -39.79,
             "distance": 1
            }
           ],
           "pitch": 0,
           "partial": false,
           "vfov": 180,
           "hfov": 360,
           "hfovMax": 130,
           "hfovMin": 60,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7_hq.jpeg",
                "width": 6434,
                "height": 3217,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7.jpeg",
                "width": 4002,
                "height": 2001
               }
              ]
             },
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459, this.camera_A7009580_B477_4DC7_41D7_9C405C18C6A0); this.mainPlayList.set('selectedIndex', 1)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.54,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7_0_HS_0_0.png",
                    "width": 157,
                    "height": 157
                   }
                  ]
                 },
                 "pitch": -41.88,
                 "yaw": 53.57
                }
               ],
               "id": "overlay_BB7D7F4E_B45B_3D5A_41C9_B4A52CB60877",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1, this.camera_A716958B_B477_4DD9_41E3_A61F74CA8609); this.mainPlayList.set('selectedIndex', 9)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.63,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7_0_HS_1_0.png",
                    "width": 157,
                    "height": 157
                   }
                  ]
                 },
                 "pitch": -11.06,
                 "yaw": -39.79
                }
               ],
               "id": "overlay_BB34550B_B459_42D9_41D5_5BF535302564",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.showPopupPanoramaOverlay(this.popup_A451E1DF_B457_457A_41D4_5288F30208C3, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':20,'iconWidth':20,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_A7748ECA_B469_3F5B_41DC_2367176E0EFE, null, null, null, null, false)",
                 "mapColor": "#FF0000"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -53.06,
                 "hfov": 6.59,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7_0_HS_2_0_0_map.gif",
                    "width": 16,
                    "height": 16
                   }
                  ]
                 },
                 "pitch": 0.87
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.59,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7_0_HS_2_0.png",
                    "width": 117,
                    "height": 117
                   }
                  ]
                 },
                 "pitch": 0.87,
                 "yaw": -53.06
                }
               ],
               "id": "overlay_BB84EB14_B458_C6CF_41D3_4AABA10DE9BA",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "showEasing": "cubic_in",
               "showDuration": 500,
               "popupMaxWidth": "95%",
               "yaw": -53.06,
               "rotationZ": 0,
               "hideDuration": 500,
               "class": "PopupPanoramaOverlay",
               "id": "popup_A451E1DF_B457_457A_41D4_5288F30208C3",
               "hfov": 6.59,
               "rotationX": 0,
               "rotationY": 0,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "class": "ImageResourceLevel",
                  "url": "media/popup_A451E1DF_B457_457A_41D4_5288F30208C3_0_1.jpg",
                  "width": 1024,
                  "height": 1024
                 }
                ]
               },
               "pitch": 0.87,
               "popupDistance": 100,
               "hideEasing": "cubic_out",
               "popupMaxHeight": "95%"
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.mainPlayList.set('selectedIndex', 7)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.71,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7_0_HS_3_0.png",
                    "width": 157,
                    "height": 157
                   }
                  ]
                 },
                 "pitch": -7.81,
                 "yaw": 70.71
                }
               ],
               "id": "overlay_A50F89A1_B457_C5C9_41DB_19A17948734C",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.mainPlayList.set('selectedIndex', 17)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.72,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7_0_HS_4_0.png",
                    "width": 157,
                    "height": 157
                   }
                  ]
                 },
                 "pitch": 7.24,
                 "yaw": 25.85
                }
               ],
               "id": "overlay_A5216818_B468_C2C7_41BC_1A501D1DD890",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              }
             ],
             "thumbnailUrl": "media/panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7_t.jpg"
          }
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A"
         }
        ],
        "pitch": 0,
        "partial": false,
        "vfov": 180,
        "hfov": 360,
        "hfovMax": 120,
        "hfovMin": 60,
        "frames": [
         {
          "class": "CubicPanoramaFrame",
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 22)",
              "mapColor": "image"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.68,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_0_HS_1_0.png",
                 "width": 146,
                 "height": 146
                }
               ]
              },
              "pitch": -29.12,
              "yaw": 15.75
             }
            ],
            "id": "overlay_43E11B49_48E3_F13D_41D1_79089E0F58CA",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 18)",
              "mapColor": "image"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.67,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_0_HS_0_0.png",
                 "width": 146,
                 "height": 146
                }
               ]
              },
              "pitch": -9.32,
              "yaw": -18.45
             }
            ],
            "id": "overlay_43C88A5D_48E0_D3D5_41C8_2DF59FFA71DC",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           }
          ],
          "thumbnailUrl": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_t.jpg",
          "cube": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_hq.jpeg",
             "width": 11424,
             "height": 1904,
             "tags": [
              "oculusgo",
              "ipadpro"
             ]
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49.jpeg",
             "width": 6144,
             "height": 1024
            }
           ]
          }
         }
        ],
        "mapLocations": [
         {
          "map": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
          "x": 303.02,
          "angle": -87.21,
          "y": 433.43,
          "class": "PanoramaMapLocation"
         },
         {
          "map": {
           "minimumZoomFactor": 0.5,
           "fieldOfViewOverlayInsideColor": "#000000",
           "class": "Map",
           "label": "2-piso",
           "fieldOfViewOverlayRadiusScale": 0.2,
           "id": "map_B86E682C_AE70_6713_41DE_CACB87474A6E",
           "maximumZoomFactor": 1.2,
           "width": 344,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E.png",
              "width": 344,
              "height": 800
             }
            ]
           },
           "scaleMode": "fit_inside",
           "overlays": [
            {
             "useHandCursor": true,
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 17)",
               "mapColor": "#FF0000"
              }
             ],
             "image": {
              "x": 282.72,
              "height": 25,
              "y": 427.61,
              "class": "HotspotMapOverlayImage",
              "width": 25,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_0.png",
                 "width": 25,
                 "height": 25
                }
               ]
              }
             },
             "map": {
              "width": 25,
              "x": 282.72,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_0_map.gif",
                 "width": 12,
                 "height": 12
                }
               ]
              },
              "y": 427.61,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "height": 25,
              "offsetX": 0
             },
             "class": "AreaHotspotMapOverlay",
             "rollOverDisplay": true,
             "id": "overlay_B8F85CB0_AE70_3F73_41C3_DC7B01FC0984",
             "data": {
              "label": "Image"
             }
            },
            {
             "useHandCursor": true,
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 10)",
               "mapColor": "#FF0000"
              }
             ],
             "image": {
              "x": 54.14,
              "height": 25,
              "y": 478.53,
              "class": "HotspotMapOverlayImage",
              "width": 25,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_1.png",
                 "width": 25,
                 "height": 25
                }
               ]
              }
             },
             "map": {
              "width": 25,
              "x": 54.14,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_1_map.gif",
                 "width": 12,
                 "height": 12
                }
               ]
              },
              "y": 478.53,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "height": 25,
              "offsetX": 0
             },
             "class": "AreaHotspotMapOverlay",
             "rollOverDisplay": true,
             "id": "overlay_B9A37DAA_AE70_1917_41C7_01122E6A0AED",
             "data": {
              "label": "Image"
             }
            },
            {
             "useHandCursor": true,
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 20)",
               "mapColor": "#FF0000"
              }
             ],
             "image": {
              "x": 86.96,
              "height": 25,
              "y": 641.47,
              "class": "HotspotMapOverlayImage",
              "width": 25,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_2.png",
                 "width": 25,
                 "height": 25
                }
               ]
              }
             },
             "map": {
              "width": 25,
              "x": 86.96,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_2_map.gif",
                 "width": 12,
                 "height": 12
                }
               ]
              },
              "y": 641.47,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "height": 25,
              "offsetX": 0
             },
             "class": "AreaHotspotMapOverlay",
             "rollOverDisplay": true,
             "id": "overlay_B9B931CA_AE70_6916_41D9_A5584E238A36",
             "data": {
              "label": "Image"
             }
            },
            {
             "useHandCursor": true,
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 19)",
               "mapColor": "#FF0000"
              }
             ],
             "image": {
              "x": 245.37,
              "height": 25,
              "y": 594,
              "class": "HotspotMapOverlayImage",
              "width": 25,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_3.png",
                 "width": 25,
                 "height": 25
                }
               ]
              }
             },
             "map": {
              "width": 25,
              "x": 245.37,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_3_map.gif",
                 "width": 12,
                 "height": 12
                }
               ]
              },
              "y": 594,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "height": 25,
              "offsetX": 0
             },
             "class": "AreaHotspotMapOverlay",
             "rollOverDisplay": true,
             "id": "overlay_B98B7224_AE70_2B13_41D2_E4AA8B59B901",
             "data": {
              "label": "Image"
             }
            },
            {
             "useHandCursor": true,
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 21)",
               "mapColor": "#FF0000"
              }
             ],
             "image": {
              "x": 174.14,
              "height": 25,
              "y": 320.11,
              "class": "HotspotMapOverlayImage",
              "width": 25,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_4.png",
                 "width": 25,
                 "height": 25
                }
               ]
              }
             },
             "map": {
              "width": 25,
              "x": 174.14,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_4_map.gif",
                 "width": 12,
                 "height": 12
                }
               ]
              },
              "y": 320.11,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "height": 25,
              "offsetX": 0
             },
             "class": "AreaHotspotMapOverlay",
             "rollOverDisplay": true,
             "id": "overlay_B8C7E95D_AE70_192D_41E1_11DAC171E4FE",
             "data": {
              "label": "Image"
             }
            },
            {
             "useHandCursor": true,
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 12)",
               "mapColor": "#FF0000"
              }
             ],
             "image": {
              "x": 229.53,
              "height": 25,
              "y": 221.61,
              "class": "HotspotMapOverlayImage",
              "width": 25,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_5.png",
                 "width": 25,
                 "height": 25
                }
               ]
              }
             },
             "map": {
              "width": 25,
              "x": 229.53,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_5_map.gif",
                 "width": 12,
                 "height": 12
                }
               ]
              },
              "y": 221.61,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "height": 25,
              "offsetX": 0
             },
             "class": "AreaHotspotMapOverlay",
             "rollOverDisplay": true,
             "id": "overlay_B93268DD_AE71_E72D_41D4_1633A180488E",
             "data": {
              "label": "Image"
             }
            },
            {
             "useHandCursor": true,
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 11)",
               "mapColor": "#FF0000"
              }
             ],
             "image": {
              "x": 129.9,
              "height": 25,
              "y": 378.95,
              "class": "HotspotMapOverlayImage",
              "width": 25,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_6.png",
                 "width": 25,
                 "height": 25
                }
               ]
              }
             },
             "map": {
              "width": 25,
              "x": 129.9,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_6_map.gif",
                 "width": 12,
                 "height": 12
                }
               ]
              },
              "y": 378.95,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "height": 25,
              "offsetX": 0
             },
             "class": "AreaHotspotMapOverlay",
             "rollOverDisplay": true,
             "id": "overlay_B902B875_AE71_E7FD_41E1_C80DD5F6AC12",
             "data": {
              "label": "Image"
             }
            },
            {
             "useHandCursor": true,
             "areas": [
              {
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 18)",
               "mapColor": "#FF0000"
              }
             ],
             "image": {
              "x": 133.35,
              "height": 25,
              "y": 484.19,
              "class": "HotspotMapOverlayImage",
              "width": 25,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_7.png",
                 "width": 25,
                 "height": 25
                }
               ]
              }
             },
             "map": {
              "width": 25,
              "x": 133.35,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_HS_7_map.gif",
                 "width": 12,
                 "height": 12
                }
               ]
              },
              "y": 484.19,
              "class": "HotspotMapOverlayMap",
              "offsetY": 0,
              "height": 25,
              "offsetX": 0
             },
             "class": "AreaHotspotMapOverlay",
             "rollOverDisplay": true,
             "id": "overlay_B8C2A774_AE70_69FC_41E1_7E3B506459F7",
             "data": {
              "label": "Image"
             }
            }
           ],
           "fieldOfViewOverlayOutsideOpacity": 0,
           "initialZoomFactor": 1,
           "fieldOfViewOverlayInsideOpacity": 0.4,
           "fieldOfViewOverlayOutsideColor": "#000000",
           "height": 800,
           "thumbnailUrl": "media/map_B86E682C_AE70_6713_41DE_CACB87474A6E_t.png"
          },
          "x": 295.22,
          "angle": -88.29,
          "y": 440.11,
          "class": "PanoramaMapLocation"
         }
        ],
        "thumbnailUrl": "media/panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_t.jpg"
       }
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_4F52997B_48E0_51DC_4196_47E37636AA82",
       "backwardYaw": 9.41,
       "yaw": -45.27,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "label": "EscazuUrbano-Win64-Shipping 360 2019.06.08 - 23.09.58.93",
        "id": "panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A",
          "backwardYaw": 77.84,
          "yaw": 111.89,
          "distance": 1
         }
        ],
        "pitch": 0,
        "partial": false,
        "vfov": 180,
        "hfov": 360,
        "hfovMax": 120,
        "hfovMin": 60,
        "frames": [
         {
          "class": "CubicPanoramaFrame",
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A, this.camera_A03A7684_B477_4FCE_41D9_26C3CCB2511C); this.mainPlayList.set('selectedIndex', 18)",
              "mapColor": "image"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 6.52,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_0_HS_0_0.png",
                 "width": 146,
                 "height": 146
                }
               ]
              },
              "pitch": -42.11,
              "yaw": 111.89
             }
            ],
            "id": "overlay_30C8DCA2_3AD4_6674_41CA_A28F394ECBCF",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           }
          ],
          "thumbnailUrl": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_t.jpg",
          "cube": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_hq.jpeg",
             "width": 11424,
             "height": 1904,
             "tags": [
              "oculusgo",
              "ipadpro"
             ]
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07.jpeg",
             "width": 6144,
             "height": 1024
            }
           ]
          }
         }
        ],
        "mapLocations": [
         {
          "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
          "x": 66.64,
          "angle": -29.11,
          "y": 491.03,
          "class": "PanoramaMapLocation"
         }
        ],
        "thumbnailUrl": "media/panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_t.jpg"
       },
       "backwardYaw": 111.89,
       "yaw": 77.84,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.11.49.79",
        "id": "panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A",
          "backwardYaw": 19.97,
          "yaw": 23.98,
          "distance": 1
         }
        ],
        "pitch": 0,
        "partial": false,
        "vfov": 180,
        "hfov": 360,
        "hfovMax": 120,
        "hfovMin": 60,
        "frames": [
         {
          "class": "CubicPanoramaFrame",
          "overlays": [
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A, this.camera_A680B4E4_B477_434F_41D7_9BCDC2F73D80); this.mainPlayList.set('selectedIndex', 18)",
              "mapColor": "image"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.71,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_0_HS_0_0.png",
                 "width": 146,
                 "height": 146
                }
               ]
              },
              "pitch": -28.71,
              "yaw": 23.98
             }
            ],
            "id": "overlay_44CEEFBE_48E0_5154_41D2_11E5B50AF3A5",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           }
          ],
          "thumbnailUrl": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_t.jpg",
          "cube": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_hq.jpeg",
             "width": 11424,
             "height": 1904,
             "tags": [
              "oculusgo",
              "ipadpro"
             ]
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7.jpeg",
             "width": 6144,
             "height": 1024
            }
           ]
          }
         }
        ],
        "mapLocations": [
         {
          "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
          "x": 99.46,
          "angle": 0,
          "y": 653.97,
          "class": "PanoramaMapLocation"
         }
        ],
        "thumbnailUrl": "media/panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_t.jpg"
       },
       "backwardYaw": 23.98,
       "yaw": 19.97,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "label": "EscazuUrbano-Win64-Shipping 360 2019.06.08 - 23.11.18.89",
        "id": "panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A",
          "backwardYaw": 174.05,
          "yaw": -145.83,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "label": "EscazuUrbano-Win64-Shipping 360 2019.06.11 - 17.13.04.57",
           "id": "panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "label": "EscazuUrbano-Win64-Shipping 360 2019.06.08 - 23.13.08.52",
              "id": "panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE",
                "backwardYaw": -56.99,
                "yaw": 82.07,
                "distance": 1
               }
              ],
              "pitch": 0,
              "partial": false,
              "vfov": 180,
              "hfov": 360,
              "hfovMax": 120,
              "hfovMin": 60,
              "frames": [
               {
                "class": "CubicPanoramaFrame",
                "overlays": [
                 {
                  "id": "overlay_30DE33D6_3ADC_21DF_41BA_CF03CCCDB267",
                  "pitch": 49.24,
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "bleaching": 0.7,
                  "yaw": -36
                 },
                 {
                  "id": "overlay_30D2C6DE_3ADC_23CC_41C4_310B0FE53FB7",
                  "pitch": 67.52,
                  "class": "LensFlarePanoramaOverlay",
                  "bleachingDistance": 0.4,
                  "bleaching": 0.7,
                  "yaw": 139.24
                 },
                 {
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE, this.camera_A057265A_B477_4F7B_41D6_009993DC0967); this.mainPlayList.set('selectedIndex', 21)",
                    "mapColor": "image"
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 7.07,
                    "distance": 50,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_0_HS_1_0.png",
                       "width": 146,
                       "height": 146
                      }
                     ]
                    },
                    "pitch": -36.46,
                    "yaw": 82.07
                   }
                  ],
                  "id": "overlay_35E327C4_3FC5_1C55_4187_2D0D3344C760",
                  "data": {
                   "label": "Image"
                  },
                  "enabledInCardboard": true
                 }
                ],
                "thumbnailUrl": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_t.jpg",
                "cube": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_hq.jpeg",
                   "width": 11424,
                   "height": 1904,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ]
                  },
                  {
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277.jpeg",
                   "width": 6144,
                   "height": 1024
                  }
                 ]
                }
               }
              ],
              "mapLocations": [
               {
                "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
                "x": 242.03,
                "angle": 152.28,
                "y": 234.11,
                "class": "PanoramaMapLocation"
               }
              ],
              "thumbnailUrl": "media/panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_t.jpg"
             },
             "backwardYaw": 82.07,
             "yaw": -56.99,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A"
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2",
             "backwardYaw": 69.44,
             "yaw": 115.91,
             "distance": 1
            }
           ],
           "pitch": 0,
           "partial": false,
           "vfov": 180,
           "hfov": 360,
           "hfovMax": 120,
           "hfovMin": 60,
           "frames": [
            {
             "class": "CubicPanoramaFrame",
             "overlays": [
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2, this.camera_A70B0576_B477_4D4B_41E6_7238F0BE7EEB); this.mainPlayList.set('selectedIndex', 11)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.44,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_0_HS_2_0.png",
                    "width": 146,
                    "height": 146
                   }
                  ]
                 },
                 "pitch": -42.92,
                 "yaw": 115.91
                }
               ],
               "id": "overlay_4416E911_48E1_B12F_41C2_899F6C846290",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.mainPlayList.set('selectedIndex', 18)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 8.17,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_0_HS_1_0.png",
                    "width": 146,
                    "height": 146
                   }
                  ]
                 },
                 "pitch": -21.58,
                 "yaw": 108.59
                }
               ],
               "id": "overlay_45AB643C_48E0_F754_41BB_9BA442ABFAC3",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              },
              {
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277, this.camera_A733856C_B477_4D5F_41E5_2D49580C411C); this.mainPlayList.set('selectedIndex', 12)",
                 "mapColor": "image"
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 6.82,
                 "distance": 50,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_0_HS_0_0.png",
                    "width": 146,
                    "height": 146
                   }
                  ]
                 },
                 "pitch": -39.11,
                 "yaw": -56.99
                }
               ],
               "id": "overlay_456C21D9_48FF_D0DD_41C1_D50F91553A8C",
               "data": {
                "label": "Image"
               },
               "enabledInCardboard": true
              }
             ],
             "thumbnailUrl": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_t.jpg",
             "cube": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_hq.jpeg",
                "width": 11424,
                "height": 1904,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ]
               },
               {
                "class": "ImageResourceLevel",
                "url": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE.jpeg",
                "width": 6144,
                "height": 1024
               }
              ]
             }
            }
           ],
           "mapLocations": [
            {
             "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
             "x": 186.64,
             "angle": 88.4,
             "y": 332.61,
             "class": "PanoramaMapLocation"
            }
           ],
           "thumbnailUrl": "media/panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_t.jpg"
          },
          "backwardYaw": 115.91,
          "yaw": 69.44,
          "distance": 1
         }
        ],
        "pitch": 0,
        "partial": false,
        "vfov": 180,
        "hfov": 360,
        "hfovMax": 120,
        "hfovMin": 60,
        "frames": [
         {
          "class": "CubicPanoramaFrame",
          "overlays": [
           {
            "id": "overlay_30DE25B5_3ADC_665D_41B4_38498AEE4F6A",
            "pitch": 75.9,
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "bleaching": 0.7,
            "yaw": 25.71
           },
           {
            "id": "overlay_30D5ED1D_3ADC_664C_41BC_70CBD422AC9D",
            "pitch": 30.19,
            "class": "LensFlarePanoramaOverlay",
            "bleachingDistance": 0.4,
            "bleaching": 0.7,
            "yaw": -45.9
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A, this.camera_A6B6A4B3_B477_43CA_41D5_D0D63FA70418); this.mainPlayList.set('selectedIndex', 18)",
              "mapColor": "image"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 7.13,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_0_HS_1_0.png",
                 "width": 146,
                 "height": 146
                }
               ]
              },
              "pitch": -35.83,
              "yaw": -145.83
             }
            ],
            "id": "overlay_30C8B9CD_3AD4_E1CD_41C6_A6B467054B39",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           },
           {
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE, this.camera_A6B314C2_B477_434A_41DF_7631660F41D0); this.mainPlayList.set('selectedIndex', 21)",
              "mapColor": "image"
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.96,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_0_HS_0_0.png",
                 "width": 146,
                 "height": 146
                }
               ]
              },
              "pitch": -47.3,
              "yaw": 69.44
             }
            ],
            "id": "overlay_30D84B67_3AD4_22FC_41A9_75C22D2FC5E4",
            "data": {
             "label": "Image"
            },
            "enabledInCardboard": true
           }
          ],
          "thumbnailUrl": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_t.jpg",
          "cube": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_hq.jpeg",
             "width": 11424,
             "height": 1904,
             "tags": [
              "oculusgo",
              "ipadpro"
             ]
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2.jpeg",
             "width": 6144,
             "height": 1024
            }
           ]
          }
         }
        ],
        "mapLocations": [
         {
          "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
          "x": 142.4,
          "angle": -11.23,
          "y": 391.45,
          "class": "PanoramaMapLocation"
         }
        ],
        "thumbnailUrl": "media/panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_t.jpg"
       },
       "backwardYaw": -145.83,
       "yaw": 174.05,
       "distance": 1
      }
     ],
     "pitch": 0,
     "partial": false,
     "vfov": 180,
     "hfov": 360,
     "hfovMax": 120,
     "hfovMin": 60,
     "frames": [
      {
       "class": "CubicPanoramaFrame",
       "overlays": [
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 17)",
           "mapColor": "image"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.99,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_4_0.png",
              "width": 146,
              "height": 146
             }
            ]
           },
           "pitch": -37.36,
           "yaw": -111.12
          }
         ],
         "id": "overlay_43B8B46B_48E0_57FC_41C6_71454EA0725C",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_4F52997B_48E0_51DC_4196_47E37636AA82, this.camera_A7D415D9_B477_4D79_41E4_ADA208C863F8); this.mainPlayList.set('selectedIndex', 19)",
           "mapColor": "image"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.18,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_3_0.png",
              "width": 146,
              "height": 146
             }
            ]
           },
           "pitch": -21.43,
           "yaw": -45.27
          }
         ],
         "id": "overlay_43435B3E_48E0_B157_41C7_48A176AEC2D9",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7, this.camera_A7B795F2_B477_4D4B_41E2_37ACB7F48D0A); this.mainPlayList.set('selectedIndex', 20)",
           "mapColor": "image"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.34,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_2_0.png",
              "width": 146,
              "height": 146
             }
            ]
           },
           "pitch": -18.42,
           "yaw": 19.97
          }
         ],
         "id": "overlay_432523D8_48E7_D0DD_41C5_1519EB5CCC40",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07, this.camera_A7A6F5E5_B477_4D49_41DA_FB94057131E7); this.mainPlayList.set('selectedIndex', 10)",
           "mapColor": "image"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.89,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_1_0.png",
              "width": 146,
              "height": 146
             }
            ]
           },
           "pitch": -38.41,
           "yaw": 77.84
          }
         ],
         "id": "overlay_4303AD0C_48E0_D134_419F_163DFD9577B2",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2, this.camera_A789C5FC_B477_4D3F_41D1_D7C7D5D466F2); this.mainPlayList.set('selectedIndex', 11)",
           "mapColor": "image"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 6.77,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_0_0.png",
              "width": 146,
              "height": 146
             }
            ]
           },
           "pitch": -39.62,
           "yaw": 174.05
          }
         ],
         "id": "overlay_44E6C298_48E1_D35B_41D2_0A0F64FCF8A6",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.showPopupPanoramaOverlay(this.popup_58E69C27_48E0_7775_41AC_C2B7A4BAD165, {'rollOverIconColor':'#666666','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'paddingTop':5,'pressedIconWidth':60,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconWidth':60,'backgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'pressedIconLineWidth':5,'rollOverIconHeight':60,'iconWidth':60,'borderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconHeight':60,'rollOverBackgroundOpacity':0.3,'iconLineWidth':5,'iconHeight':60,'rollOverBorderSize':0,'paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1]}, this.ImageResource_58E53158_48E1_F1DC_41D0_5EE0346D0DCA, null, null, null, null, false)",
           "mapColor": "image"
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 8.72,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_0_HS_5_0.png",
              "width": 146,
              "height": 146
             }
            ]
           },
           "pitch": -7.31,
           "yaw": -14.93
          }
         ],
         "id": "overlay_47B3C8D4_48E0_FF2B_41BA_B895944EB009",
         "data": {
          "label": "Image"
         },
         "enabledInCardboard": true
        },
        {
         "showEasing": "cubic_in",
         "showDuration": 500,
         "popupMaxWidth": "95%",
         "yaw": -14.93,
         "rotationZ": 0,
         "hideDuration": 500,
         "class": "PopupPanoramaOverlay",
         "id": "popup_58E69C27_48E0_7775_41AC_C2B7A4BAD165",
         "hfov": 8.72,
         "rotationX": 0,
         "rotationY": 0,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "url": "media/popup_58E69C27_48E0_7775_41AC_C2B7A4BAD165_0_1.jpg",
            "width": 1024,
            "height": 1024
           }
          ]
         },
         "pitch": -7.31,
         "popupDistance": 100,
         "hideEasing": "cubic_out",
         "popupMaxHeight": "95%"
        }
       ],
       "thumbnailUrl": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_t.jpg",
       "cube": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_hq.jpeg",
          "width": 11424,
          "height": 1904,
          "tags": [
           "oculusgo",
           "ipadpro"
          ]
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A.jpeg",
          "width": 6144,
          "height": 1024
         }
        ]
       }
      }
     ],
     "mapLocations": [
      {
       "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
       "x": 145.85,
       "angle": -175.04,
       "y": 496.69,
       "class": "PanoramaMapLocation"
      }
     ],
     "thumbnailUrl": "media/panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_t.jpg"
    },
    "backwardYaw": -45.27,
    "yaw": 9.41,
    "distance": 1
   }
  ],
  "pitch": 0,
  "partial": false,
  "vfov": 180,
  "hfov": 360,
  "hfovMax": 120,
  "hfovMin": 60,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A, this.camera_A7C085C8_B477_4D47_41CA_B027E9BA898C); this.mainPlayList.set('selectedIndex', 18)",
        "mapColor": "image"
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.89,
        "distance": 50,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_0_HS_0_0.png",
           "width": 146,
           "height": 146
          }
         ]
        },
        "pitch": -26.18,
        "yaw": 9.41
       }
      ],
      "id": "overlay_431D423B_48E0_535D_41A4_B8A2488F2153",
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true
     }
    ],
    "thumbnailUrl": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_t.jpg",
    "cube": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_hq.jpeg",
       "width": 11424,
       "height": 1904,
       "tags": [
        "oculusgo",
        "ipadpro"
       ]
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82.jpeg",
       "width": 6144,
       "height": 1024
      }
     ]
    }
   }
  ],
  "mapLocations": [
   {
    "map": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
    "x": 257.87,
    "angle": 299.96,
    "y": 606.5,
    "class": "PanoramaMapLocation"
   }
  ],
  "thumbnailUrl": "media/panorama_4F52997B_48E0_51DC_4196_47E37636AA82_t.jpg"
 },
 {
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "viewerArea": {
   "paddingBottom": 0,
   "toolTipFontSize": 12,
   "toolTipBackgroundColor": "#F6F6F6",
   "id": "MapViewer",
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarHeadShadow": true,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipBorderRadius": 3,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "borderSize": 0,
   "progressBackgroundOpacity": 1,
   "toolTipShadowOpacity": 1,
   "toolTipTextShadowColor": "#000000",
   "playbackBarOpacity": 1,
   "width": "100%",
   "toolTipShadowBlurRadius": 3,
   "borderRadius": 0,
   "toolTipOpacity": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "minHeight": 1,
   "progressBarOpacity": 1,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarBorderColor": "#FFFFFF",
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarProgressOpacity": 1,
   "toolTipFontStyle": "normal",
   "toolTipShadowColor": "#333333",
   "paddingRight": 0,
   "progressLeft": 0,
   "minWidth": 1,
   "playbackBarHeadBorderSize": 0,
   "playbackBarBorderSize": 0,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarBackgroundOpacity": 1,
   "progressBorderSize": 0,
   "toolTipFontFamily": "Arial",
   "playbackBarHeadWidth": 6,
   "playbackBarHeight": 10,
   "height": "100%",
   "toolTipTextShadowOpacity": 0,
   "transitionDuration": 500,
   "propagateClick": false,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarLeft": 0,
   "progressBackgroundColorRatios": [
    0
   ],
   "progressBorderRadius": 0,
   "toolTipPaddingBottom": 4,
   "playbackBarRight": 0,
   "playbackBarHeadHeight": 15,
   "class": "ViewerArea",
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "progressBarBorderSize": 0,
   "transitionMode": "blending",
   "displayTooltipInTouchScreens": true,
   "toolTipFontColor": "#606060",
   "toolTipPaddingLeft": 6,
   "paddingLeft": 0,
   "playbackBarProgressBorderRadius": 0,
   "shadow": false,
   "playbackBarProgressBorderSize": 0,
   "toolTipPaddingRight": 6,
   "toolTipDisplayTime": 600,
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadShadowColor": "#000000",
   "progressBarBorderRadius": 0,
   "toolTipFontWeight": "normal",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadOpacity": 1,
   "toolTipPaddingTop": 4,
   "paddingTop": 0,
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressRight": 0,
   "playbackBarHeadBorderRadius": 0,
   "toolTipBorderSize": 1,
   "playbackBarBorderRadius": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipBorderColor": "#767676",
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipShadowSpread": 0,
   "playbackBarProgressBorderColor": "#000000",
   "progressBarBackgroundColorDirection": "vertical",
   "progressBorderColor": "#000000",
   "progressOpacity": 1,
   "playbackBarBottom": 0,
   "data": {
    "name": "MapViewer"
   },
   "progressBottom": 2,
   "progressHeight": 10,
   "playbackBarHeadBackgroundColorDirection": "vertical"
  },
  "movementMode": "constrained"
 },
 "this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_4F52997B_48E0_51DC_4196_47E37636AA82_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003",
 "this.panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7",
 "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_31E31D06_3B03_14D7_41BC_A7272672761F_0_0.jpg",
    "width": 3551,
    "height": 1998
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_31E31D06_3B03_14D7_41BC_A7272672761F_0_1.jpg",
    "width": 2048,
    "height": 1152
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_31E31D06_3B03_14D7_41BC_A7272672761F_0_2.jpg",
    "width": 1024,
    "height": 576
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_31E31D06_3B03_14D7_41BC_A7272672761F_0_3.jpg",
    "width": 512,
    "height": 288
   }
  ],
  "id": "ImageResource_2A92D8D8_3B07_1D7B_41C8_F30730B9CCB7"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A73DE562_B477_4D4B_41B6_C41270143917",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 165.79,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A029466F_B477_4F59_41C1_A6E1D48C4594",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 147.61,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.popup_31E31D06_3B03_14D7_41BC_A7272672761F",
 "this.popup_A451E1DF_B457_457A_41D4_5288F30208C3",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A06F2616_B477_4ECA_41E4_63804914367B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -126.43,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60",
 {
  "class": "PanoramaCamera",
  "id": "camera_A7464535_B477_42C9_41C2_B4AF16AE07ED",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 82.31,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_A6DA548F_B477_43D9_41E2_AAF7A446A7F9"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A68DC4CC_B477_435E_41D0_3D8FCBC3C989",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -165.67,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49",
 "this.popup_58E69C27_48E0_7775_41AC_C2B7A4BAD165",
 "this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A7A6F5E5_B477_4D49_41DA_FB94057131E7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -68.11,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A6B6A4B3_B477_43CA_41D5_D0D63FA70418",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -5.95,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_A6DAB48F_B477_43D9_41D0_83648AB35D70"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A79DF607_B477_4EC9_4169_2DF409292FC3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.37,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A00E0698_B477_4FC7_41D8_FA73634378D9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -151.61,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1",
 {
  "class": "PanoramaCamera",
  "id": "camera_A7009580_B477_4DC7_41D7_9C405C18C6A0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 138.29,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_A6DB248F_B477_43D9_41E3_203C560548B1"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A7CC85BE_B477_4D3B_4195_F2F5EC477006",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -158.79,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_D3728F7A_DF8C_960C_417C_830810DD2653",
  "duration": 1000,
  "easing": "linear"
 },
 "this.panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC",
 {
  "buttonCardboardView": {
   "toolTipFontSize": 12,
   "class": "IconButton",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipBorderRadius": 3,
   "toolTipTextShadowBlurRadius": 3,
   "backgroundOpacity": 0,
   "toolTipFontColor": "#606060",
   "id": "IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667",
   "transparencyActive": false,
   "paddingLeft": 0,
   "width": 75,
   "borderSize": 0,
   "toolTipPaddingLeft": 6,
   "shadow": false,
   "toolTipPaddingRight": 6,
   "toolTipDisplayTime": 600,
   "toolTipShadowBlurRadius": 3,
   "borderRadius": 0,
   "toolTipShadowOpacity": 1,
   "toolTipTextShadowColor": "#000000",
   "toolTipOpacity": 1,
   "verticalAlign": "middle",
   "minHeight": 1,
   "toolTipFontWeight": "normal",
   "mode": "push",
   "toolTipPaddingTop": 4,
   "minWidth": 1,
   "toolTip": "VR",
   "toolTipShadowColor": "#333333",
   "paddingRight": 0,
   "height": 50,
   "toolTipFontFamily": "Arial",
   "toolTipFontStyle": "normal",
   "toolTipShadowHorizontalLength": 0,
   "toolTipBorderSize": 1,
   "paddingTop": 0,
   "toolTipBorderColor": "#767676",
   "toolTipShadowSpread": 0,
   "toolTipTextShadowOpacity": 0,
   "iconURL": "skin/IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667.png",
   "propagateClick": false,
   "data": {
    "name": "Button_VR"
   },
   "horizontalAlign": "center",
   "toolTipPaddingBottom": 4,
   "cursor": "hand",
   "paddingBottom": 0,
   "toolTipShadowVerticalLength": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true
 },
 "this.popup_372E31A5_3B1D_6FD5_41C4_BB3430709714",
 {
  "class": "PanoramaCamera",
  "id": "camera_A69B04EF_B477_4359_41D8_2FE6DBA814DF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.13,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 19.03,
   "pitch": -4.75
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A7D415D9_B477_4D79_41E4_ADA208C863F8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -170.59,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A733856C_B477_4D5F_41E5_2D49580C411C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -97.93,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A770852A_B477_42DB_41BA_B0EEA882E936",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -31.62,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A057265A_B477_4F7B_41D6_009993DC0967",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 123.01,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_58E69C27_48E0_7775_41AC_C2B7A4BAD165_0_0.jpg",
    "width": 1500,
    "height": 1500
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_58E69C27_48E0_7775_41AC_C2B7A4BAD165_0_1.jpg",
    "width": 1024,
    "height": 1024
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_58E69C27_48E0_7775_41AC_C2B7A4BAD165_0_2.jpg",
    "width": 512,
    "height": 512
   }
  ],
  "id": "ImageResource_58E53158_48E1_F1DC_41D0_5EE0346D0DCA"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_A6DB348F_B477_43D9_41C1_5095797A2CDA"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A072762E_B477_4EDB_41DB_79D962D84FFD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 25.69,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3CBB93C8_3B03_135B_4190_D012C0697928",
 {
  "class": "PanoramaCamera",
  "id": "camera_A70B0576_B477_4D4B_41E6_7238F0BE7EEB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -110.56,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07",
 {
  "class": "PanoramaCamera",
  "id": "camera_A00006B1_B477_4FC9_41D9_B3D3C95F89AC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 12.46,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_BACA8E9B_AE30_7B35_41C7_293947DB728B",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_A6DB748F_B477_43D9_4181_76CFF17E0585"
 },
 "this.map_B86E682C_AE70_6713_41DE_CACB87474A6E",
 "this.popup_30FAB855_3B1D_1D75_41B9_135EDF0BADEF",
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 0, 1)",
    "media": "this.panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE",
    "camera": {
     "class": "PanoramaCamera",
     "id": "panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     },
     "automaticZoomSpeed": 10
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 1, 2)",
    "media": "this.panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459",
    "camera": "this.panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 2, 3)",
    "media": "this.panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45",
    "camera": "this.panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 3, 4)",
    "media": "this.panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA",
    "camera": {
     "class": "PanoramaCamera",
     "id": "panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     },
     "automaticZoomSpeed": 10
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 4, 5)",
    "media": "this.panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC",
    "camera": {
     "class": "PanoramaCamera",
     "id": "panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     },
     "automaticZoomSpeed": 10
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 5, 6)",
    "media": "this.panorama_3CBB93C8_3B03_135B_4190_D012C0697928",
    "camera": {
     "class": "PanoramaCamera",
     "id": "panorama_3CBB93C8_3B03_135B_4190_D012C0697928_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     },
     "automaticZoomSpeed": 10
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist, 6, 0)",
    "media": "this.panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003",
    "camera": {
     "class": "PanoramaCamera",
     "id": "panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_camera",
     "initialPosition": {
      "class": "PanoramaCameraPosition",
      "yaw": 0,
      "pitch": 0
     },
     "automaticZoomSpeed": 10
    },
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A03A7684_B477_4FCE_41D9_26C3CCB2511C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -102.16,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A69364FC_B477_433F_41DB_95C9186ECE86",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -60.61,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_A451E1DF_B457_457A_41D4_5288F30208C3_0_0.jpg",
    "width": 1500,
    "height": 1500
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_A451E1DF_B457_457A_41D4_5288F30208C3_0_1.jpg",
    "width": 1024,
    "height": 1024
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_A451E1DF_B457_457A_41D4_5288F30208C3_0_2.jpg",
    "width": 512,
    "height": 512
   }
  ],
  "id": "ImageResource_A7748ECA_B469_3F5B_41DC_2367176E0EFE"
 },
 "this.panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A7B795F2_B477_4D4B_41E2_37ACB7F48D0A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.02,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A7F7B5B4_B477_4DCF_41E6_6359B2CD5F53",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 140.21,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A060361F_B477_4EF9_41C0_2BA4F69FD74F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -126.76,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A045F639_B477_4F39_4179_AD2535270A51",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 38.03,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A789C5FC_B477_4D3F_41D1_D7C7D5D466F2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 34.17,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A01116CC_B477_4F5E_41E1_3273CD1999DC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.51,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.popup_28BA60CC_3B05_2D5A_416C_5C114F31F134",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_28BA60CC_3B05_2D5A_416C_5C114F31F134_0_0.jpg",
    "width": 1500,
    "height": 1500
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_28BA60CC_3B05_2D5A_416C_5C114F31F134_0_1.jpg",
    "width": 1024,
    "height": 1024
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_28BA60CC_3B05_2D5A_416C_5C114F31F134_0_2.jpg",
    "width": 512,
    "height": 512
   }
  ],
  "id": "ImageResource_2EAB1950_3B05_3F4B_41A6_C23121A41D92"
 },
 "this.panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550",
 {
  "class": "PanoramaCamera",
  "id": "camera_A77BA51C_B477_42FF_41A1_D08E73D9D0D4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 117.58,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_camera",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A716958B_B477_4DD9_41E3_A61F74CA8609",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -153.19,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2",
 "this.panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A6B314C2_B477_434A_41DF_7631660F41D0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -64.09,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A752754D_B477_4D59_41AC_8D352AEBFA78",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -18.54,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3CBB93C8_3B03_135B_4190_D012C0697928_camera",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45",
 {
  "class": "PanoramaCamera",
  "id": "camera_A75C4541_B477_4D46_41C1_2EDE85E65797",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.36,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_camera",
 {
  "class": "PanoramaCamera",
  "id": "panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_372E31A5_3B1D_6FD5_41C4_BB3430709714_0_0.jpg",
    "width": 3551,
    "height": 1998
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_372E31A5_3B1D_6FD5_41C4_BB3430709714_0_1.jpg",
    "width": 2048,
    "height": 1152
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_372E31A5_3B1D_6FD5_41C4_BB3430709714_0_2.jpg",
    "width": 1024,
    "height": 576
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_372E31A5_3B1D_6FD5_41C4_BB3430709714_0_3.jpg",
    "width": 512,
    "height": 288
   }
  ],
  "id": "ImageResource_2A9628DE_3B07_1D77_41CB_1DF42F7BCCDA"
 },
 "this.panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_camera",
 "this.panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_camera",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_30FAB855_3B1D_1D75_41B9_135EDF0BADEF_0_0.jpg",
    "width": 3551,
    "height": 1998
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_30FAB855_3B1D_1D75_41B9_135EDF0BADEF_0_1.jpg",
    "width": 2048,
    "height": 1152
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_30FAB855_3B1D_1D75_41B9_135EDF0BADEF_0_2.jpg",
    "width": 1024,
    "height": 576
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_30FAB855_3B1D_1D75_41B9_135EDF0BADEF_0_3.jpg",
    "width": 512,
    "height": 288
   }
  ],
  "id": "ImageResource_2A9058DC_3B07_1D7B_41C6_531578C00064"
 },
 "this.panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE",
 "this.panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3",
 "this.panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7",
 "this.panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75",
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A76B4508_B477_42C7_41E3_F5C6100C6EFB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.11,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
 {
  "class": "PanoramaCamera",
  "id": "camera_A7283558_B477_4D46_41E5_378EAED11974",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -109.16,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A680B4E4_B477_434F_41D7_9BCDC2F73D80",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -160.03,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "FadeInEffect",
  "id": "effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42",
  "duration": 1000,
  "easing": "linear"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A7641512_B477_42CB_41D3_6E4F34BC9894",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -147.26,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A7C085C8_B477_4D47_41CA_B027E9BA898C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 134.73,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A7E265A8_B477_4DC7_4181_A9C7360CCCBC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_B8CA0598_AE70_6932_41E3_495D3E2D778C",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ],
  "id": "playList_A6DA448F_B477_43D9_41C8_3B9A90CF243B"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A687F4D6_B477_434A_41D5_F6702FE25C35",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -161.87,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D97494_B477_43CF_41C3_DF2FE186DFA9, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE",
    "camera": "this.panorama_3CBB8ED8_3B03_157B_41C9_2D47D4346FAE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D97494_B477_43CF_41C3_DF2FE186DFA9"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D8C494_B477_43CF_41E3_1A94AE2CE142, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459",
    "camera": "this.panorama_33AA70F7_3AD5_DFDC_41B1_9ABEFDF31459_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D8C494_B477_43CF_41E3_1A94AE2CE142"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D89494_B477_43CF_41D9_26C60C7A5BD3, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45",
    "camera": "this.panorama_3CBB980F_3B03_3CD5_41A2_53DF478A8E45_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D89494_B477_43CF_41D9_26C60C7A5BD3"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D86494_B477_43CF_41E6_2A610ACA2A11, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA",
    "camera": "this.panorama_33C1F00D_3B02_ECD5_41BC_88FB564088EA_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D86494_B477_43CF_41E6_2A610ACA2A11"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D83494_B477_43CF_41D4_10476DD3081E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC",
    "camera": "this.panorama_3CBCEC15_3B03_14F5_41AE_2EE96855B6CC_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D83494_B477_43CF_41D4_10476DD3081E"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D78494_B477_43CF_41E4_7CF21A898593, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_3CBB93C8_3B03_135B_4190_D012C0697928",
    "camera": "this.panorama_3CBB93C8_3B03_135B_4190_D012C0697928_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D78494_B477_43CF_41E4_7CF21A898593"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D75494_B477_43CF_41CA_C206421150D1, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003",
    "camera": "this.panorama_3CBB5176_3B03_EF37_41BD_1023A2F42003_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D75494_B477_43CF_41CA_C206421150D1"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D71494_B477_43CF_41D8_3B034BFB4D31, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D",
    "camera": "this.panorama_3CBBAA6F_3B03_7D55_41C5_BD52AF92123D_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D71494_B477_43CF_41D8_3B034BFB4D31"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D6E494_B477_43CF_41D9_AF835A2858E0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60",
    "camera": "this.panorama_3CBB9679_3B03_153D_41B8_F88D1B2F3D60_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D6E494_B477_43CF_41D9_AF835A2858E0"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D6B494_B477_43CF_41C3_586B535AE101, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1",
    "camera": "this.panorama_3D79937B_3ACD_5CEC_4191_DFF2EF7F1CC1_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D6B494_B477_43CF_41C3_586B535AE101"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D60494_B477_43CF_41DC_D94899B81C83, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07",
    "camera": "this.panorama_3D78501A_3ACD_DC2C_41BB_EEE8BD075C07_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D60494_B477_43CF_41DC_D94899B81C83"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D5D494_B477_43CF_41E4_05615865E6A7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2",
    "camera": "this.panorama_3D786C89_3ACD_E42C_41AE_46B177C257B2_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D5D494_B477_43CF_41E4_05615865E6A7"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D5A494_B477_43CF_41D3_4FE42685C121, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277",
    "camera": "this.panorama_3D7845FC_3ACD_27E4_41AA_25C45611A277_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D5A494_B477_43CF_41D3_4FE42685C121"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D57494_B477_43CF_41C3_915B5F9327A1, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3",
    "camera": "this.panorama_40B1DDD9_48E0_B0DD_419E_01909BBAFFA3_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D57494_B477_43CF_41C3_915B5F9327A1"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D4D494_B477_43CF_41DD_CBA1ECC7F5E8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6",
    "camera": "this.panorama_4F51EB2F_48E0_D175_41C3_AA4FD80B7BA6_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D4D494_B477_43CF_41DD_CBA1ECC7F5E8"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D4A494_B477_43CF_419F_E374C02C14B2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550",
    "camera": "this.panorama_4F524802_48E0_FF2C_41BF_6A82C5CC4550_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D4A494_B477_43CF_419F_E374C02C14B2"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D47494_B477_43CF_4195_129DEDA08FC4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75",
    "camera": "this.panorama_4F5254D5_48E0_D0D4_41C8_310D46260D75_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D47494_B477_43CF_4195_129DEDA08FC4"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D3C494_B477_43CF_41E2_12A99DFF0B03, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "media": "this.panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49",
    "camera": "this.panorama_4F526199_48E0_B15C_41C3_9F3BDAD9DB49_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D3C494_B477_43CF_41E2_12A99DFF0B03"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D39494_B477_43CF_41B4_A47FF15DCA43, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "media": "this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A",
    "camera": "this.panorama_4F524D70_48E0_B1EC_41C8_E746EBB4C49A_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D39494_B477_43CF_41B4_A47FF15DCA43"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D4F494_B477_43CF_41B7_28F45A78FCD8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "media": "this.panorama_4F52997B_48E0_51DC_4196_47E37636AA82",
    "camera": "this.panorama_4F52997B_48E0_51DC_4196_47E37636AA82_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D4F494_B477_43CF_41B7_28F45A78FCD8"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D44494_B477_43CF_41E0_CD6402B18A6B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "media": "this.panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7",
    "camera": "this.panorama_4F52A5FC_48E0_70DB_41CC_39161F8448D7_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D44494_B477_43CF_41E0_CD6402B18A6B"
   },
   {
    "begin": "this.setMapLocation(this.PanoramaPlayListItem_A6D4049A_B477_43FA_41B3_BEFDC510D7FF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "media": "this.panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE",
    "camera": "this.panorama_40BEE302_48E1_B12F_41C2_0DF2526381AE_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "id": "PanoramaPlayListItem_A6D4049A_B477_43FA_41B3_BEFDC510D7FF"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
    "media": "this.panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7",
    "end": "this.trigger('tourEnded')",
    "camera": "this.panorama_BAEE3A80_B45B_47C6_41E2_9CE99261EAA7_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "id": "mainPlayList"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
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
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "camera_A7EBF598_B477_4DC7_41CD_1C9DC469EA8A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 166.52,
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "toolTipBackgroundColor": "#F6F6F6",
  "id": "MainViewer",
  "left": 0,
  "playbackBarHeadShadow": true,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipBorderRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "borderSize": 0,
  "progressBackgroundOpacity": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipTextShadowColor": "#000000",
  "playbackBarOpacity": 1,
  "width": "100%",
  "toolTipShadowBlurRadius": 3,
  "borderRadius": 0,
  "toolTipOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "minHeight": 50,
  "progressBarOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressOpacity": 1,
  "toolTipFontStyle": "normal",
  "toolTipShadowColor": "#333333",
  "paddingRight": 0,
  "progressLeft": 0,
  "minWidth": 100,
  "playbackBarHeadBorderSize": 0,
  "playbackBarBorderSize": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBackgroundOpacity": 1,
  "progressBorderSize": 0,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadWidth": 6,
  "playbackBarHeight": 10,
  "height": "100%",
  "toolTipTextShadowOpacity": 0,
  "transitionDuration": 500,
  "propagateClick": false,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarLeft": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarRight": 0,
  "playbackBarHeadHeight": 15,
  "class": "ViewerArea",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "displayTooltipInTouchScreens": true,
  "toolTipFontColor": "#606060",
  "toolTipPaddingLeft": 6,
  "paddingLeft": 0,
  "playbackBarProgressBorderRadius": 0,
  "shadow": false,
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingRight": 6,
  "toolTipDisplayTime": 600,
  "progressBarBorderColor": "#000000",
  "top": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBorderRadius": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontWeight": "normal",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingTop": 4,
  "paddingTop": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressRight": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipBorderSize": 1,
  "playbackBarBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipBorderColor": "#767676",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowSpread": 0,
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressOpacity": 1,
  "playbackBarBottom": 5,
  "data": {
   "name": "Main Viewer"
  },
  "progressBottom": 0,
  "progressHeight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical"
 },
 {
  "class": "Container",
  "left": "0%",
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_D19AA380_DE1B_2AF3_41EA_D9B3468B686F",
  "paddingLeft": 0,
  "children": [
   {
    "backgroundColorRatios": [
     0.8
    ],
    "class": "Container",
    "id": "Container_FD43509A_EC70_8CA6_41E8_9E5B7D453FAE",
    "backgroundOpacity": 0.1,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "children": [
     {
      "toolTipFontSize": 12,
      "class": "IconButton",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "id": "IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9",
      "transparencyActive": true,
      "paddingLeft": 0,
      "width": 75,
      "borderSize": 0,
      "toolTipPaddingLeft": 6,
      "shadow": false,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 1,
      "verticalAlign": "middle",
      "minHeight": 1,
      "pressedIconURL": "skin/IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9_pressed.png",
      "toolTipFontWeight": "normal",
      "mode": "toggle",
      "toolTipPaddingTop": 4,
      "minWidth": 1,
      "toolTip": "Info",
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "height": 50,
      "toolTipFontFamily": "Arial",
      "toolTipFontStyle": "normal",
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderSize": 1,
      "paddingTop": 0,
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_E3CD78FD_EC71_BC63_41E6_B57921ED4CF9.png",
      "propagateClick": false,
      "data": {
       "name": "Button Info"
      },
      "horizontalAlign": "center",
      "visible": false,
      "toolTipPaddingBottom": 4,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipShadowVerticalLength": 0
     },
     {
      "toolTipFontSize": 12,
      "class": "IconButton",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "id": "IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0",
      "transparencyActive": true,
      "paddingLeft": 0,
      "width": 75,
      "borderSize": 0,
      "toolTipPaddingLeft": 6,
      "shadow": false,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 1,
      "verticalAlign": "middle",
      "minHeight": 1,
      "pressedIconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0_pressed.png",
      "toolTipFontWeight": "normal",
      "mode": "toggle",
      "toolTipPaddingTop": 4,
      "minWidth": 1,
      "toolTip": "Casa Modelo",
      "click": "this.mainPlayList.set('selectedIndex', 1)",
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "height": 50,
      "toolTipFontFamily": "Arial",
      "toolTipFontStyle": "normal",
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderSize": 1,
      "paddingTop": 0,
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_00B43F13_1091_5EC0_41A2_4AB64DABE3D0.png",
      "propagateClick": false,
      "data": {
       "name": "Button_home"
      },
      "horizontalAlign": "center",
      "toolTipPaddingBottom": 4,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipShadowVerticalLength": 0
     },
     {
      "toolTipFontSize": 12,
      "class": "IconButton",
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipBorderRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "backgroundOpacity": 0,
      "toolTipFontColor": "#606060",
      "id": "IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2",
      "transparencyActive": true,
      "paddingLeft": 0,
      "width": 75,
      "borderSize": 0,
      "toolTipPaddingLeft": 6,
      "shadow": false,
      "toolTipPaddingRight": 6,
      "toolTipDisplayTime": 600,
      "toolTipShadowBlurRadius": 3,
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 1,
      "verticalAlign": "middle",
      "minHeight": 1,
      "pressedIconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2_pressed.png",
      "toolTipFontWeight": "normal",
      "mode": "toggle",
      "toolTipPaddingTop": 4,
      "minWidth": 1,
      "toolTip": "Mapa",
      "click": "if(!this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F.get('visible')){ this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, true, 0, this.effect_D372BF7A_DF8C_960C_41B8_A525EC95EC42, 'showEffect', false) } else { this.setComponentVisibility(this.Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F, false, 0, this.effect_D3728F7A_DF8C_960C_417C_830810DD2653, 'hideEffect', false) }",
      "toolTipShadowColor": "#333333",
      "paddingRight": 0,
      "height": 50,
      "toolTipFontFamily": "Arial",
      "toolTipFontStyle": "normal",
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderSize": 1,
      "paddingTop": 0,
      "toolTipBorderColor": "#767676",
      "toolTipShadowSpread": 0,
      "toolTipTextShadowOpacity": 0,
      "iconURL": "skin/IconButton_D3FCE4DD_DE3D_2E12_41DA_BE4844F3ABC2.png",
      "propagateClick": false,
      "data": {
       "name": "Button_Map"
      },
      "horizontalAlign": "center",
      "toolTipPaddingBottom": 4,
      "cursor": "hand",
      "paddingBottom": 0,
      "toolTipShadowVerticalLength": 0
     },
     "this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667"
    ],
    "borderSize": 0,
    "shadow": false,
    "width": 334,
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "verticalAlign": "middle",
    "scrollBarOpacity": 0.5,
    "minHeight": 77,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "height": 77,
    "minWidth": 334,
    "overflow": "scroll",
    "paddingRight": 0,
    "backgroundColor": [
     "#000000"
    ],
    "paddingTop": 0,
    "layout": "horizontal",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container_btones"
    },
    "horizontalAlign": "center",
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "borderSize": 0,
  "shadow": false,
  "width": "100%",
  "borderRadius": 0,
  "scrollBarOpacity": 0.5,
  "minHeight": 1,
  "scrollBarWidth": 10,
  "bottom": "0%",
  "verticalAlign": "middle",
  "minWidth": 1,
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "18.033%",
  "paddingTop": 0,
  "scrollBarMargin": 2,
  "layout": "horizontal",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Container_Menu"
  },
  "horizontalAlign": "center",
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_D0D00644_DE34_EA73_41EA_A6644BDE0A2F",
  "right": "0%",
  "paddingLeft": 0,
  "children": [
   {
    "class": "Container",
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "id": "Container_E4B513A0_DD39_E2DD_41CF_5DA35082F5A5",
    "paddingLeft": 0,
    "children": [
     "this.MapViewer"
    ],
    "borderSize": 0,
    "shadow": false,
    "scrollBarMargin": 2,
    "width": "100%",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "minHeight": 1,
    "verticalAlign": "middle",
    "overflow": "scroll",
    "paddingRight": 0,
    "height": "100%",
    "minWidth": 1,
    "paddingTop": 0,
    "layout": "vertical",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Container_Map"
    },
    "horizontalAlign": "center",
    "gap": 10,
    "paddingBottom": 0
   }
  ],
  "borderSize": 0,
  "shadow": false,
  "width": "29.316%",
  "borderRadius": 0,
  "creationPolicy": "inAdvance",
  "scrollBarOpacity": 0.5,
  "top": "2.05%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "top",
  "minWidth": 1,
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "77.049%",
  "paddingTop": 0,
  "layout": "vertical",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Main_ContainerMap"
  },
  "horizontalAlign": "center",
  "gap": 10,
  "visible": false,
  "paddingBottom": 0
 },
 {
  "class": "Container",
  "left": "0%",
  "backgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "id": "Container_E8D2EF58_E3A4_8712_41E1_602D88C88D4F",
  "paddingLeft": 0,
  "children": [
   {
    "fontFamily": "Arial",
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "DropDown",
    "id": "DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F",
    "backgroundOpacity": 0.72,
    "popUpShadowOpacity": 0,
    "paddingLeft": 5,
    "borderSize": 0,
    "shadow": false,
    "popUpBackgroundColor": "#FFFFFF",
    "width": "20.256%",
    "selectedPopUpBackgroundColor": "#0066FF",
    "borderRadius": 4,
    "popUpBorderRadius": 0,
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "backgroundColorDirection": "vertical",
    "fontColor": "#333333",
    "popUpShadowColor": "#000000",
    "minHeight": 20,
    "arrowBeforeLabel": false,
    "selectedPopUpFontColor": "#FFFFFF",
    "minWidth": 200,
    "popUpShadowSpread": 1,
    "paddingRight": 5,
    "backgroundColor": [
     "#00CCFF",
     "#0099FF"
    ],
    "paddingTop": 0,
    "fontSize": 14,
    "fontStyle": "normal",
    "playList": "this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist",
    "height": "27.397%",
    "popUpShadow": false,
    "popUpGap": 0,
    "popUpShadowBlurRadius": 6,
    "propagateClick": false,
    "data": {
     "name": "Locations list"
    },
    "textDecoration": "none",
    "popUpFontColor": "#000000",
    "popUpBackgroundOpacity": 0.72,
    "fontWeight": "normal",
    "arrowColor": "#0066FF",
    "gap": 0,
    "prompt": "Ubicaciones",
    "paddingBottom": 0
   }
  ],
  "borderSize": 0,
  "shadow": false,
  "width": "100%",
  "borderRadius": 0,
  "scrollBarOpacity": 0.5,
  "top": "0.96%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "top",
  "minWidth": 1,
  "overflow": "scroll",
  "paddingRight": 0,
  "height": "10%",
  "paddingTop": 0,
  "layout": "horizontal",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "ContainerDropDown"
  },
  "horizontalAlign": "left",
  "gap": 10,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "class": "Container",
  "id": "Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E",
  "left": "0%",
  "backgroundOpacity": 0.3,
  "scrollBarVisible": "rollOver",
  "paddingLeft": 0,
  "children": [
   {
    "backgroundColorRatios": [
     0,
     1
    ],
    "class": "Container",
    "id": "Container_92A2800C_9CD5_4A4C_41B5_0E7512A47A41",
    "left": "0%",
    "backgroundOpacity": 1,
    "scrollBarVisible": "rollOver",
    "paddingLeft": 0,
    "children": [
     {
      "maxWidth": 394,
      "class": "Image",
      "id": "Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418",
      "maxHeight": 396,
      "backgroundOpacity": 0,
      "right": "0%",
      "paddingLeft": 0,
      "borderSize": 0,
      "shadow": false,
      "url": "skin/Image_8DEE620A_9CF3_CE34_41DA_A961CBC52418.png",
      "width": "13.658%",
      "borderRadius": 0,
      "top": "0.15%",
      "minHeight": 40,
      "verticalAlign": "middle",
      "minWidth": 40,
      "click": "this.setComponentVisibility(this.Container_9123E1E5_9CD3_CDFC_41C8_4B4A19C81E6E, false, 0, null, null, false)",
      "paddingRight": 0,
      "height": "20.69%",
      "paddingTop": 0,
      "propagateClick": false,
      "data": {
       "name": "Button CloseFrame"
      },
      "horizontalAlign": "center",
      "visible": false,
      "scaleMode": "fit_inside",
      "paddingBottom": 0
     },
     {
      "class": "HTMLText",
      "backgroundOpacity": 0,
      "scrollBarVisible": "rollOver",
      "id": "HTMLText_33B241A5_3F38_83A8_41CB_51E88E1B489E",
      "right": "33.33%",
      "paddingLeft": 20,
      "borderSize": 0,
      "shadow": false,
      "width": "35.454%",
      "borderRadius": 0,
      "scrollBarOpacity": 0.5,
      "minHeight": 1,
      "scrollBarWidth": 10,
      "bottom": "33.33%",
      "minWidth": 1,
      "paddingRight": 20,
      "height": "29.693%",
      "paddingTop": 20,
      "scrollBarMargin": 2,
      "scrollBarColor": "#000000",
      "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B>Perspectivas con fines ilustrativos, pudiendo las mismas no reflejar de forma precisa el resultado real de la obra. Cons\u00faltenos por escala y dimensiones precisas de los espacios.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
      "propagateClick": false,
      "data": {
       "name": "HTMLText53815"
      },
      "visible": false,
      "paddingBottom": 20
     }
    ],
    "borderSize": 0,
    "shadow": false,
    "width": "100%",
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "scrollBarOpacity": 0.5,
    "top": "0%",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "verticalAlign": "top",
    "minWidth": 1,
    "overflow": "scroll",
    "paddingRight": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingTop": 0,
    "layout": "absolute",
    "height": "100%",
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "propagateClick": false,
    "data": {
     "name": "Web sub container "
    },
    "horizontalAlign": "left",
    "gap": 10,
    "visible": false,
    "paddingBottom": 0
   }
  ],
  "borderSize": 0,
  "shadow": false,
  "width": "100%",
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "verticalAlign": "top",
  "minWidth": 1,
  "overflow": "scroll",
  "creationPolicy": "inAdvance",
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "layout": "absolute",
  "height": "100%",
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "propagateClick": false,
  "data": {
   "name": "Main Container Web link"
  },
  "horizontalAlign": "left",
  "gap": 10,
  "visible": false,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "class": "UIComponent",
  "id": "veilPopupPanorama",
  "left": 0,
  "backgroundOpacity": 0.55,
  "right": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "top": 0,
  "minHeight": 0,
  "bottom": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "minWidth": 0,
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "propagateClick": false,
  "data": {
   "name": "UIComponent13037"
  },
  "visible": false,
  "paddingBottom": 0
 },
 {
  "backgroundColorRatios": [],
  "class": "ZoomImage",
  "id": "zoomImagePopupPanorama",
  "left": 0,
  "backgroundOpacity": 1,
  "right": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "top": 0,
  "minHeight": 0,
  "bottom": 0,
  "minWidth": 0,
  "paddingRight": 0,
  "backgroundColor": [],
  "paddingTop": 0,
  "propagateClick": false,
  "data": {
   "name": "ZoomImage13038"
  },
  "visible": false,
  "scaleMode": "custom",
  "paddingBottom": 0
 },
 {
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "class": "CloseButton",
  "id": "closeButtonPopupPanorama",
  "backgroundOpacity": 0.3,
  "pressedIconColor": "#888888",
  "right": 10,
  "paddingLeft": 5,
  "borderSize": 0,
  "shadow": false,
  "gap": 5,
  "shadowSpread": 1,
  "borderRadius": 0,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "middle",
  "fontColor": "#FFFFFF",
  "top": 10,
  "minHeight": 0,
  "shadowColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "rollOverIconColor": "#666666",
  "iconBeforeLabel": true,
  "mode": "push",
  "minWidth": 0,
  "borderColor": "#000000",
  "paddingRight": 5,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingTop": 5,
  "label": "",
  "layout": "horizontal",
  "iconColor": "#000000",
  "fontSize": "1.29vh",
  "fontStyle": "normal",
  "iconLineWidth": 5,
  "propagateClick": false,
  "data": {
   "name": "CloseButton13039"
  },
  "iconWidth": 20,
  "horizontalAlign": "center",
  "textDecoration": "none",
  "visible": false,
  "fontWeight": "normal",
  "iconHeight": 20,
  "cursor": "hand",
  "paddingBottom": 5
 }
], 
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E5BE5083_EC11_8CA7_41C3_7D9ADAB99667], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_E82BD931_E3AD_8B15_41E5_2CA6A4FB981F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_A6DB748F_B477_43D9_4181_76CFF17E0585.set('selectedIndex', 0)",
 "class": "Player",
 "id": "rootPlayer",
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "borderSize": 0,
 "shadow": false,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "overflow": "visible",
 "paddingRight": 0,
 "paddingTop": 0,
 "layout": "absolute",
 "height": "100%",
 "scripts": {
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "getKey": function(key){  return window[key]; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "existsKey": function(key){  return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } }
 },
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "propagateClick": false,
 "data": {
  "name": "Player7285"
 },
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "desktopMipmappingEnabled": false,
 "paddingBottom": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
