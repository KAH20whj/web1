/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */
/* eslint-env browser */

function SoundSystem()
{
    this.isLoadComplete = false;
    this.nowResourceLoadedCount = 0;
    this.intAllResourceCount = 0;
    return this;
}

SoundSystem.prototype.AddSound = function( fileName )
{
    var SOUND_RESOURCE_MAX = 8;
    for(var i = 0; i < SOUND_RESOURCE_MAX; i++)
    {
        var soundMusic = new Audio();
        soundMusic.src = fileName;
        document.body.appendChild(soundMusic);
        
        soundMusic.addEventListener("canplaythrough", onLoadSoundComplete, false);
        this.arrSounds.push({ name: fileName, sound: soundMusic });
        this.intAllResourceCount++;
    }
}

function onLoadSoundComplete()
{
    soundSystem.nowResourceLoadedCount++;
    if(soundSystem.nowResourceLoadedCount <= soundSystem.intAllResourceCount)
    {
        soundSystem.isLoadComplete = true;
    }
}

SoundSystem.prototype.PlaySound = function( fileName )
{
    for(var i = 0; i < this.arrSounds.length; i++)
    {
        if(this.arrSounds[i].name == fileName)
        {
            if(this.arrSounds[i].sound.ended == true || this.arrSounds[i].isPlayed == false)
            {
                if(this.arrSounds[i].sound.paused)
                {
                    this.arrSounds[i].sound.play();
                    this.arrSounds[i].isPlayed = true;
                    break;
                }
            }
        }
    }
}

var soundSystem = new SoundSystem();