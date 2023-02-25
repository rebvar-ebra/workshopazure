
import React, { Component }  from 'react';
export const dataApi=[{
    "id": 1,
    "name": "Denice",
    "description": "Late congenital syphilitic polyneuropathy",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAMCSURBVDjLTdBNaFxVGMbx/zn33plOZjIT8zmGOnFM1VoNJYFWYi2CtVSMdKUbK+LKhSAGXYhd2m6FQkEXLbiwETcWiq3WpiiSBLRqTa122pEmMZPmw8lkMt93zrnnXhdJbB54l++Ph0cEQQDAm1/l9gOnHmnbMVzXPnXto32fhueXgAqwChigCBSAz4ErNpvxPe/pvcnY8PvPdbE9NeUn6spPFF2zU2moNA1zq1W+vVs7DIxuB3riIQFAbt3gCIEtwLIh7EhSYYklJY4Fgzsj9Cai7WeuLX4stwCjdTxqg+dDRQlKGtabUHI3rtCAf6sGgA/H5hlOR3mq0+mytwHtrSFJrQk11yClwAYsC6QFFgJLgA8IU+anmSLX50uL9wGlehIRi1LDo94MkDLAkiCNwJJgEbCj/AN/j3/G250D1CZ/5BWdHPsf8JTq64k7lNwADyAAywhksLF9vPI17WvXiAy8TiI9yPrs4zSunH1jW4NmXzIRJrNiEBIkG88SaKlcJuX8SezRA6zdzRASitZ4klhHKmEDvHjicsS2ZCjsSJQxSAIgIADCtSnS9i8k0kdoLn1JqEXwz/RttKsKbqP6jATwmqorLEBujkQAAohUJtglrpLofwl38QzCKeLEWtHVRV+Xl17Y9875rNys32LjY0uwpAAhMfOXSJmrJHYdxb33KdLRqPLDrEzc4PTC4dtD741PA8iDo2OdnlIn9u9OsVwOmFsxlLKXSOqf6X5yBLV8FisU0Cz3kZ/8ndzAR2Sq3TNb29lGqUPAyG+ZWYoNG2fhG14dyOP5vSzdPM0D3SHctYfITd1CHvqEhZyLUSq/BUij9dDLB56IfHF8hJOvPcYeLrLn2bcI5ybJXphi+rs17nx/g4n2D4i09VKp1jFaF+430Hp2ebXEufEMbbEI2Zk86q+LpPcepJQvcO/mDM8fv8CDoX7CNuTXKhitF7YAMXjsVCcwCvQBHf25k0eG0l1i3+60mFPR4HxuSLhOB/FohLZ4C3/cyWWBY9fPvfsrwH+7HFmMUqkOrwAAAABJRU5ErkJggg==",
    "reviews": [{
        "id": 1,
        "authorName": "Wesley",
        "comment": "Penetrating wound without foreign body of unsp eyeball",
        "reviewPointsFrom0to10": 8
    }, {
        "id": 2,
        "authorName": "Jeniffer",
        "comment": "Oth inflammatory spondylopathies, cervical region",
        "reviewPointsFrom0to10": 5
    }]
},
{
    "id": 2,
    "name": "Kendrick",
    "description": "Unstable burst fx T5-T6 vertebra, subs for fx w routn heal",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKtSURBVDjLlZJvaNV1FMY/vz/3zrt77xjs7s7mVZNS3HAuFIWwXpRWexEYDANFKQpfyagE8Q8iUfinKHwTFL0wzBcWMWjpCxWJJQ6hHGOSNtzcTYmma7ipu97tfs85X1+s1DcmHnjgcB54zsNzTnDkzPge79ms3gpmhhqIGaqGmkfUHoKi4lGz3/ZuXLgSIDbvO9pXZnM8QX34/dDS//pYzXIAXcOHERNEBWeCU4czoTFTIFedpy6V48TVn9jSsgvntOohAQ/AhuZ3H7v5+JVOvuz7BCdreSCgBsDRs6P3hw21SZLZv+gdP0Hx1gAiijhlTrpASe5wu/pb4DMAQvlXAGD9C3miwDN/3ii/jneRiVKsbmxjzdw2Xl3QxuJcE00Nzcyum2btV68NAcRODfOeOILOc6NEUcjp4R6qqaa+Kk//jT6Gx67gKo5CzVxEhMGi0tVx8lmAUNXwQBwFtD+fJw7h77uX6L/Rx7HLP1KZCjn0xnccebOTcmkaK0ckJzfx8oFVqfsOvEEcwvHef4giePvpj8jMiggCuHmnwtDIXUSNFDk+eGUnW4b6+HlHTxkgdGJ470lE8PryembFAQvyKeprkuSySeqySX648DmLCxn2t39MGISkq+IHVxCbCTEKA073jwEwOFIim4JEmGDfqe1MTE5weaQEwKddHfx+/Tyt74sXJ1dDEZnJIIQ1rTniCBY+lWZ2bZqD3buZsttECeWdr19i0xcvUmKCDe3rWLFsGa4iJ2cy8J4l8zKM3CzzTEOK4vVJdh17i9psDa2LWlBTlixqRr1iXhksDvPLmZ5eFT0abD106aw4fa6ilnaiOFFUDKdGIvsNUWoCEeXiwB9IRRCnhDSOlaf+XFc8fK0b7/3/Yvm2lu6l7zVdeBQfPu7/K9NutavIwKP4e594fYOHzxflAAAAAElFTkSuQmCC",
    "reviews": [{
        "id": 1,
        "authorName": "Editha",
        "comment": "Jump/div into oth water strk bottom cause oth injury, sqla",
        "reviewPointsFrom0to10": 0
    }, {
        "id": 2,
        "authorName": "Zacharias",
        "comment": "Occup of 3-whl mv inj in clsn w nonmtr vehicle in traf, init",
        "reviewPointsFrom0to10": 6
    }, {
        "id": 3,
        "authorName": "Jeromy",
        "comment": "Person outsd car inj in clsn w nonmtr vehicle in traf, init",
        "reviewPointsFrom0to10": 3
    }, {
        "id": 4,
        "authorName": "Chastity",
        "comment": "Prsn brd/alit from bus injured in collision w 2/3-whl mv",
        "reviewPointsFrom0to10": 10
    }]
},
{
    "id": 3,
    "name": "Conway",
    "description": "Athscl native arteries of extrm w rest pain, unsp extremity",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJcSURBVDjLpVPPaxNREP7ebna3bX62aZMmYnVLxZRSior1IFVIC1at3uo1ePRQ8CB4EDyr/4AHFS8SCl4FC9IQf1WRhmij2Ei1Dabp0rSxRsMmm23WnZWEWBQPHRjmvcd83zfz3htmGAZ2Yxx2abb6Ip1Oz25vb4dNh67rqFarDdc0reGVSoViLBKJjBKOUQsm+KQoivGuri4raac1tykIAuLxODKZzOjU1FTMqsBUvO7xeKAoCiRJaoCagbTOZrNwuVyQZZlEr5nHMZZKpSx1r9eLYrH4R7nUCgEZY+B5Hm3VBfDLT8A7BlHaeIq1rdpNlkwmZwOBQJgSCVRXbY7k3I8YWgpLaO0cgVs+hK3lV0jN3NdsBCqVSsjn89YFUXKtVgNdJkXaO2sJhHo0OA4cR+HzR4hMg9PVDXfnHhsRhEmJiAhktmSVzHG/X9jXuoKjwy3w9I6jsjYNsY0h83YRVZ1D9J2ZRqrUKzkR1J32HcISxoYFePrOopy7AyZ8g+BwgldzqOyfwGbJgI0I6iAqORQKWRGFNzjSL8Hddx7l1dvgBB1aUYbybB6L9tPwt/qtP2IR0AsQQf3C1NxzuPwqfAPnoCl3wYsGyt/3Yf1FAsWBy/BL7QgGg1aVLBqNPjb7H6//MmwkET7WDZ354O14iXafaIL34ms8gQefgthUuUbFptgM2zlMD2+NGZOX7iE9fQW5lTlIPUPQ1/O5dpE/NXj19fv/DlN6SdG1D48gD43Abj+I1fnUz7KqnfkbuDELzXbhRId6uNdvG+6XYQiVOXU9f3HixsKXf03jL2qvd7dZXvRWAAAAAElFTkSuQmCC",
    "reviews": [{
        "id": 1,
        "authorName": "Jolee",
        "comment": "Poisoning by oth estrogens and progstrn, accidental, init",
        "reviewPointsFrom0to10": 7
    }, {
        "id": 2,
        "authorName": "April",
        "comment": "Contact with combine harvester, sequela",
        "reviewPointsFrom0to10": 8
    }]
},
{
    "id": 4,
    "name": "Terrijo",
    "description": "Eczematous dermatitis of left eye, unspecified eyelid",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAF1SURBVBgZpcGxalRBFMfh35yZGwK72mrrO2yxoIXFvIBNGksrsbISFGuxMRDIGwhiCtttrq9hCgWxSLtVsor3nvN3RwxcggTCfl+SxC7So+cfnz14uHi73mgmAREoAg9HIUKB3AkJueMR3N4bLk5Pz158endwXBb3F0fd/szu7HMTs4uNHwHHZTPINutzburnIKN5+f6r/ufVh2+6zpM3n7VFkYJmtVrRdR21VqbW57/wUfgoXMFvF/fu3sLDaQoSTdd11Fq5quRCSk7KIodRRtHE6DTFw7nU9z1NrZVL2cBSpiTwJNyCJjxoTCGa5XJJU2tlKicwA8uQS2IvZ5oIp7EIZ6rve6ZSMYpBNigZLPNXRNCUcRiYqrUyZWyZkQGXsCSacRhpTB5M9X3PlKWEpQQpkc3IKdEogqZEBM18PqfWylU5JZrMPznThERTzr7/OHl6OByEO+GBuxMR+DDw+PUXQkLhyEUoUAQRNCdsJUnswtjRH6iT+f+z/UsKAAAAAElFTkSuQmCC",
    "reviews": [{
        "id": 1,
        "authorName": "Garrik",
        "comment": "Partial physeal arrest, left distal tibia",
        "reviewPointsFrom0to10": 3
    }, {
        "id": 2,
        "authorName": "Hughie",
        "comment": "Open bite, right knee",
        "reviewPointsFrom0to10": 2
    }]
},
{
    "id": 5,
    "name": "Quincy",
    "description": "Breakdown (mechanical) of other urinary catheter",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANKSURBVDjLXZN7TFNnGMaPg2aJWUyMMfMf/9A/hkbjksVtRmMy75ekJCZL1DldzNwmc8TgEHSitEYFEaeiNsK4OHB1FihyE0Gw9VALFbGUBkYpFKSIrW3p5XCwHNo+e8+Ja8y+5Hfy5vne5/nO9+YcBgAz1ch8QCgIC/GM+FDU34e0j9/tm4ik/3TGr2VkRN5U175xwatDsOtbt6lObkhvFfSE7x36zrpdbMic4p3uz/JRv4lYLAW47zKngqb9r2ZcjfB0HPQ/16zlcg1e3Ohyo6TntYRY/8460KP5jA9YlTzX8+sb8nUTMsZ5mzkdsmT5XO0H/cY7a2cLOsZwzzIBNTsKlbYPBZV9uN3mgNo8jtInOvxTty067ayMuO4vt5E3iRkuZNYPFM21PS1exefpHLhrGoNWN4IhZxDeIAdPcAq2sSAqWoZQ2j6Ce7X5sKjXhPuL5r0gb5I0iPSS+kuZ1VYUGUagodPENRkIYPDVa7ylWoSLAbcahqDS23FGw+LnMuN5aQbiY19ht/54lRW3mmzop5P52Rg4nsfN0jK4KSgUDqO6+THYwQByNL0Qe0VPPODrq6wvTf0CF/+ywD0tYDIcxQxtnFQocUdbi8xsJVqMJlgDAo6pTBB7RU88IDmnyfdjsQmKMjPGOIFConAGQjiXf1kys+ZeeGaB514BqVc7IPaKnnjA9jNV+j1XdFBWdOOJPYAJurQzJOCB/ikcviBcEaC38iYe71+G1o0yaOWLcP67XY54wIbjfyp2Ku7j6B9G5Gps8NDAJgUgFCWotteo0JuxHm8bLyPW/xD838fw7MiqWMumxFQpYF2qajXRt/V0PdIKWVzUDMA84gdH8+B4Aa17l2KazCiQA5nzgQtL4Mn7Cs2bExzxb/2LH/J/Ssmt4DefqMGB/EdIu84i/ZoBaVfapdeOdWvx/vJnLyI9MRYPMBqNG6xWK9p0bGTdkWJ8/osaXx7VSlTuWIipku8BMoUzGEwSLw8noHlLwrhkbmhoWEhwdrsddfX1vk+/yVKu3HNKT/hEzu7eNNp56JPoROYSvDkpw/ChOWiTJ0Yebkn4TQooLy//iBggZogV//+VRQy7F59o3ipzitdpSl4QeZC8IEfU/wVxe9rJJAH4hQAAAABJRU5ErkJggg==",
    "reviews": [{
        "id": 1,
        "authorName": "Dayna",
        "comment": "Accident on other pedestrian conveyance",
        "reviewPointsFrom0to10": 1
    }, {
        "id": 2,
        "authorName": "Marthe",
        "comment": "Blister (nonthermal) of right middle finger, sequela",
        "reviewPointsFrom0to10": 9
    }, {
        "id": 3,
        "authorName": "Adara",
        "comment": "Strain extn musc/fasc/tend l rng fngr at wrs/hnd lv, init",
        "reviewPointsFrom0to10": 7
    }, {
        "id": 4,
        "authorName": "Trixy",
        "comment": "Superficial foreign body of unsp upper arm, subs encntr",
        "reviewPointsFrom0to10": 0
    }]
},
{
    "id": 6,
    "name": "Marigold",
    "description": "Displ transverse fx shaft of l femr, 7thJ",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGrSURBVDjLxZO7ihRBFIa/6u0ZW7GHBUV0UQQTZzd3QdhMQxOfwMRXEANBMNQX0MzAzFAwEzHwARbNFDdwEd31Mj3X7a6uOr9BtzNjYjKBJ6nicP7v3KqcJFaxhBVtZUAK8OHlld2st7Xl3DJPVONP+zEUV4HqL5UDYHr5xvuQAjgl/Qs7TzvOOVAjxjlC+ePSwe6DfbVegLVuT4r14eTr6zvA8xSAoBLzx6pvj4l+DZIezuVkG9fY2H7YRQIMZIBwycmzH1/s3F8AapfIPNF3kQk7+kw9PWBy+IZOdg5Ug3mkAATy/t0usovzGeCUWTjCz0B+Sj0ekfdvkZ3abBv+U4GaCtJ1iEm6ANQJ6fEzrG/engcKw/wXQvEKxSEKQxRGKE7Izt+DSiwBJMUSm71rguMYhQKrBygOIRStf4TiFFRBvbRGKiQLWP29yRSHKBTtfdBmHs0BUpgvtgF4yRFR+NUKi0XZcYjCeCG2smkzLAHkbRBmP0/Uk26O5YnUActBp1GsAI+S5nRJJJal5K1aAMrq0d6Tm9uI6zjyf75dAe6tx/SsWeD//o2/Ab6IH3/h25pOAAAAAElFTkSuQmCC",
    "reviews": [{
        "id": 1,
        "authorName": "Hilarius",
        "comment": "Other fall from one level to another, sequela",
        "reviewPointsFrom0to10": 0
    }, {
        "id": 2,
        "authorName": "Tasia",
        "comment": "Progressive vascular leukoencephalopathy",
        "reviewPointsFrom0to10": 2
    }, {
        "id": 3,
        "authorName": "Nathalia",
        "comment": "Car passenger injured in clsn w pick-up nontraf, sequela",
        "reviewPointsFrom0to10": 1
    }, {
        "id": 4,
        "authorName": "Findley",
        "comment": "Portal vein thrombosis",
        "reviewPointsFrom0to10": 9
    }]
},
{
    "id": 7,
    "name": "Rollo",
    "description": "Open bite of right wrist, initial encounter",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIhSURBVDjLpZM9SJVhFMd/Vy8pV40yIRHvBY0QUcHUqAgXo7YapKGm1oJ2scGWcI2mIBojh5YIgoYkl5sNkZGUaH6QkhejED/vfd/nfDS8emloEDxwOHCe8/9xnuc5J+XuHMYqOKQdGpDO55/89w5mgpnjLpgpZjEiiqoAAREhhEAaoKmpqyx0d9xtzxOAu2Gm5WhmuCszM28TAEAUbeHue4dJQSLSPdG+Jx1VV9cRQjEBJGQjkzlGNtvD7u46a2uz5HJnMQtMT7+is/MqlZVp5ubesb6+jFlAJKJCJJTJ2WwPS0sfECmRy/WxuJhne/s3LS0XuPfyGnef93Okug6RgGoghIgKVcFdUA0AbG4WWFjIUyyu09Y2QE1NPYXCNyINNDe0MzJ+m0iKmCkiJdJmRVSFBASqAVXl/uubuAViF2IRmo6fpr3xHFulHR5+fcTQmWFUI9IhRJgJqjEhFOntvUEIEc/mH3O54xbqhppiOKsbK3Q1X2Q7LjI8OcT16j7SItFeBzFTUy/K71GSGHXjx5/vBBPEAkEDm9EW3dl+tsMuT5fypKMowixQVVXzz7cZJSkhKpw8mkNMUTcKG8vU1zbyaSXPl5XPDNZ0kxobu+PuMSLJdLlHiDhvbIpSHBNbTEliTjV0cL71Ch+X3zM5P8FgbScnKjOkDrqNnQ8qdvpyA5mJufGfsXFpddRngYMDWkdSO2qVmaJp669RX9rP/wXZZaE2eCuTIAAAAABJRU5ErkJggg==",
    "reviews": [{
        "id": 1,
        "authorName": "Gauthier",
        "comment": "Oth fx lower end of unsp ulna, init for opn fx type I/2",
        "reviewPointsFrom0to10": 2
    }, {
        "id": 2,
        "authorName": "Chandal",
        "comment": "Nondisp fx of base of unsp MC bone, subs for fx w delay heal",
        "reviewPointsFrom0to10": 10
    }, {
        "id": 3,
        "authorName": "Mara",
        "comment": "Congenital absence of thigh and lower leg with foot present",
        "reviewPointsFrom0to10": 1
    }]
},
{
    "id": 8,
    "name": "Bertram",
    "description": "Glaucoma secondary to eye trauma, unsp eye, moderate stage",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFUSURBVDjLY/j//z8DJZhh1ADiDXBvPvjftWHff6ea3f/tK3b8sS7ekkaSAS51e/8fuv7+//6r7/4vPvDov1nu+rckGeBQufP/nsvv/l989v//o3f//xulr/pPkgFAJ/8/def9/6WHHv+/D7RbN3EpxIDr8ws3XJ6d8//ctNT/JybE/D/UFfx/V5Pn/83V9v/XlJj8X5Kj9X9emiLIyf+P3nj7f/aeh//3X3n9XyN6AcQAkOZn51fD8aOTC//f3T/5/82trf+vrq+BY5CTD1x583/vpdf/d1189V8lbA7EgHhf2/+x3lb/oz3N/0e6mfwPczH4H+Kk+z/IXvN/gK3afz9r5f8+lor/tayD/mtaBf7XsAj4r27u/1/NzA8RBpqamvdSUlL+5+Tk/Aeyv+Xn5/+PiYkBsfcihwNMHbIcTMIGiI+BBIE4ComtjmaADbrcwCdlAI+lwaKCJjy7AAAAAElFTkSuQmCC",
    "reviews": [{
        "id": 1,
        "authorName": "Kenna",
        "comment": "Unspecified dislocation of right ring finger",
        "reviewPointsFrom0to10": 3
    }, {
        "id": 2,
        "authorName": "Bale",
        "comment": "Aftercare following sterilization reversal",
        "reviewPointsFrom0to10": 0
    }, {
        "id": 3,
        "authorName": "Kissiah",
        "comment": "Athletic field as place",
        "reviewPointsFrom0to10": 1
    }, {
        "id": 4,
        "authorName": "Devlen",
        "comment": "Wheelchair (powered) colliding w stationary object, subs",
        "reviewPointsFrom0to10": 1
    }]
},
{
    "id": 9,
    "name": "Vittoria",
    "description": "Fracture of oth part of scapula, left shoulder, init",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANCSURBVBgZBcHbT1t1AMDx72lPKS29UCiz0BUMQxwwJptMSIAZzRgu6oOJ+jKjkQdjTAx/gI9mezAmJkb3ppKYqHsxe9oMOh0ZODd3xYVtFOLK1dG0pYWensvv4udjaK0BAACYmp8cAz4GjgEtgAmUgeta6XNfjn33CwAAgKG1BmBqftIEpoE3X8+cCCZCLVSsBiwXhLQRPOHy1iUhhfxVCPn2N6d+2gMwtNZMzU8GgD8Gk30jJzMvUbGDOLgsVwzqdJCCpdDCJYTFlnOVm5s3F4Qnjv/w1oWyDwCYPtrcPTLaNkhRung+AyF81EQdFnUUnSDbdoj1coD2yAsMpp497DrejwD+0vjqKPDZ6e7X/PdllS1q1JRgz45QdAJUbMhu7FKuVgkmChjxLMPJg1xevNH5/fXpe/6hySNfTLQNHTL8IbZ8AvQ+WmWEW0/81Gwfixt7qPoSwY5HOLEseVXCLEkONWd8tx4/bDKBY5lYmrvWJvl6H73+AygEuW0X264RT2kqTTMsqx1wNI0iSDbvcOLpo3iO6DeB5rDZQM7aZNuxiIY72XGjlEqKeIvNvoRFXg6QvnMOaVfJZw5S3AkTCUXxXNHo01obhgbXqaCtVkxPcukvD6M+xNayydpqjDYnhPA0+5M9BJfv4Nk10BohhGFKoYoVt5Ju9jcSrX+O9byJ7QVoVR8RD0ucDY/dnCDd1EVPaohdu8rC+u8UqxNIocqm8MTtx8XVdFc4w2//zdMY7qLOn0Eol/G+95BaIZVEodksr9G/f4Q9t8YnFz4Euh/4PFd89fPDWdERacG0NigX/iSRcLCFi9SKXCHLv4UlVvKL7NQK5IorDGTGeCb1PLuBe6O+b189P+M63sWZxVleTA8Q9zeQiChsYSOk4KlYO6lYB63xTgL+EC3RNLfX5rm2csOyXGImgOd471zJ3p1zau7hiSPHebRt8o9wmL72Oa5ysYXLgWQvw50n+Ts3x5WlWScs23uWz2ZrhtYagFe+fjkqPHFeeHL83ZH3TWQKrcMYPoNkvMKnF0/T1zrM1aW53Qbd3rtwZmkdwNBaAwAAMHJm6A0p5AdSqn4lVQIAKO/47yeFIlBTMrB9VgsAgP8BON24AjtZfcoAAAAASUVORK5CYII=",
    "reviews": [{
        "id": 1,
        "authorName": "Germayne",
        "comment": "Toxic effect of smoke, intentional self-harm, subs encntr",
        "reviewPointsFrom0to10": 5
    }, {
        "id": 2,
        "authorName": "Everett",
        "comment": "Toxic effect of halogenated insecticides, accidental, init",
        "reviewPointsFrom0to10": 9
    }, {
        "id": 3,
        "authorName": "Wynn",
        "comment": "Nondisp suprcndl fx w/o intrcndl extn low end r femr, 7thK",
        "reviewPointsFrom0to10": 0
    }]
},
{
    "id": 10,
    "name": "Maurise",
    "description": "Infect/inflm reaction due to int fix of site, init",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJRSURBVBgZpcHda45xGMDx7/3yzB6ebc3ayJS8rBDTkixRMsoByoE/wIkDcbQTckJRTnYmB07kiPIaRa28JM2iaLLJS0mYtzLbnvu597t/1++6TCknitrnE5kZMxEzQzEzlB679M34C1HFe8WJ4D3kYuROcF7ICyPzSp4LKdPWd5T5wxA1QjBEDQmGF8Or4r3hRfFBKUQ5c+cLKb9N1ISgIGpIUIpgeFG8GIUoTgKFN5wohVfmVlLyqpAybfuaCv1Dk/SsrjBeC1wYGGNPdzPlughjmsHQuxr3RsbZu3keTpRz976iuSd2ItSc0lxJUIVZpZi8CJTrIvpufCICjl58z6LWOla2l2lvqWNxWz25VzQT4swJD99krFs6m6uPx6gvRezb2kqaRFRdwIDMBVRh4/JGfpmcCjgfsCyQVnNjy8oG7g5PsK2zkZpTTlz5yOHd7WRTATPIpgKDI9d59OIm1XyMQgqqsgl1XaTjeYEPxv2RCdYumYMZVJ1gZmQugEEk/bz89oQtm9axcG4Hd4evMfj8PC3zXhH1HB+xnV3NfPjuKLziRHHeKERxohSiNGkve3ZshyRm14qD9N3eR0LM+cu3iCcmhbwINNQnNMxOaConNFcSWioJrZWUtsYSP6pfKEUVdq04yC+9PWdY2tZJFHvS77nn1M2PmDfUKVYI5hVzAQrFgrJs1RjDowMMjT7g0LaznOzfS30yC9MSkZnxL90HFhxfuLjpyIbOjXTM7+L156cMPHvAh7fjfZGZ8T+6Dyw4CewHGoBJ4PTgqdFDPwHX2V3XB5aEeQAAAABJRU5ErkJggg==",
    "reviews": [{
        "id": 1,
        "authorName": "Ignazio",
        "comment": "Calcaneal spur, left foot",
        "reviewPointsFrom0to10": 9
    }]
},
{
    "id": 11,
    "name": "Wye",
    "description": "Oth fracture of second lumbar vertebra, init for clos fx",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKVSURBVDjLZZJPaFRXFIe/92aSyYyTZGL9lygxcYwBi1hcqQtRIYoobtpNaVcVLIHArIKb4EJEwazEveAiQSq4EASzcCOiICqCDjHRWFQsmAYyZjIzzrv3nNPFs/EZDxzu3ZyP3/nuDcyMZE1OTuZVdVRE9onIWhHBOdflnNtdKpWWWVVBEjAxMfGTqt7s6enp7+joIAxDVJWZmRnm5+dr3vtdpbtnRgGXmbISQDoxnBeRG8VisT+KIqanp6nVaogIZsZAunH1yNTYXWADcOL/uRWAiAx3d3dvd84xOzv7xnt/WET+ERF+vXdxuKu+MA68AjZlpmz5O4D3fl8ul2Nubg7n3ImRkZG3AM2jwXHgEnD1ytD45Xw+f3vh/HkbGxs7uBqwPgxDqtUq3vu/E54+AL9f2Hv2VrC83Ozs7KRerz/6RuK7+3/Yw7lBPn7KIiKc/PExKXOYeMzH7Zxw7dkeVJWNbYsc3/yYwdNPgziBGb/8fIiAkCCVJeAYaADpNsBAHOKrnBuqgToAXl9/8NWBiQcMv/AX6cw6giAP2gLZAphC/ROy9Iqo8QH1dbL9I1jUTAC8BzWQiEr5CWG4hsLO/by/M47pBnoPDFF5WSZqLNLe14WZYC5KAhyYYeIoDO4gbF0HgSJN4flCll4iCsV+PtcymK+D6QogBDDnMBMQx+KLZ1TKjyD06Gel2WiCRVRmpqnMvovXVcWcSyRwLqZKRGGgj1TuBwgjtv32J9uch6WPdBZ7aF1qiROorQZEoIr6iEq5TCrXDm15SLeCeliq0Fj8F1er0t7bgaHx2kmAmZDZcors1hRBayZ+wrAFVCBq0N6oIq6JqcS+vE8AoiZvbo7GLrzHvPvSfuVEJP5YIvFdBYD/ALt6pUq4OEUGAAAAAElFTkSuQmCC",
    "reviews": [{
        "id": 1,
        "authorName": "Sianna",
        "comment": "Unspecified superficial injury of unspecified shoulder",
        "reviewPointsFrom0to10": 8
    }, {
        "id": 2,
        "authorName": "Kayley",
        "comment": "Toxic effect of corrosive organic compounds, undet, subs",
        "reviewPointsFrom0to10": 6
    }]
},
{
    "id": 12,
    "name": "Shawn",
    "description": "Injury of unspecified nerves of neck, subsequent encounter",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAMPSURBVDjLpZPba5tlAMZ/75cvadOmzdI2jTNp03TDJM457fAwmYeLyUBU2EBRmBfzwgvFK/0DBBF2oxc68MKK4EAKiqBUGV60qY4yWbVh2cza0nXFmqQ5NS1pvuP7fl50ThG88vkDngM/HuF5Hv9H+un3vtuXGArN9fcEEngCPIX0PKTjYFkOjuNgmxaWZeEaFtI0sA2TVm2rtF68eUJPDvcVjh0aSaRiAwCo242k8lDK2zOTCqk8pJRI5eFIya/53wZy1k5Rjw/2JqI9PpbXK7hS8kvhFo8ezXBlcZkH7hvFdRSL126RzY5x6VKBkbFhpFTckwgTvWt/RBdiL9XvEzTbio4r6Eg/zY7DzOUVpFQoT8MmiCUCNOo7JBMRXKUQQiDeuTDvaa6BpjyE5uPYRJotO4BU6vYMcKXCVYqknCVRmcYXOsxufY4vF+PoP19ffyUT9c4Nhnt90Wgi5gsERWmlSKnSwHYlriuRUpHuX+RQWhI8fIZw6kFaa2lO1ie3xV8Y3/hg+otH7k+9nBlPEg71kB7W7qDqlL/HaF6hLzxBc3WJ8OABAn3DFGc/N3WAF979ZjQbD5+KRQexJYS6/uZs1n/Eal4mMn4SqzxFoEewnr+BY9oN02g/pj311pQwmq2vMqlYN0IHodHfLfaSN3MYlYuEDzyDWfoE4d/CH+rD61T48Ifg1ENvfr2s5d5/yctkU0cj+yKUWw5SKYJ+QaX4LTu/XyR88HnMPz5G8zvYO2OU5vLMhl5nxUgdB9ABTFtp5XqL1fIupjVEfmaSE2Mlsk8+h12ZxBfwMLeTlOYW+Mw8i7QFmrajA2gAruPgSIXtumwuXODpZA1JnHLhIxQmu804a7mrnN86w8ZuD7om0AOBg/9oYGMYNiNDXeyv57j3+KcsTb3N8k/zdI0eYbdRphB9jaG7h4koRadt4No2dwzW8tdudKq1jL+7l0ytin19mtSRx9muNVhdWGIm8CrV1Rp4myilMNttqhsb5wHEv+/84hMDxsR4TH84m8LzW/NGtXb22XNXb/7Xnf8EvI+SIusIR2cAAAAASUVORK5CYII=",
    "reviews": [{
        "id": 1,
        "authorName": "Randene",
        "comment": "Other vomiting complicating pregnancy",
        "reviewPointsFrom0to10": 3
    }, {
        "id": 2,
        "authorName": "Arlinda",
        "comment": "Embolism due to cardiac prosth dev/grft",
        "reviewPointsFrom0to10": 5
    }, {
        "id": 3,
        "authorName": "Hendrick",
        "comment": "Intentional self-harm by blunt object, sequela",
        "reviewPointsFrom0to10": 10
    }]
},
{
    "id": 13,
    "name": "Mord",
    "description": "Diseases of the circ sys comp pregnancy, unsp trimester",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAM+SURBVBgZBcHLT1xVAMDh333MkxmYAYZOwbGGPqRaHq0gpIBGba3GR2KibjQmsHDXsHDjP2DSmBgTU7swUUk0ajemK1HapjYIoYRqi4DoUAsNjwIyw9wZ7tzHOff4fZpSCgAAgJHJ4UHgPNADZAATKAG3VKAufTb49c8AAACaUgqAkclhExgF3nwtdyaSjmWw7BpsD4R0EGxxfXNMSCGvCiHf/vLlHyoAmlKKkcnhEHCju/HJ/hdzz2E5EVw8li2NsIqwawco4RHDZtOdYHZjdk744pnv3rpS0gGA0VMNx/oHmrspSA9f1xBCpyrC2IQpuBG2nRhrpRCPJp6mO/t4h+f63wMYxbMPBoCP3zn2qjEv99mkSjUQVJwEBTeE5UB+vUxpf59IehetLk9fYxvXF2dav7k1etfoHT756bnm3hOaEWNTF6CaOCgT3N4yqDo6i+sVgmiRyKG/cWvz7ARFzKLkRENOv72yVG8CPbnaFu7YG+xEdZ4wDhMgWN32cJwqdVmFVT/OcrAHriIlIuR3XM48dgrfFe0m0BA3a1i1N9h2bZLxVva8JMViQF3GoSltsyO7sNy7RFSZ8n+7FPbiJGJJfE+kTKWUpinwXAtFDjMkGZv20WIJNpcFuqqlOVMlWR7EWvdxmMX37oNSCCE0U4qgYHlWS4ORIhntZG3HxPFDhKMRok0x7v27izOTIhOeIROdJ+JZlJ0yY1O/IEVQMoUvfl8pPGg5Es9x7eEkqfgRwkYO37FRRopwIk2tO0FbdomnjvfxSP1RbixcYXp+AqNa8XTfExd/XLopDiUymPY6pd0p0mkXU7iENEVENzAr1+hq60Tqks6DZ5GaT1/7aXTPyepfvXJ53HP9n8YXb/JsSxd1Rg3pREBdWFIbdkiGXIqVLUJagtePnwfggxe+4HBTB0BIB/Bd/91f83fm/lz5i3NtPbSmTA7EFY1GmQbdplgusrAxxYWrQwBcGB/i3vYcgKMppQB46fPnk8IXl4Uvz77XP2QisygVR9M1Fv75ltXiFKc7BjiaPUn+4R9Mzf3G2v3SJ5pSCgAAgP6Pet+QQr4vZdAeyCANAJSMatnTveoBIAqUgUvTFzc+/B+ww5qo63KzbgAAAABJRU5ErkJggg==",
    "reviews": [{
        "id": 1,
        "authorName": "Goddart",
        "comment": "Primary blast injury of right ear, initial encounter",
        "reviewPointsFrom0to10": 5
    }, {
        "id": 2,
        "authorName": "Efrem",
        "comment": "Disp fx of acromial pro, r shldr, subs for fx w routn heal",
        "reviewPointsFrom0to10": 3
    }]
},
{
    "id": 14,
    "name": "Chalmers",
    "description": "Nondisplaced fracture of neck of scapula, left shoulder",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAH3SURBVDjLhZNJjxJhEIb7T8xVw78g6fh75mJGY/SqTjRGTXTcbu7xxtItPew2YxMgbGkCNMgSQkgDAiHRKNpkWPL61ZfQGcLioS5V9T711tfVQrVaRaVSQblcRqlUQrFYRKFQgK7ryOfzBwCEfSEYhoHlcrkRvV6PQzKZzF6IQJNJYJomn9zpdGwI5ZgLJJPJnRCBLFMzTaNELpfTJ5MJ5vM5zxMwnU5D07StEIGmrhqZ+JxZNqfTKUY/u4gbMq+1220kEgnEYrENiECTV5YXiwVIPP71Hc9Or+ORdAjNkHit1WqRC0QikTWIwHa0xuMxb5rNZhj+6OLk9Bpef7mN92f38JyBVpBms0kuEAgEbIiQzWavsB2t0WjEm76ZOTyWD/FWvYtP2kN8OLu/Bmk0GuQCPp+PQzgllUqJbEdrOBzypnq3gKe+I7xTj23IiXKEWMnF67VajVxAkqQDe5d4PC6yHa3BYLAB+fj1AV4Fb+KlcgvzxYy7CIVC8Hg8l9delO0nqqpq9ft9G/Lk81W88N/Am+gx/vz9fVHssFe4GNFoVAyHwxZdIrdr6kx8B9Nzyxa73W6H/YjbjiMYDIp+v9+iS1x9YhKz/Jp4J4BCURQne2mLDqxer28V7wVQyLLs9Hq9FoldLpdj6yn/73dlU51MfGlX/R/5GCirExPTUwAAAABJRU5ErkJggg==",
    "reviews": []
},
{
    "id": 15,
    "name": "Zelig",
    "description": "Poisoning by mixed antiepileptics, assault, init encntr",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADwSURBVCjPpdGhSwNhHMbxX93f8WpRs/VAGXYF0SA4DgyGsaDBwdQfJoO23dzumsFgfoNcMEwss3gKr0G4uuzSC6dfy8KdDBHkU79PegT5nfw5SEiIiRnQp0dEJdCaBgmO4ZQjYi/YrU0DDXVyVVlHdDlhe7IRIqL1AU/kMww5YK0ummWM6cww5oHNd1FfUDDi44dHCgpaX3KMx3NLzqgk5xqPp4G0cTh6vHFf4rjE4QiQQ1JSLnjlruSFM1JSFpAWFksXRTmiSYN1VlmhicUyj+x/3mBRzitOWcISY5Cwv5NtVdbLLGIwzGGeTVv+/eY3onJlSlwTV9MAAAAASUVORK5CYII=",
    "reviews": [{
        "id": 1,
        "authorName": "Morse",
        "comment": "Inj ulnar artery at wrs/hnd lv of left arm, sequela",
        "reviewPointsFrom0to10": 8
    }]
},
{
    "id": 16,
    "name": "Franzen",
    "description": "Lacerat msl/tnd lng flxr msl toe at ank/ft lev,unsp ft, sqla",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALHSURBVDjLbZNdSJNhFMf/m/v+atayydzEFk5rlbrmLBcpRV4OW9hVdNNtV14IuxQqIoLuvI1ouykLE4rdhnNivTmKikywbaBurM19f77v2/O8MJmtBw7PA+97fuec/zlHxPM8Wk8ymTSLxWIvx3FTjUbDQQz1ep0plUrBbDa76Ha7463/i1oBiUTiokgkmpNKpR5yg4BAAdVqFYVCAbFYbCmXyz2anp4ON33Ezcfu7q6ZRJ1TKBQeuVwOCmYYRrBarQalUgmLxeLZ39+fW1hYMLcBSJpeiUQiRKYOFOJ2X8aViQlotVqUy2WQzGAymTx7e3vepp+k+ahUKlMajYbeQrQf20mshVeFTFyuMfQaj1B90NXVhUwmM0Vcnh7KgNTpoD/TemUk+lo4BJ3FCV3fJD5tN6DT6WiWUKvVKBaLjrYSiMqCYDR9EhYcB9SgQoWVwSCLIvX1AfhGHkRECsD/AEw+nwfLsiDtwqWxURTzWZTKWQwr30PVeQ7y4jqi0SjVg2kDEHWDRBzhHQqFIEUZd66ZMHMqDL3xAnTdwxDnGMR+rtIyg22AdDq9uLGxEYzH4yDdQCQSwbs3z5D+tQytQQ829xZG+21YVd9TBg231AYgyruIQCdWVlaEj4ODA7Ad20H3mRnSos9Yf+6HRl+GWVczjPSJHx4C+P3+m6QDfjJ5Q6T+e4FAAMuBJziqlkLbWQJX3SbCcmALH9E3MQu7sXprfPTs/QMAmcCXVqtVptfrYTabY46R87huZ6G3DIErfSG+ZTi8NnC1HSgUmxhw3sCope47ANDhUalU6OnpgdPphOskYOkfh0qbIq37QzamA8zrTRoKXGUTx/t7cdUmwYd5+2lhmXw+H7+1tSUMEbXZyRzcd1+gQ/ybADLEsXVjxehQ2pD4FsHm8vwr0b/rTM/qY0eKZzkVz/Ekfa7F+IObThrxZf4CSlpy3yYZtPsAAAAASUVORK5CYII=",
    "reviews": [{
        "id": 1,
        "authorName": "Serene",
        "comment": "Disp fx of med condyle of unsp humer, 7thD",
        "reviewPointsFrom0to10": 2
    }, {
        "id": 2,
        "authorName": "Randie",
        "comment": "Other syphilitic heart involvement",
        "reviewPointsFrom0to10": 4
    }, {
        "id": 3,
        "authorName": "Burl",
        "comment": "Malignant immunoproliferative disease, unspecified",
        "reviewPointsFrom0to10": 3
    }]
},
{
    "id": 17,
    "name": "Belita",
    "description": "Sltr-haris Type III physeal fx right metatarsal, 7thP",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJuSURBVDjLjZDLa1x1GIafc8uZqUlMMmmsLV7SC2hLCoJQ6tou3Lj0T+jGtQjusnLlP1Bw01UJgrqUoAiC2aixDUQl2oC9TjuZSWbOOTPn/L6La5MRfOHbvTy8zxe5O8fT3Hv9opt/784ZN0vcqN18F2P9hesPv/5X2d1P3Hj71VF4ctu92nEvttyPNj10b/vwh7N/Hu+mTImrzaYLb8PkMcgAwoA4n8PELhzvTgWYgtUPicIh+AQd70Mdo3JS9z8WODr8mdD9BqsLrDoi61zDBP7nAiPOz5HNv4nXT7HsFOaGip0E1Nuvzbv5rpudcSNx9TryCBn9hvR38EmBViPa569OVzC1T9KVj85lL70PPgEt81D+RfXHOu3ld/DWU5J8AC5oYBrAP05X3gMZgg5BC9L2CqE8IIl38fEILUdk0QoapiioAFbiUoA3WP0cmjEixsyLF/HWMzTvk8wuoNOeaGJouYce/oI1Xbx+QDJ/Hm2cuv87XpVEzQAvH3F6Keboq2VXpVaxXVPWUw1OlHVI2qvE2SKedXAfIMHJFy9hrS5N7znt618Qp7PABA/DfHJ0963ed59+FqsYURwj1R4yvIcMfyWdvYI0Tih7NAfP0EaJ82UIAxg/Ipo8obVwiabxC7EGNsa9bbK5y6Rzl8mWrlEd3CfJl9BTZ2m98S6Wv0z14A7uExxB5JDR/gZN7RupBNuq+3c/iE9fIckSwrig6O9RHfa+LX/8csHF12Zmom5n7qdXoCBOHSkfU3T/JtS+Fd2/01k14aap3VBlzYQdU9805dbVDwf7APufL66K+E0NfkOFNRXfUWPThFv/APJzrlrFns7aAAAAAElFTkSuQmCC",
    "reviews": [{
        "id": 1,
        "authorName": "Broddy",
        "comment": "Fx oth prt scapula, unsp shoulder, subs for fx w nonunion",
        "reviewPointsFrom0to10": 2
    }, {
        "id": 2,
        "authorName": "Addie",
        "comment": "Malignant neoplasm of pyriform sinus",
        "reviewPointsFrom0to10": 1
    }, {
        "id": 3,
        "authorName": "Augie",
        "comment": "Postdysenteric arthropathy, unspecified hand",
        "reviewPointsFrom0to10": 2
    }]
},
{
    "id": 18,
    "name": "Rachael",
    "description": "Nondisplaced fracture of lateral cuneiform of right foot",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALDSURBVDjLpZNLTBNRFIb/6RMqtEDBFopFXiFGIERYmKgJUXBFQly4gI1LXbghcYPiI/JYmbhxLQvC3hjjQkSL4SnvYCRUCNJCSwSq0OnMdObeud6ZBIzB6MJJTiZz7/m/c89/5gqMMfzPY/tXwkYkUmkRhOuU0nJCyKvs7OyXPp+PHu4LfzvBSjh83+PxPM5wOs1vSZKQTCbjsizX1NXV7ZmLBuBPMbOw0LsVjzNVVZmiKIwLGQewRCLB5ufnv49NTGQYeZY/VQ6Nj/d5vd67BV4vOAC8IjjEqA673Y4stzuHi28buccAoVCoJ+D3dwZ8PqTTaRPAewf3wHwfHBwgx+OBRkjnMcDq4GB3FaX3TrvdZkVDfCg0QtM0c52birSm5f0G2O7q6vY7HF0FNhtofz/02VlTbIgM8ZORdvS+v4bME04kRRGpVCp8BFhtb7+ZUVralcF7JpOTIJEIhIEBYGjoV2Wiojj/DDpeNOHT8hJSothkjnEsGHT6W1qUYGsrtOlpkFgMOh/Xw+Y1MKpCZRQqhxTlVaK2+CI+fn2Hxc0pppC0+8OdhGhLWq0lRQ4HGDeHRKPQueOUB9FVNFffAGU6qE6hgyG2H0VN8QWIqizMRkb2a3ssebYfsqzK8Tj0RAKU93YIMI5siDf2vkDTuYm6Bo1qOEgnUXfqEkRNskytj+5ZdkRxI7y4uJRcXmb2wkLQVMoMhSgglMDnDsLvLkGhpwx2ayYKsgOYi45hbG10R1LRYP7Kz3Jz8+srKuYqq6r8mYzZpc1N3GqLQuFjVHkrMlFZef5Z4XzZVcxExjEcfrOtElyJ9bHPR3fhaVZW7kmX6/m5QKDRIwhuhRsZkyQ9Kkmtbbu7r6t7LKmG4GVXKDy8peqmeOXYZXrkcAgeq7U+02JppIytqbr+tkNRksZe2QMhRXWrS9Zp2bc+tn6o+QkxLL87j8znVAAAAABJRU5ErkJggg==",
    "reviews": []
},
{
    "id": 19,
    "name": "Kylen",
    "description": "Other tics of organic origin",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAEGSURBVDjLpZM/LwRRFMXPspmEaGc1shHRaiXsJ5GIRixbCr6SikxIlqgJM5UohIiGdofovHf/PZVmYwZvTntPfjnn3txWCAFNNFE33L/ZKXYv+1dRgL3r7bu0PbucJp3e4GLjtsrXGq9wkA8SU7tPk87i/MwCzAyP5QNeytcnJl46XMuoNoGKDoVlTkQhJpAgmJqcBjnqkqPTXxN8qz9cD6vdHtQMxXOBt49y5XjzLB/3tau6kWewKiwoRu8jZFvn+U++GgCBlWFBQY4qr1ANcAQxgQaFjwH4TwYrQ5skYBOYKbzjiASOwCrNd2BBwZ4jAcowGJgkAuAZ2dEJhAUqij//wn/1BesSumImTttSAAAAAElFTkSuQmCC",
    "reviews": [{
        "id": 1,
        "authorName": "Parnell",
        "comment": "False labor before 37 completed weeks of gest, third tri",
        "reviewPointsFrom0to10": 2
    }, {
        "id": 2,
        "authorName": "Edyth",
        "comment": "Sltr-haris Type I physeal fx upper end of left femur, init",
        "reviewPointsFrom0to10": 6
    }, {
        "id": 3,
        "authorName": "Waverly",
        "comment": "Poisoning by tetracyclic antidepress, accidental, sequela",
        "reviewPointsFrom0to10": 4
    }]
},
{
    "id": 20,
    "name": "Giacomo",
    "description": "Maternal care for oth fetal abnormality and damage, oth",
    "imageBase64String": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKLSURBVBgZBcFJaFxlAADg7/3zZkjbYBfTZIg1SNVCFjW2hgbUQwWXHkQDHkUPgkcdiuBFiEVvXoJ4kHiqiHhQLAUXqCjGiNGaSG1Ra9pqp5JI4tY0y5u3+n1R5xm7GgMmxVoAAgIAAgAgx5KptO143Bgw6fYjLX2HqNUJMVFEiIgCISJEqBEhQlWwdKbV+PiUWKyl7xCdGs0xalj5ib8WCIFaQKCGKFBVdPfQe5DeU60Y1OqELu6eAEyQbbB4mosfUawjoqoQ8e+fdN1ISVAiitlc5tyHXJ5lY5X6DoYe5+jr9I8DIrKMJCNPSYkFhIjNZc6/Q4iIAz2jjD7JzgEOP8/CNBdP08lJO2QFCUFAQHOMJ97mgVe47THWLvP5i7RngIPP0jdKp0OSk+WkxEqoEaG+g72D7B1kaILZV5l/k7J0bO5l68maN6oBjWSLrCAhCIjwz1k+eY75aTZWqW/nvpfovomZKUnWsa9n0FPlBWknIytJiQWEQBXYWqH9Bcvfaa39qqpyaZlJ80z/ngMGm4ddTzY8ujXnZGfEtpRYCRG1ivEXqHfT/lL+33kPDj+tqEpFWShVlq5ddce+e62nW460T/isIAahYu8I/WNAlUvOTSuq0pW/F2VlLi8zWZFZ61w3evP91rNNY3fOioGIrRWyTerbWb0kyRN5keu7YUBeFoqqtHytbU9308LVr/382/fe/4FYiipHwafHqO+kfdZWmTjxzWvSMpXkqf09w8b3P+TMlVk/Ls54d/cjDiQnxf4wZenblt4xulBk3HKXD7IRsoK0ICvc8/tborDNL5fmvLf7qFvbbRqmos7DdjWaJjW1lMiRIEWKBDnDQ6yr+Wq+MFCgYSpZcvx/t+Akg61CC8wAAAAASUVORK5CYII=",
    "reviews": [{
        "id": 1,
        "authorName": "Brittan",
        "comment": "Miltry op w nuclr radiation eff of nuclr weapon, milt, subs",
        "reviewPointsFrom0to10": 8
    }, {
        "id": 2,
        "authorName": "Tito",
        "comment": "Poisoning by antithrombotic drugs, assault, init encntr",
        "reviewPointsFrom0to10": 3
    }, {
        "id": 3,
        "authorName": "Luz",
        "comment": "Oth fracture of fifth lum vertebra, subs for fx w nonunion",
        "reviewPointsFrom0to10": 5
    }, {
        "id": 4,
        "authorName": "Cooper",
        "comment": "Diseases of the nervous sys comp pregnancy, unsp trimester",
        "reviewPointsFrom0to10": 7
    }]
}
]