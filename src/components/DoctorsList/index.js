import React, {useState} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

const doctors = [
  {
    name: 'Dr. Dibya Baruah',
    specialty: 'Cardiologist',
    available: true,
    image:
      'https://s3-alpha-sig.figma.com/img/ac75/d4ee/12df02d6bf011b7250dccfb481b7d95f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Tf1CaB9oSWMRs9MHRvSbmkTQvtaX71hv0Zv4WFclk~52alThzcP6JYvLyIiRlGtFyFSYjDyYhdTrMUd5bDgx~Ry~bJaHADBfIH4JjWOO2C0-woo2SiDOizdQwOfb6EduPShsBmljxWQoL7EX314oTOCVb9NbLiQSOupM4wNvkpqpoT2fz9qY~SxQrwLMGSEApkva~V1P352l9jjhCR9iuI4kTqfZiHAuAvODMEZR-xtQUJBtUcpFnKB34WRO71magC7Bb-hbWakAlxMg6VtxovrREuxhiVsFIrPQ8c1dh4uG28Zl3AbyV39bRM4rZYAhWY-NRWAuNZvpUgZBnVaprg__',
  },
  {
    name: 'Dr. Vignesh Thanigaivasan',
    specialty: 'Cardiologist',
    available: true,
    image:
      'https://s3-alpha-sig.figma.com/img/856e/63bb/1751bc2928557d461994c4074d6d586d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t86QOHqSB8xP6rMkKfICrUcd7t-3u9JqkPQrGvqTL6XEF2sVbMdGJ-B1JT3BVCVX9K8a3TBXMsTUIqBspfSolsvBC6zrAbbmCqpymj7MrtPO4SVIuGf1raGVcDuT0WAnKUFxQRNV~kkxslwbZ3tbCHLTM6B8K0zlr0koBebPmHfsow~9DAdpFNX3k7M7wQ9bYeYi8L9UyAD7cxffXjlOtdwuUA9Nz5Zpibph8Wv9j~gpNUicxali3lT5TyJmKG~-~Tr8lLIHHarn~pwU129UnPZ-AQr0FsXFR~mEtFgwe6fIW8ACb30w316NyDUBQOPcOcHD8dWXHd8pWajAHcajFg__',
  },
  {
    name: 'Dr. Sarita Rao',
    specialty: 'Cardiologist',
    available: false,
    image:
      'https://s3-alpha-sig.figma.com/img/12e3/a3b4/652c6ac512be14243e40375d469cc75c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UbkWK3SduMXIa~7I2IHgJtcEceJtCJl3sY2P-Wtf5Kb-eNHPiy60hHij8nNuyyL9FlnnUm8hfnSVAFi1ukfXGaWXR0YDa-3t1jqvM8-JkRnaV3gn3iZJ1Ger~7UbTyBuD4uqlQ5EO~ixlQ3n9nz4e7kSCpk0NWVABHoIpXmnwJgfQImZA-WZbhFRmnqduHwVFBJMynyGizQ9-fAUS-EzKuklAyvIvQWOInKV1G-LPnzbHHBZNbUvKWN~~wwCdBC0R4-nw2Ikj9nji-hvq5fP2JQDlkDB9FSBsyU4Axan8BNktbXIqZiWsJwxnBimQwvMuVZ4zM-5LD4sGROOxsm~UA__',
  },
  {
    name: 'Dr. Ranga Reddy B V A',
    specialty: 'Cardiologist',
    available: false,
    image:
      'https://s3-alpha-sig.figma.com/img/c859/f673/238ace75794ff75c3a5f5e25fc255663?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BxSpMrVHCJY46RYzkCKihCEnw3qj9qA3YamzSKHS3yNyCTT5HTTEadO~JLl6ROx6LpNR1GAMdEaRGIH2TtD8XZFTR-q9iLA1GJwiCJJOOy5tfDgW9Urg9h3nFUfi3mroPP6yVsjqOmFIfptoXgIfV8ISlbz6~J8M-lg6dJFpainysqbq376P7Y4UF3QZSoEXHYuPmvI62l6RlWh8VDaM94DFHMPwovoGb-jJnPL6vqh1QjPN3vMaUyme~SA9sAuv1kmqdZcK1a6ksrp8PRUeDynj0cmk1tfV~h2Zrumg9u0cgCr4rX8vGVaKuaVZdqwTUXgmEKi16sObGx-RQqlhyA__',
  },
  {
    name: 'Dr. S N Pathak',
    specialty: 'Cardiologist',
    available: true,
    image:
      'https://s3-alpha-sig.figma.com/img/dd8c/17e2/11b155b16a46b220ea327e332407e6c2?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iWyAcvNK777E3GMTTdb0di4r4cirweI7xVHSmsw9uD9K639LSxBo-AEltMD7QJ3JROQkjtTf2CF~iBGUn8JAgZ7TYZZDnpzDSPShqUSKSlLeuPgqFjCwLT~daaYiAwsRA8MfVRytLlLCz1aWViFSwGdSEZ1OcNRosedOU3RKMKwDe8tt6uASiUf1~4O4LhKgL-oPvOJjZ0RqRTWR1BG5EQ~DmJ9CurEa2ECu~g7-5tNzVzLQa5h-IzCPYaQ89gAPUPHET7Kb~NsUTxzzGnof8RCGtTEXv3Eq40y1Ds6LKqLUht0TBpRAtZJDxWrk765dZhSZnWZ7gb4KvsppB5uvNQ__',
  },
]

export default function DoctorsList() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('Cardiologist')

  return (
    <div>
      <div className="header">Doctor Consultation</div>
      <div className="container-main">
        <div className="button-group">
          <button
            className={`button ${
              selectedSpecialty === 'Cardiologist' ? 'selected' : 'unselected'
            }`}
            onClick={() => setSelectedSpecialty('Cardiologist')}
          >
            Cardiologist
          </button>
          <button
            className={`button ${
              selectedSpecialty === 'Neurologist' ? 'selected' : 'unselected'
            }`}
            onClick={() => setSelectedSpecialty('Neurologist')}
          >
            Neurologist
          </button>
        </div>
        <p className="font-bold">
          Search result: {doctors.length} {selectedSpecialty}s are Available
        </p>
        <div className="grid-container">
          {doctors
            .filter(doc => doc.specialty === selectedSpecialty)
            .map((doc, index) => (
              <Link
                key={index}
                className="card link-element"
                to={`/doctors/${index}`}
              >
                <img className="doctor-image" src={doc.image} alt={doc.name} />
                <div className="p-2">
                  {doc.available && <p className="available">● Available</p>}
                  <p className="font-bold text-lg">{doc.name}</p>
                  <p className="text-gray-500">{doc.specialty}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
