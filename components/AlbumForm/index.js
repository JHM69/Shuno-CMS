import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../common/Button'
import Input from '../common/Input'
import Select from '../common/Select'
import { MultipleSelect, OptionWithCheckbox } from '../common/MultipleSelect'
import Checkbox from '../common/Checkbox'
import RadioSelect from '../common/RadioSelect'

import FormSection from '../common/Section' 
import MediaUpload from '../common/MediaUpload'
import ThumbnailUpload from '../common/ThumbnailUpload'
import { baseUrl } from '../../utils/constants'
import axios from 'axios'

const AlbumForm = ({ type, defaultValues, onFormSubmit, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm()
 

  const onSubmit = handleSubmit(async (data) => {
    await onFormSubmit(data)
    reset()
  })

  useEffect(() => {
    if (defaultValues) {
      setValue('name', defaultValues.name) 
      setValue('year', defaultValues.year)
      setValue('duration', defaultValues.duration)
      setValue('label', defaultValues.label)
      setValue('language', defaultValues.language)
      setValue('contentType', defaultValues.contentType)
      setValue('genres', defaultValues.genres.map((genre) => genre.slug))
      setValue('primaryArtist', defaultValues.primaryArtist.map((artist) => artist.slug))
      setValue('featuredArtists', defaultValues.featuredArtists.map((artist) => artist.slug))
      setValue('album', defaultValues.album.slug)
      setValue('hasLyrics', defaultValues.hasLyrics)
      setValue('url', defaultValues.url)
      setValue('copyRight', defaultValues.copyRight)
      setValue('downloadUrls', defaultValues.downloadUrls)
      setValue('origin', defaultValues.origin)
      setValue('primaryImage', defaultValues.primaryImage)
      setValue('lyricsSnippet', defaultValues.lyricsSnippet)
      setValue('encryptedMediaUrl', defaultValues.encryptedMediaUrl)
      setValue('encryptedMediaPath', defaultValues.encryptedMediaPath)
      setValue('mediaPreviewUrl', defaultValues.mediaPreviewUrl)
      setValue('permaUrl', defaultValues.permaUrl)
      setValue('kbps320', defaultValues.kbps320)
      setValue('isDolbyContent', defaultValues.isDolbyContent)

    }
  }, [defaultValues, setValue])

  const [artists , setArtists] = useState([]);

  const [search, setSearch] = useState('');

  useEffect(() => {
    
    axios.get(baseUrl+`/artists?search=`+search).then((res) => { 
      setArtists(res.data.artists)
      }
      ).catch((err) => {
        console.log(err)
      })
   
}, [search]);



  return (
    <div {...props} className="flex flex-col space-y-6">
      <form>
        <FormSection defaultOpen={true} title={'Album Information'}>
          <Input
            name="name"
            label="Name of the Album"
            placeholder="Oniket Prantor"
            type="text"
            error={errors.name ? errors.name.message : false}
            register={register('name', {
              required: {
                value: true,
                message: 'You must add the name of your album.',
              },
            })}
          />
         <Input
            name="coverImage"
            label="Cover URL"
            placeholder=""
            type="text"
            error={errors.coverImage ? errors.coverImage.message : false}
            register={register('coverImage', {
              required: {
                value: true,
                message: 'You must add a cover.',
              },
            })}
          />
 
          <Input
            name="year"
            label="Publish Year (optional)"
            placeholder="2012"
            type="date"
            error={errors.year ? errors.year.message : false}
            register={register('year')}
          />
          <Input
            name="duration"
            label="Duration of the album"
            placeholder="Duration of the album..."
            type="number"
            error={errors.duration ? errors.duration.message : false}
            register={register('duration', {
              required: {
                value: true,
                message: 'You must add the duartion of your album.',
              },
            })}
          />
          <Input
            name="label"
            label="Label"
            placeholder="one nice sentence about the album..."
            type="text"
            error={errors.label ? errors.label.message : false}
            register={register('label')}
          />

          <Select
            name="language"
            label="Language"
            error={errors.language ? errors.language.message : false}
            register={register('language', {
              required: {
                value: true,
                message: 'You must add the name of your album.',
              },
            })}
          >
            <option value="bangla">Bangla</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </Select>

          <Select
            name="contentType"
            label="Select Content Type"
            error={errors.contentType ? errors.contentType.message : false}
            register={register('contentType', {
              required: {
                value: true,
                message: 'You must select content type of the album.',
              },
            })}
          >
            <option value="MUSIC">MUSIC</option>
            <option value="AUDIOBOOK">AUDIOBOOK</option>
            <option value="PODCAST">PODCAST</option>
            <option value="POEM">POEM</option>
          </Select>

         
 

           <MultipleSelect
            name="genres"
            multiple={true}
            label="Select Genre of the album..."
            error={errors.genres ? errors.genres.message : false}
            register={register('genres', {
              required: {
                value: true,
                message: 'You must select genre of the album.',
              },
            })}
          >
              <option value="pop">Pop</option>
              <option value="rock">Rock</option>
              <option value="hiphop">Hip Hop</option>
              <option value="rnb">RnB</option>
              <option value="jazz">Jazz</option>
              <option value="country">Country</option>
              <option value="classical">Classical</option>
              <option value="metal">Metal</option>
              <option value="blues">Blues</option>
              <option value="folk">Folk</option>
              <option value="reggae">Reggae</option>
              <option value="punk">Punk</option>
              <option value="electronic">Electronic</option>
              <option value="dance">Dance</option>
              <option value="house">House</option>
              <option value="trance">Trance</option>
              <option value="techno">Techno</option>
              <option value="dubstep">Dubstep</option>
              <option value="drumnbass">Drum Bass</option>
              <option value="ambient">Ambient</option>
              <option value="chill">Chill</option>
              <option value="lounge">Lounge</option>
              <option value="trap">Trap</option>
              <option value="indie">Indie</option>
              <option value="alternative">Alternative</option>
              <option value="grunge">Grunge</option>
              <option value="psychedelic">Psychedelic</option>
              <option value="experimental">Experimental</option>
              <option value="funk">Funk</option>
              <option value="soul">Soul</option>
              <option value="disco">Disco</option>
              <option value="gospel">Gospel</option>
              <option value="christian">Christian</option>
              <option value="instrumental">Instrumental</option>
              <option value="soundtrack">Soundtrack</option>
              <option value="kpop">Kpop</option>
              <option value="jpop">Jpop</option>
              <option value="anime">Anime</option>
              <option value="game">Game</option>
              <option value="other">Other</option>
              <option value="adhunik-bangla">Adhunik</option>
              <option value="rabindra-sangeet">Rabindra</option>
              <option value="nazrul-geeti">Nazrul Geeti</option>
              <option value="bangla-folk">Bangla Folk</option>
              <option value="bangla-rock">Bangla Rock</option>
              <option value="bangla-pop">Bangla Pop</option>
              <option value="bangla-hip-hop">Bangla HipHop</option>
              <option value="bangla-classical">Bangla Classical</option>
              <option value="bangla-baul">Bangla Baul</option>
              <option value="bangla-bhawaiya">Bangla Bhawaiya</option>
              <option value="bangla-jari">Bangla Jari</option>
              <option value="bangla-sari">Bangla Sari</option>
              <option value="bangla-lalon">Bangla Lalon</option>
              <option value="bangla-adhunik">Bangla Adhunik</option>
              <option value="bangla-modern">Bangla Modern</option>
              <option value="bangla-fusion">Bangla Fusion</option>
              <option value="bangla-band">Bangla Band</option>
          </MultipleSelect>

           
        </FormSection>
     </form>
      
      <FormSection title={'More Info'}>
          <RadioSelect
            name="isPremium"
            label="Is Premium?"
            register={register('isPremium')}
            error={errors.isPremium ? errors.isPremium.message : false}
          />

                      {
                        watch('isPremium') === 'true' && (
                          <Input
                            name="price"
                            label="Price"
                            placeholder="1200"
                            type="number"
                            error={
                              errors.price
                                ? errors.price.message
                                : false
                            }
                            register={register('price')}
                          />
                        )
                      }

              <RadioSelect
                name="trillerAvailable"
                label="Triller Available?"
                register={register('trillerAvailable')}
                error={errors.trillerAvailable ? errors.trillerAvailable.message : false}
              />

              <Input
                  name="url"
                  label="URL of the album"
                  placeholder="Example: https://www.youtube.com/watch?v=..."
                  type="text"
                  error={errors.url ? errors.url.message : false}
                  register={register('url', {
                    required: {
                      value: true,
                      message: 'You must add the URL of your album.',
                    },
                  })}
                />
   
      </FormSection>
      
      <Button type="button" onClick={onSubmit} className="w-full">
        {type ? `${type} Album` : 'Submit'}
      </Button>
    </div>
  )
}

export default AlbumForm
